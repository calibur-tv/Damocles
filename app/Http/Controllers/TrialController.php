<?php

namespace App\Http\Controllers;

use App\Http\Services\SearchService;
use App\Models\Feedback;
use App\Models\Image;
use App\Models\Post;
use App\Models\PostImages;
use App\Models\User;
use App\Http\Services\Trial\WordsFilter;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class TrialController extends Controller
{
    public function blackwords()
    {
        return Redis::LRANGE('blackwords', 0, -1);
    }

    public function deleteWords(Request $request)
    {
        Redis::LREM('blackwords', 1, $request->get('words'));
    }

    public function mutiDelete(Request $request)
    {
        $words = $request->get('words');
        foreach ($words as $item)
        {
            Redis::LREM('blackwords', 1, $item);
        }
    }

    public function addWords(Request $request)
    {
        Redis::LPUSH('blackwords', $request->get('words'));
    }

    public function users()
    {
        return User::where('state', '<>', 0)
            ->orderBy('updated_at', 'DESC')
            ->get();
    }

    public function posts()
    {
        $list = Post::withTrashed()->whereIn('state', [4, 5])->get();
        if (empty($list))
        {
            return [];
        }

        $filter = new WordsFilter();

        foreach ($list as $i =>$row)
        {
            $list[$i]['f_title'] = $filter->filter($row['title']);
            $list[$i]['f_content'] = $filter->filter($row['content']);
            $list[$i]['words'] = $filter->filter($row['title'] . $row['content']);
            $list[$i]['images'] = PostImages::where('post_id', $row['id'])->get();
            $list[$i]['user'] = User::withTrashed()->where('id', $row['user_id'])->first();
        }

        return $list;
    }

    public function delUserSomething(Request $request)
    {
        $userId = $request->get('id');
        User::where('id', $userId)
            ->update([
                $request->get('key') => $request->get('value') ?: ''
            ]);

        $user = User::where('id', $userId)->first();
        $searchService = new SearchService();
        $searchService->update(
            $userId,
            $user->nickname . ',' . $user->zone,
            'user'
        );
    }

    public function passUser(Request $request)
    {
        User::where('id', $request->get('id'))->update([
            'state' => 0
        ]);
    }

    public function deleteUser(Request $request)
    {
        $userId = $request->get('id');
        User::where('id', $userId)->delete();
        $searchService = new SearchService();
        $searchService->delete($userId, 'user');
    }

    public function recoverUser(Request $request)
    {
        $userId = $request->get('id');

        User::withTrashed()->where('id', $userId)->restore();

        $user = User::withTrashed()->where('id', $userId)->first();
        $searchService = new SearchService();
        $searchService->create(
            $userId,
            $user->nickname . ',' . $user->zone,
            'user'
        );
    }

    public function deletePost(Request $request)
    {
        $id = $request->get('id');
        $post = Post::withTrashed()->where('id', $id)->first();

        if (is_null($post))
        {
            return;
        }

        if (!(int)$post->parent_id)
        {
            // 主题帖
            Redis::DEL('post_'.$id);
            Redis::ZREM('post_how_ids', $id);
            Redis::ZREM('post_new_ids', $id);
            Redis::ZREM('bangumi_'.$post->bangumi_id.'_posts_new_ids', $id);
        }
        else
        {
            Redis::DEL('post_'.$id .'_ids_only');
            Redis::DEL('post_'.$id .'_ids');
            // 回复贴
        }

        $post->update([
            'deleted_at' => Carbon::now(),
            'state' => 6
        ]);

        $searchService = new SearchService();
        $searchService->delete($id, 'post');
    }

    public function passPost(Request $request)
    {
        $postId = $request->get('id');
        Post::withTrashed()
            ->where('id', $postId)
            ->update([
                'state' => 7,
                'deleted_at' => null
            ]);

        $post = Post::withTrashed()
            ->where('id', $postId)
            ->first();

        $searchService = new SearchService();
        $searchService->create(
            $postId,
            $post->title . ',' . $post->desc,
            'post',
            strtotime($post->created_at)
        );
    }

    public function deletePostImage(Request $request)
    {
        $id = $request->get('id');
        $postId = PostImages::where('id', $id)->pluck('post_id')->first();
        PostImages::where('id', $id)
            ->update([
                'src' => '',
                'origin_url' => $request->get('src')
            ]);

        Redis::DEL('post_'.$postId.'_images');
    }

    public function tipsCount()
    {
        $comments = 0;

        $comments = $comments + DB::table('post_comments')->where('state', 2)->count();
        $comments = $comments + DB::table('image_comments')->where('state', 2)->count();
        $comments = $comments + DB::table('video_comments')->where('state', 2)->count();

        return [
            'users' => User::where('state', '<>', 0)->count(),
            'posts' => Post::withTrashed()->whereIn('state', [4, 5])->count(),
            'images' => Image::withTrashed()->where('state', 2)->count(),
            'feedback' => Feedback::where('stage', 0)->count(),
            'comments' => $comments
        ];
    }

    public function images()
    {
        // 0：新建，1：审核通过，2：需要审核，3：审核删除, 4：用户举报
        return Image::withTrashed()->whereIn('state', [2, 4])->get();
    }

    public function passImage(Request $request)
    {
        $id = $request->get('id');

        Image::withTrashed()->where('id', $id)
            ->update([
                'state' => 1,
                'deleted_at' => null
            ]);

        Redis::DEL('user_image_' . $id);
    }

    public function deleteImage(Request $request)
    {
        Image::withTrashed()->where('id', $request->get('id'))
            ->update([
                'state' => 3,
                'deleted_at' => Carbon::now()
            ]);
    }

    public function comments()
    {
        $types = ['post', 'video', 'image'];
        $result = [];
        foreach ($types as $modal)
        {
            $list = DB::table($modal . '_comments')
                ->where('state', 2)
                ->select('id', 'user_id', 'content')
                ->get();

            if (is_null($list))
            {
                continue;
            }

            $list = json_decode(json_encode($list), true);
            foreach ($list as $i => $item)
            {
                $list[$i]['type'] = $modal;
            }

            if (!is_null($list))
            {
                $result = array_merge($result, $list);
            }
        }

        return $result;
    }

    // TODO：需要更新 with modal_id, parent_id
    public function passComment(Request $request)
    {
        $id = $request->get('id');
        $type = $request->get('type');

        DB::table($type . '_comments')->where('id', $id)
            ->update([
                'state' => 1,
                'updated_at' => Carbon::now(),
                'deleted_at' => null
            ]);

        return response()->json(['data' => 'success'], 200);
    }

    // TODO：需要更新 with modal_id, parent_id
    public function deleteComment(Request $request)
    {
        $id = $request->get('id');
        $type = $request->get('type');
        $userId = Auth::id();
        $now = Carbon::now();

        DB::table($type . '_comments')->where('id', $id)
            ->update([
                'state' => '5' . (String)$userId,
                'updated_at' => $now,
                'deleted_at' => $now
            ]);

        return response()->json(['data' => 'success'], 200);
    }
}

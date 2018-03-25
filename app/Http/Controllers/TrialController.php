<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostImages;
use App\Models\User;
use App\Http\Services\Trial\WordsFilter;
use Illuminate\Http\Request;
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
        return User::withTrashed()
            ->where('state', '<>', 0)
            ->orderBy('updated_at', 'DESC')
            ->get();
    }

    public function posts()
    {
        $list = Post::whereIn('state', [4, 4])->get();
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
            $list[$i]['user'] = User::where('id', $row['user_id'])->first();
        }

        return $list;
    }

    public function delUserSomething(Request $request)
    {
        User::where('id', $request->get('id'))
            ->update([
                $request->get('key') => $request->get('value') ?: ''
            ]);
    }

    public function passUser(Request $request)
    {
        User::where('id', $request->get('id'))->update([
            'state' => 0
        ]);
    }

    public function deleteUser(Request $request)
    {
        User::where('id', $request->get('id'))->delete();
    }

    public function recoverUser(Request $request)
    {
        User::withTrashed()->where('id', $request->get('id'))->restore();
    }

    public function deletePost(Request $request)
    {
        $id = $request->get('id');
        $post = Post::where('id', $id)->first();

        Redis::DEL('post_'.$id);
        Redis::ZREM('post_how_ids', $id);
        Redis::ZREM('post_new_ids', $id);
        Redis::ZREM('bangumi_'.$post->bangumi_id.'_posts_new_ids', $id);

        $post->delete();
    }

    public function passPost(Request $request)
    {
        Post::where('id', $request->get('id'))
            ->update([
                'state' => 7
            ]);
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
}

<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostImages;
use App\Models\User;
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

    public function addWords(Request $request)
    {
        Redis::LPUSH('blackwords', $request->get('words'));
    }

    public function users()
    {
        return User::where('state', '<>', 0)->get();
    }

    public function posts()
    {
        $list = Post::whereIn('state', [4, 4])->get();
        foreach ($list as $i =>$row)
        {
            $list[$i]['images'] = PostImages::where('post_id', $row['id'])->get();
        }

        return $list;
    }
}

<?php

namespace App\Http\Controllers;

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
}

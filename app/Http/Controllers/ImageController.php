<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    public function uptoken()
    {
        $auth = new \App\Http\Services\Qiniu\Auth();

        return $auth->uploadToken();
    }
    
    public function loopShow()
    {
        return Banner::withTrashed()->get();
    }

    public function loopToggle(Request $request)
    {
        $request->get('isDelete')
            ? DB::table('banners')
            ->where('id', $request->get('id'))
            ->update(['deleted_at' => Carbon::now()])
            : Banner::withTrashed()->find($request->get('id'))->restore();
    }

    public function loopCreate(Request $request)
    {
        return Banner::insertGetId([
            'url' => $request->get('url'),
            'bangumi_id' => $request->get('bangumi_id') ?: 0,
            'user_id' => $request->get('user_id') ?: 0
        ]);
    }
}

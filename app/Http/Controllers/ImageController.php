<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

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
            ? Banner::find($request->get('id'))->softDeletes()
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

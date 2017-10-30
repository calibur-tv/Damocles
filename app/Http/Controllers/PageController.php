<?php

namespace App\Http\Controllers;

use App\Menu;
use App\Models\Bangumi;
use App\Models\Tag;
use App\Models\Video;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function __construct()
    {
        \View::share('menu', Menu::all());
    }

    public function index()
    {
        return Auth::check() ? view('index') : view('login');
    }

    public function bangumi()
    {
        $auth = new \App\Http\Services\Qiniu\Auth();

        $list = Bangumi::withTrashed()->get();

        foreach ($list as $row)
        {
            $row['alias'] = $row['alias'] === 'null' ? '' : json_decode($row['alias'])->search;
            $row['tags'] = $row->tags()->get();
            $row['season'] = $row['season'] === 'null' ? '' : json_decode($row['season']);
        }

        return view('pages.bangumi', [
            'list' => $list,
            'tags' => Tag::where('model', 0)->select('id', 'name')->get(),
            'uptoken' => $auth->uploadToken()
        ]);
    }

    public function video()
    {
        $list = Video::withTrashed()
            ->join('bangumis', 'videos.bangumi_id', '=', 'bangumis.id')
            ->select('videos.*', 'bangumis.name AS bname')
            ->get();

        foreach ($list as $row)
        {
            $row['resource'] = $row['resource'] === 'null' ? '' : json_decode($row['resource']);
        }

        return view('pages.video', [
            'list' => $list,
            'bangumis' => Bangumi::withTrashed()->select('id', 'name', 'deleted_at')->get()
        ]);
    }

    public function banner()
    {
        return view('pages.banner');
    }

    public function tools()
    {
        return view('pages.tools');
    }

    public function register(Request $request)
    {
        if (Auth::user()->id !== 1) {
            return response('', 401);
        }
        \DB::table('admins')->insert([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => bcrypt($request->get('password'))
        ]);
    }

    public function tag()
    {
        return view('pages.tag', [
            'list' => Tag::all()
        ]);
    }
}

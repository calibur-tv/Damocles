<?php

namespace App\Http\Controllers;

use App\Menu;
use App\Models\Bangumi;
use App\Models\Post;
use App\Models\PostImages;
use App\Models\Tag;
use App\Models\User;
use App\Models\Video;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return Auth::check() ? view('index') : view('login');
    }

    public function indexData()
    {
        $totalUser = User::count();
        $totalPost = Post::where('parent_id', 0)->count();
        $totalImage = PostImages::count();
        $totalBangumi = Bangumi::count();
        $totalTag = Tag::count();

        return response()->json(['data' => [
            'total_user' => $totalUser,
            'total_post' => $totalPost,
            'total_image' => $totalImage,
            'total_bangumi' => $totalBangumi,
            'total_tag' => $totalTag
        ]], 200);
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

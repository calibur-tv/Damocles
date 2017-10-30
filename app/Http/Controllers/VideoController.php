<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Models\Bangumi;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function create(Request $request)
    {
        $arr = [];
        foreach($request->get('arr') as $video)
        {
            array_push($arr, [
                'bangumi_id' => $video['bangumi_id'],
                'url' => $video['url'] ? $video['url'] : '',
                'poster' => $video['poster'],
                'part' => $video['part'],
                'name' => $video['name'],
                'resource' => json_encode($video['resource'])
            ]);
        }
        Video::insert($arr);
    }

    public function edit(Request $request)
    {
        Video::where('id', $request->get('id'))
            ->update([
                'name' => $request->get('name'),
                'bangumi_id' => $request->get('bangumi_id'),
                'part' => $request->get('part'),
                'poster' => $request->get('poster'),
                'url' => $request->get('url') ? $request->get('url') : '',
                'resource' => json_encode($request->get('resource'))
            ]);
    }

    public function delete(Request $request)
    {
        $video = Video::withTrashed()->find($request->get('id'));

        $request->get('isDeleted') ? $video->restore() : $video->delete();
    }

    public function list()
    {
        $videos = Video::withTrashed()
            ->join('bangumis', 'videos.bangumi_id', '=', 'bangumis.id')
            ->select('videos.*', 'bangumis.name AS bname')
            ->get();

        foreach ($videos as $row)
        {
            $row['resource'] = $row['resource'] === 'null' ? '' : json_decode($row['resource']);
        }

        return [
            'videos' => $videos,
            'bangumis' => Bangumi::withTrashed()->select('id', 'name', 'deleted_at')->get()
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Models\Bangumi;
use Illuminate\Http\Request;

class VideoController extends Controller
{
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

    public function upload(Request $request)
    {
        $bangumiId = $request->get('bangumiId');
        $part = $request->get('part');
        $url = $request->get('url') || '';
        $id = Video::whereRaw('bangumi_id = ? and part = ?', [$bangumiId, $part])->select('id')->first();
        if (is_null($id)) {
            Video::create([
                'bangumi_id' => $bangumiId,
                'part' => $part,
                'name' => $request->get('name'),
                'url' => $url,
                'resource' => json_encode($request->get('resource')),
                'poster' => $request->get('poster'),
                'deleted_at' => $request->get('deleted_at')
            ]);
        } else {
            Video::where('id', $id)->update([
                'name' => $request->get('name'),
                'url' => $url,
                'resource' => json_encode($request->get('resource')),
                'poster' => $request->get('poster')
            ]);
        }
    }

    public function saveVideos(Request $request)
    {
        $data = $request->all();
        foreach ($data as $video) {
            $id = Video::whereRaw('bangumi_id = ? and part = ?', [$video['bangumiId'], $video['part']])->pluck('id')->first();
            if (is_null($id)) {
                Video::create([
                    'bangumi_id' => $video['bangumiId'],
                    'part' => $video['part'],
                    'name' => $video['name'],
                    'url' => $video['url'] ? $video['url'] : '',
                    'resource' => $video['resource'] ? json_encode($video['resource']) : '',
                    'poster' => $video['poster']
                ]);
            } else {
                Video::where('id', $id)->update([
                    'bangumi_id' => $video['bangumiId'],
                    'part' => $video['part'],
                    'name' => $video['name'],
                    'url' => $video['url'] ? $video['url'] : '',
                    'resource' => $video['resource'] ? json_encode($video['resource']) : '',
                    'poster' => $video['poster']
                ]);
            }
        }
    }
}

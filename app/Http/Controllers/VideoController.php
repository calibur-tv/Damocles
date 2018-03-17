<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Models\Bangumi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class VideoController extends Controller
{
    public function edit(Request $request)
    {
        Video::withTrashed()->where('id', $request->get('id'))
            ->update([
                'name' => $request->get('name'),
                'bangumi_id' => $request->get('bangumi_id'),
                'part' => $request->get('part'),
                'poster' => $request->get('poster'),
                'url' => $request->get('url') ? $request->get('url') : '',
                'resource' => json_encode($request->get('resource'))
            ]);

        Redis::DEL('video_' . $request->get('id'));
        Redis::DEL('bangumi_' . $request->get('bangumi_id') . '_videos');
    }

    public function delete(Request $request)
    {
        $video = Video::withTrashed()->find($request->get('id'));

        $request->get('isDeleted') ? $video->restore() : $video->delete();
    }

    public function list(Request $request)
    {
        $page = $request->get('page') ?: 0;
        $ids = Video::withTrashed()
            ->groupBy('bangumi_id')
            ->skip($page * 10)
            ->take(10)
            ->pluck('bangumi_id');

        $videos = Video::withTrashed()
            ->join('bangumis', 'videos.bangumi_id', '=', 'bangumis.id')
            ->select('videos.*', 'bangumis.name AS bname')
            ->whereIn('bangumi_id', $ids)
            ->get();

        foreach ($videos as $row)
        {
            $row['resource'] = $row['resource'] === 'null' ? '' : json_decode($row['resource']);
        }

        if ($page) {
            return $videos;
        }

        return [
            'videos' => $videos,
            'bangumis' => Bangumi::withTrashed()->select('id', 'name', 'deleted_at')->get(),
            'total' => Video::withTrashed()->groupBy('bangumi_id')->count()
        ];
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

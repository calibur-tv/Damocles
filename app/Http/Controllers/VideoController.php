<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Models\Bangumi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class VideoController extends Controller
{
    public function edit(Request $request)
    {
        $videoId = $request->get('id');
        Video::withTrashed()->where('id', $videoId)
            ->update([
                'name' => $request->get('name'),
                'bangumi_id' => $request->get('bangumi_id'),
                'part' => $request->get('part'),
                'poster' => $request->get('poster'),
                'url' => $request->get('url') ? $request->get('url') : '',
                'resource' => json_encode($request->get('resource'))
            ]);

        Redis::DEL('video_' . $videoId);
        Redis::DEL('bangumi_' . $request->get('bangumi_id') . '_videos');

        $job = (new \App\Jobs\Push\Baidu('video/' . $videoId, 'update'));
        dispatch($job);
    }

    public function delete(Request $request)
    {
        $videoId = $request->get('id');
        $video = Video::withTrashed()->find($videoId);

        if ($request->get('isDeleted'))
        {
            $video->restore();
            $job = (new \App\Jobs\Push\Baidu('video/' . $videoId));
            dispatch($job);
        }
        else
        {
            $video->delete();
            $job = (new \App\Jobs\Push\Baidu('video/' . $videoId, 'del'));
            dispatch($job);
        }
    }

    public function list(Request $request)
    {
        $ids = Video::withTrashed()
            ->groupBy('bangumi_id')
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

        return [
            'videos' => $videos,
            'bangumis' => Bangumi::withTrashed()->select('id', 'name', 'deleted_at')->get(),
            'total' => (int)DB::table('videos')
                ->select(DB::raw('count(distinct(`bangumi_id`)) AS count'))
                ->pluck('count')
                ->first()
        ];
    }

    public function pageList(Request $request)
    {
        $seenIds = $request->get('seenIds');
        $take = $request->get('take');

        $temp = Video::withTrashed()
            ->groupBy('bangumi_id')
            ->pluck('bangumi_id')
            ->toArray();

        $ids = array_slice(array_diff($temp, $seenIds), 0, $take);

        $videos = Video::withTrashed()
            ->join('bangumis', 'videos.bangumi_id', '=', 'bangumis.id')
            ->select('videos.*', 'bangumis.name AS bname')
            ->whereIn('bangumi_id', $ids)
            ->get();

        foreach ($videos as $row)
        {
            $row['resource'] = $row['resource'] === 'null' ? '' : json_decode($row['resource']);
        }

        return $videos;
    }

    public function saveVideos(Request $request)
    {
        $data = $request->all();
        foreach ($data as $video) {
            $id = Video::whereRaw('bangumi_id = ? and part = ?', [$video['bangumiId'], $video['part']])->pluck('id')->first();
            if (is_null($id)) {
                $newId = Video::insertGetId([
                    'bangumi_id' => $video['bangumiId'],
                    'part' => $video['part'],
                    'name' => $video['name'],
                    'url' => $video['url'] ? $video['url'] : '',
                    'resource' => $video['resource'] ? json_encode($video['resource']) : '',
                    'poster' => $video['poster']
                ]);
                $job = (new \App\Jobs\Push\Baidu('video/' . $newId));
                dispatch($job);
            } else {
                Video::where('id', $id)->update([
                    'bangumi_id' => $video['bangumiId'],
                    'part' => $video['part'],
                    'name' => $video['name'],
                    'url' => $video['url'] ? $video['url'] : '',
                    'resource' => $video['resource'] ? json_encode($video['resource']) : '',
                    'poster' => $video['poster']
                ]);
                Redis::DEL('video_' . $id);
                $job = (new \App\Jobs\Push\Baidu('video/' . $id, 'update'));
                dispatch($job);
            }
            Redis::DEL('bangumi_'.$video['bangumiId'].'_videos');
        }
    }

    public function search(Request $request)
    {
        $videos = Video::withTrashed()
            ->join('bangumis', 'videos.bangumi_id', '=', 'bangumis.id')
            ->select('videos.*', 'bangumis.name AS bname')
            ->where('bangumi_id', $request->get('id'))
            ->get();

        foreach ($videos as $row)
        {
            $row['resource'] = $row['resource'] === 'null' ? '' : json_decode($row['resource']);
        }

        return $videos;
    }
}

<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\DB;

/**
 * Created by PhpStorm.
 * User: yuistack
 * Date: 2018/6/25
 * Time: 上午7:19
 */
class SearchService
{
    protected $table = 'search_v2';

    public function create($id, $content, $modal, $time = null)
    {
        $modalId = $this->computeModalIdByStr($modal);
        if (!$modalId)
        {
            return 0;
        }

        return DB::table($this->table)
            ->insertGetId([
                'modal_id' => $modalId,
                'type_id' => $id,
                'content' => $content,
                'created_at' => $time ?: time()
            ]);
    }

    public function delete($id, $modal)
    {
        $modalId = $this->computeModalIdByStr($modal);
        if (!$modalId)
        {
            return 0;
        }

        return DB::table($this->table)
            ->whereRaw('type_id = ? and modal_id = ?', [$id, $modalId])
            ->delete();
    }

    public function update($id, $content, $modal)
    {
        $modalId = $this->computeModalIdByStr($modal);
        if (!$modalId)
        {
            return 0;
        }

        return DB::table($this->table)
            ->whereRaw('type_id = ? and modal_id = ?', [$id, $modalId])
            ->update([
                'content' => $content
            ]);
    }

    public function weight($id, $modal, $score = 1)
    {
        $modalId = $this->computeModalIdByStr($modal);
        if (!$modalId)
        {
            return 0;
        }

        return DB::table($this->table)
            ->whereRaw('type_id = ? and modal_id = ?', [$id, $modalId])
            ->increment('score', $score);
    }

    protected function computeModalIdByStr($modal)
    {
        if ($modal === 'user')
        {
            return 1;
        }
        else if ($modal === 'bangumi')
        {
            return 2;
        }
        else if ($modal === 'video')
        {
            return 3;
        }
        else if ($modal === 'post')
        {
            return 4;
        }
        else if ($modal === 'role')
        {
            return 5;
        }

        return 0;
    }
}
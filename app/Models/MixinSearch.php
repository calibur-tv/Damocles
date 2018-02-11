<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MixinSearch extends Model
{
    public $timestamps = false;

    protected $table = 'mixin_search';

    protected $fillable = [
        'title',
        'type_id',
        'modal_id',
        'score',
        'url',
        'content',
        'created_at',
        'updated_at'
    ];

    protected $dateFormat = 'U';

    protected $dates = ['created_at', 'updated_at'];

    /**
     * type
     * 1: 用户
     * 2：番剧
     * 3：帖子
     */
}

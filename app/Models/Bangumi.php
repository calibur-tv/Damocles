<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bangumi extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'summary',
        'avatar',
        'banner',
        'alias',
        'season',
        'released_at',
        'released_video_id',
        'published_at',
        'count_like',
        'count_score',
        'collection_id',
        'others_site_video',
        'end'
    ];

    protected $casts = [
        'released_at' => 'integer',
        'released_video_id' => 'integer',
        'published_at' => 'integer',
        'collection_id' => 'integer',
        'others_site_video' => 'boolean',
        'end' => 'boolean'
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}

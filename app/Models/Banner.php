<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Banner extends Model
{
    use SoftDeletes;

    protected $fillable = ['url', 'user_id', 'bangumi_id'];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function bangumi()
    {
        return $this->hasOne(Bangumi::class, 'id', 'bangumi_id');
    }

    public function getUrlAttribute($url)
    {
        return 'https://cdn.riuir.com/' . $url;
    }
}

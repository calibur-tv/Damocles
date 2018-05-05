<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'state',
        'avatar',
        'banner',
        'nickname',
        'signature',
        'zone',
        'phone',
        'faker',
        'password'
    ];

    public function getAvatarAttribute($avatar)
    {
        return config('website.image').($avatar ? $avatar : 'default/user-avatar');
    }

    public function getBannerAttribute($banner)
    {
        return config('website.image').($banner ? $banner : 'default/user-banner');
    }
}

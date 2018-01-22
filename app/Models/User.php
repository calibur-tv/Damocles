<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = [
        'state',
        'avatar',
        'banner',
        'nickname',
        'signature',
        'state'
    ];
}

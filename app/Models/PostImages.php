<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostImages extends Model
{
    protected $table = 'post_images';

    protected $fillable = [
        'post_id',
        'src',
        'type',
        'size',
        'width',
        'height'
    ];
}

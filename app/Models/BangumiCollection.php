<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BangumiCollection extends Model
{
    protected $table = 'bangumiCollection';

    protected $fillable = ['title', 'id', 'name'];
}

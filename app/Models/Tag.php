<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function bangumis()
    {
        return $this->belongsToMany(Bangumi::class);
    }
}

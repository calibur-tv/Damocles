<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CartoonRoleFans extends Model
{
    protected $table = 'cartoon_role_fans';

    protected $fillable = [
        'user_id',
        'role_id',
        'star_count'
    ];
}

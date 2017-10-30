<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'admin_menus';

    protected $fillable = [
        'name', 'link', 'icon', 'level'
    ];
}

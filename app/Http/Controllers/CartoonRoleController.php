<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\CartoonRole;
use Illuminate\Http\Request;

class CartoonRoleController extends Controller
{
    public function create(Request $request)
    {
        return CartoonRole::insertGetId([
            'bangumi_id' => $request->get('bangumi_id'),
            'avatar' => $request->get('avatar'),
            'name' => $request->get('name'),
            'intro' => $request->get('intro'),
            'alias' => $request->get('alias')
        ]);
    }

    public function list()
    {
        return [
            'role' => CartoonRole::all(),
            'bangumi' => Bangumi::all()
        ];
    }

    public function edit(Request $request)
    {
        CartoonRole::where('id', $request->get('id'))->update([
            'bangumi_id' => $request->get('bangumi_id'),
            'avatar' => $request->get('avatar'),
            'name' => $request->get('name'),
            'intro' => $request->get('intro'),
            'alias' => $request->get('alias')
        ]);
    }
}

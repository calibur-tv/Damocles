<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\CartoonRole;
use Illuminate\Http\Request;

class CartoonRoleController extends Controller
{
    public function show(Request $request)
    {
        return CartoonRole::find($request->get('id'));
    }

    public function create(Request $request)
    {
        $id =  CartoonRole::insertGetId([
            'bangumi_id' => $request->get('bangumi_id'),
            'avatar' => $request->get('avatar'),
            'name' => $request->get('name'),
            'intro' => $request->get('intro'),
            'alias' => $request->get('alias')
        ]);

        $now = time();

        MixinSearch::create([
            'title' => $request->get('name'),
            'content' => $request->get('alias'),
            'type_id' => 4,
            'modal_id' => $id,
            'url' => '/bangumi/' . $request->get('bangumi_id') . '/role/' . $id,
            'created_at' => $now,
            'updated_at' => $now
        ]);

        return $id;
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

        $searchId = MixinSearch::whereRaw('type_id = ? and modal_id = ?', [4, $request->get('id')])
            ->pluck('id')
            ->first();

        if (!is_null($searchId))
        {
            MixinSearch::where('id', $searchId)->update([
                'title' => $request->get('name'),
                'content' => $request->get('alias')
            ]);
        }
    }
}

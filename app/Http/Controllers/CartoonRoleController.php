<?php

namespace App\Http\Controllers;

use App\Models\Bangumi;
use App\Models\CartoonRole;
use App\Models\MixinSearch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class CartoonRoleController extends Controller
{
    public function show(Request $request)
    {
        return CartoonRole::find($request->get('id'));
    }

    public function create(Request $request)
    {
        $bangumiId = $request->get('bangumi_id');
        $id =  CartoonRole::insertGetId([
            'bangumi_id' => $bangumiId,
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
            'url' => '/bangumi/' . $bangumiId . '/role/' . $id,
            'created_at' => $now,
            'updated_at' => $now
        ]);

        Redis::DEL('cartoon_role_trending_ids');
        Redis::DEL('bangumi_'.$bangumiId.'_cartoon_role_ids');

        return $id;
    }

    public function list(Request $request)
    {
        $take = $request->get('take');
        $seenIds = $request->get('seenIds') ?: [];

        $role = CartoonRole::whereNotIn('id', $seenIds)
            ->orderBy('id', 'DESC')
            ->take($take)
            ->get();

        if (!empty($seenIds))
        {
            return $role;
        }

        $total = CartoonRole::count();

        return [
            'role' => $role,
            'bangumi' => Bangumi::all(),
            'total' => $total
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

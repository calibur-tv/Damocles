<?php

namespace App\Http\Controllers;

use App\Models\BangumiCollection;
use Illuminate\Http\Request;

class BangumiCollectionController extends Controller
{
    public function list()
    {
        return BangumiCollection::all();
    }

    public function create(Request $request)
    {
        return BangumiCollection::insertGetId([
            'name' => $request->get('name'),
            'title' => $request->get('title')
        ]);
    }

    public function edit(Request $request)
    {
        BangumiCollection::where('id', $request->get('id'))
            ->update([
                'name' => $request->get('name'),
                'title' => $request->get('title')
            ]);
    }
}

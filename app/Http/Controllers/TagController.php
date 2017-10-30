<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function create(Request $request)
    {
        return Tag::insertGetId([
            'name' => $request->get('name'),
            'model' => $request->get('model')
        ]);
    }

    public function edit(Request $request)
    {
        Tag::where('id', $request->get('id'))
            ->update([
                'name' => $request->get('name'),
                'model' => $request->get('model')
            ]);
    }

    public function list()
    {
        return Tag::all();
    }
}

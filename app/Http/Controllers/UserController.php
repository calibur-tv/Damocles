<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function list(Request $request)
    {
        $take = $request->get('take');
        $seenIds = $request->get('seenIds') ?: [];

        $users = User::withTrashed()
            ->whereNotIn('id', $seenIds)
            ->orderBy('id', 'DESC')
            ->take($take)
            ->get();

        return [
            'list' => $users,
            'total' => User::withTrashed()->count()
        ];
    }

    public function block(Request $request)
    {
        User::where('id', $request->get('id'))->delete();
    }

    public function recover(Request $request)
    {
        User::withTrashed()->where('id', $request->get('id'))->restore();
    }

    public function feedback()
    {
        return Feedback::where('stage', 0)->get();
    }

    public function readFeedback(Request $request)
    {
        Feedback::where('id', $request->get('id'))->update([
            'stage' => 1
        ]);
    }
}

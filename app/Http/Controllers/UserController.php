<?php

namespace App\Http\Controllers;

use App\Http\Services\SearchService;
use App\Models\Feedback;
use App\Models\User;
use App\Models\UserZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Overtrue\LaravelPinyin\Facades\Pinyin as Overtrue;

class UserController extends Controller
{
    public function list(Request $request)
    {
        $take = $request->get('take');
        $seenIds = $request->get('seenIds') ?: [];

        $users = User::withTrashed()
            ->whereNotIn('id', $seenIds)
            ->where('faker', 0)
            ->orderBy('id', 'DESC')
            ->take($take)
            ->get();

        return [
            'list' => $users,
            'total' => User::withTrashed()->where('faker', 0)->count()
        ];
    }

    public function fakerList(Request $request)
    {
        $take = $request->get('take');
        $seenIds = $request->get('seenIds') ?: [];

        $users = User::withTrashed()
            ->whereNotIn('id', $seenIds)
            ->where('faker', 1)
            ->orderBy('id', 'DESC')
            ->take($take)
            ->get();

        return [
            'list' => $users,
            'total' => User::withTrashed()->where('faker', 1)->count()
        ];
    }

    public function createFaker(Request $request)
    {
        $nickname = $request->get('nickname');
        $phone = $request->get('phone');
        $password = '$2y$10$zMAtJKR6iQyKyCJVItFBI.lJiVw/EN.nkvMawnFjMz2TOaW5gDSry';
        $zone = $this->createUserZone($nickname);
        $searchService = new SearchService();

        $user = User::create([
            'nickname' => $nickname,
            'phone' => $phone,
            'password' => $password,
            'zone' => $zone,
            'faker' => 1
        ]);

        $searchService->create(
            $user->id,
            $user->nickname . ',' . $zone,
            'user'
        );

        return response()->json(['data' => $user], 200);
    }

    public function rebornFakerUser(Request $request)
    {
        $phone = $request->get('phone');

        $count = User::where('phone', $phone)->count();
        if ($count)
        {
            return response()->json(['data' => '手机号已被占用'], 403);
        }

        $userId = $request->get('id');
        User::where('id', $userId)
            ->update([
                'phone' => $phone,
                'faker' => 0
            ]);

        Redis::DEL('user_' . $userId);

        return response()->json(['data' => ''], 200);
    }

    public function block(Request $request)
    {
        $userId = $request->get('id');
        User::where('id', $userId)->delete();
        $searchService = new SearchService();
        $searchService->delete($userId, 'user');
    }

    public function recover(Request $request)
    {
        $userId = $request->get('id');
        User::withTrashed()->where('id', $userId)->restore();

        $user = User::withTrashed()->where('id', $userId)->first();
        $searchService = new SearchService();
        $searchService->create(
            $userId,
            $user->nickname . ',' . $user->zone,
            'user'
        );
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

    private function createUserZone($name)
    {
        $pinyin = strtolower(Overtrue::permalink($name));

        $tail = UserZone::where('name', $pinyin)->pluck('count')->first();

        if ($tail)
        {
            UserZone::where('name', $pinyin)->increment('count');
            return $pinyin . '-' . implode('-', str_split(($tail), 2));
        }
        else
        {
            UserZone::create(['name' => $pinyin]);

            return $pinyin;
        }
    }
}

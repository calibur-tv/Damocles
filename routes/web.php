<?php

Route::get('/', 'PageController@index');

Route::group(['prefix' => 'auth'], function ()
{
    Route::get('login', 'LoginController@showLoginForm')->name('login');

    Route::post('login', 'LoginController@login');

    Route::post('logout', 'LoginController@logout');

    Route::post('register', 'PageController@register');
});

Route::group(['middleware' => ['auth']], function ()
{
    Route::group(['prefix' => 'bangumi'], function ()
    {
        Route::get('/', 'PageController@bangumi')->name('bangumi');

        Route::get('/list', 'BangumiController@list');

        Route::get('/tags', 'TagController@list');

        Route::get('/collections', 'BangumiController@collections');

        Route::get('/item', 'BangumiController@item');

        Route::get('/videos', 'VideoController@list');

        Route::post('/create', 'BangumiController@create');

        Route::post('/release', 'BangumiController@release');

        Route::post('/edit', 'BangumiController@edit');

        Route::post('/delete', 'BangumiController@delete');
    });

    Route::group(['prefix' => 'video'], function ()
    {
        Route::get('/', 'PageController@video')->name('video');

        Route::post('/edit', 'VideoController@edit');

        Route::post('/delete', 'VideoController@delete');

        Route::post('/upload', 'VideoController@upload');

        Route::post('/save', 'VideoController@saveVideos');
    });

    Route::group(['prefix' => 'banner'], function ()
    {
        Route::get('/', 'PageController@banner')->name('banner');
    });

    Route::group(['prefix' => 'tag'], function ()
    {
        Route::get('/', 'PageController@tag')->name('tag');

        Route::post('/create', 'TagController@create');

        Route::post('/edit', 'TagController@edit');
    });

    Route::group(['prefix' => 'image'], function ()
    {
        Route::get('/uptoken', 'ImageController@uptoken');

        Route::group(['prefix' => 'loop'], function ()
        {
            Route::get('/list', 'ImageController@loopShow');

            Route::post('/create', 'ImageController@loopCreate');

            Route::post('/edit', 'ImageController@loopEdit');

            Route::post('/toggle', 'ImageController@loopToggle');
        });
    });

    Route::group(['prefix' => 'trial'], function ()
    {
        Route::group(['prefix' => 'blackwords'], function ()
        {
            Route::get('/list', 'TrialController@blackwords');

            Route::post('/delete', 'TrialController@deleteWords');

            Route::post('/add', 'TrialController@addWords');
        });

        Route::group(['prefix' => 'users'], function ()
        {
            Route::get('/list', 'TrialController@users');

            Route::post('/delSomething', 'TrialController@delUserSomething');

            Route::post('/delete', 'TrialController@deleteUser');

            Route::post('/recover', 'TrialController@recoverUser');
        });

        Route::group(['prefix' => 'posts'], function ()
        {
            Route::get('/list', 'TrialController@posts');

            Route::post('/delete', 'TrialController@deletePost');

            Route::post('/deleteImage', 'TrialController@deletePostImage');
        });
    });
});

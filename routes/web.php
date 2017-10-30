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

        Route::get('/videos', 'VideoController@list');

        Route::post('/create', 'BangumiController@create');

        Route::post('/edit', 'BangumiController@edit');

        Route::post('/delete', 'BangumiController@delete');

        Route::group(['prefix' => 'collection'], function ()
        {
            Route::get('/list', 'BangumiCollectionController@list');

            Route::post('/create', 'BangumiCollectionController@create');

            Route::post('/edit', 'BangumiCollectionController@edit');
        });
    });

    Route::group(['prefix' => 'video'], function ()
    {
        Route::get('/', 'PageController@video')->name('video');

        Route::post('/create', 'VideoController@create');

        Route::post('/edit', 'VideoController@edit');

        Route::post('/delete', 'VideoController@delete');
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
});

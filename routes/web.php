<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::namespace('Web')->name('web.')->group(function () {

    //Route::get('/sitemap.xml', 'Sitemap@index');
    //Route::get('/robots.txt', 'Sitemap@robots');
    Route::get('/', 'Home@index');
});

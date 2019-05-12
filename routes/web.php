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

// Route::get('/', function () {
//     Route::get('/{first_path?}/{second_path?}/{third_path?}/{fourth_path?}', 'Home@index');
// });

Route::namespace('Web')->name('web.')->group(function () {
    // Route::get('/{first_path?}/{second_path?}/{third_path?}/{fourth_path?}', 'Home@index');
    Route::get('/', 'Home@index');
});

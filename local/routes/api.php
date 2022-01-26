<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/getSliders', 'Front\ApiController@getSliders');
Route::get('/getBanners', 'Front\ApiController@getBanners');
Route::get('/getBrands', 'Front\ApiController@getBrands');
Route::get('/getCategory', 'Front\ApiController@getCategory');
Route::get('/getImageCategory', 'Front\ApiController@getCategoryImage');
Route::get('/getCategoryProduct', 'Front\ApiController@getCategoryProduct');
Route::get('/getPostsIndex', 'Front\ApiController@getPostsIndex');
Route::get('/getDayBasketProduct', 'Front\ApiController@getDayBasketProduct');
Route::get('/getDiscountProduct', 'Front\ApiController@getDiscountProduct');
Route::get('/getViewProducts/{id}', 'Front\ApiController@getViewProducts');

Route::get('/getGalleryProducts/{id}', 'Front\ApiController@getGalleryProducts');
Route::get('/getNewProducts/{id}', 'Front\ApiController@getNewProducts');
Route::get('/getLikeProducts/{id}', 'Front\ApiController@getLikeProducts');

Route::post('/registerMobile', 'Front\ApiController@registerMobile');
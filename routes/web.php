<?php

use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserManagement;
use App\Http\Controllers\UserManagementController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::middleware('guest')->group(function () {
});

Route::middleware('auth')->group(function () {
    Route::resource('/post', PostController::class);
    Route::resource('/comment', CommentController::class);
    Route::resource('/profile', UserManagementController::class);

    Route::get('comments/{postId}', [CommentController::class, 'create'])->name('reply.comment');
});


Route::get('/', function () {
    return view('pages.home');
})->name('home');

Route::get("/edit-profile", function () {
    return view("pages.editprofile");
});

Route::get('/forum', [PostController::class, 'index'])->name('forum');

Route::get('/forum/{postId}', function () {
    return view('pages.detailforum');
})->name('detail_forum');

require __DIR__ . '/auth.php';

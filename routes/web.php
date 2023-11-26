<?php

use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;

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


Route::get('/home', function () {
    return view('pages.home');
});


Route::get('/home', function () {
    return view('pages.home');
});


Route::get('/forum', function () {
    return view('pages.forum');
});

Route::get('/detailforum', function () {
    return view('pages.detailforum');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/post', PostController::class);
    Route::resource('/comment', CommentController::class);

    Route::get('comments/{postId}', [CommentController::class, 'create'])->name('reply.comment');
});

require __DIR__ . '/auth.php';

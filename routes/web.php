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


Route::middleware('guest')->group(function () {

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('/post', PostController::class);
    Route::resource('/comment', CommentController::class);

    Route::get('comments/{postId}', [CommentController::class, 'create'])->name('reply.comment');
});


Route::get('/', function () {
    return view('pages.home');
})->name('home');

Route::get('/forum', [PostController::class, 'index'])->name('forum');

Route::get('/forum/{postId}', function () {
    return view('pages.detailforum');
})->name('detail_forum');

require __DIR__ . '/auth.php';

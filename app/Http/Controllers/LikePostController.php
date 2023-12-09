<?php

namespace App\Http\Controllers;

use App\Models\LikePost;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikePostController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $post = Post::findOrFail($request->post_id);

        $data = LikePost::create([
            'user_id' => auth()->user()->id,
            'post_id' => $post->id,
        ]);

        $totalLike = $post->likes()->count();

        $data->totalLikes = $totalLike;

        return response()->json([
            'status' => 'OK',
            'message' => 'Like Post has been created successfully',
            'data' => $data
        ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LikePost $likePost)
    {


        $post = Post::findOrFail($likePost->post_id);
        $likePost->delete();
        $totalLike = $post->likes->count();



        return response()->json([
            'status' => 'OK',
            'message' => 'Like Post has been deleted successfully',
            'data' => [
                'totalLikes' => $totalLike
            ],
        ]);
    }
}

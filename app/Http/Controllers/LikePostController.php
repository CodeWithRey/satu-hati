<?php

namespace App\Http\Controllers;

use App\Models\LikePost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikePostController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userId = Auth::id();
        $postId = $request->route()->parameter('postId');

        LikePost::create([
            'user_id' => $userId,
            'post_id' => $postId,
        ]);

        return response()->json([
            'status' => 'OK',
            'message' => 'Like Post has been created successfully',
        ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LikePost $likePost)
    {
        $likePost->delete();
        return response()->json([
            'status' => 'OK',
            'message' => 'Like Post has been deleted successfully',
        ]);
    }
}

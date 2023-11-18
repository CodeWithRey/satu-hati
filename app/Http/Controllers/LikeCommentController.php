<?php

namespace App\Http\Controllers;

use App\Models\LikeComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeCommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userId = Auth::id();
        $commentId = $request->route()->parameter('commentId');

        LikeComment::create([
            'user_id' => $userId,
            'comment_id' => $commentId,
        ]);

        return response()->json([
            'status' => 'OK',
            'message' => 'Like Comment has been created successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LikeComment $likeComment)
    {
        $likeComment->delete();
        return response()->json([
            'status' => 'OK',
            'message' => 'Like Comment has been deleted successfully',
        ]);
    }
}

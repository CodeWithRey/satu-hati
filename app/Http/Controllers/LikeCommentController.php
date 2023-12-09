<?php

namespace App\Http\Controllers;

use App\Models\Comment;
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

        $comment = Comment::findorFail($request->comment_id);

        $data = LikeComment::create([
            'user_id' => auth()->user()->id,
            'comment_id' => $comment->id,
        ]);

        $totalLike = $comment->likes->count();
        $data->totalLikes = $totalLike;

        return response()->json([
            'status' => 'OK',
            'message' => 'Like Comment has been created successfully',
            'data' => $data
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LikeComment $likeComment)
    {
        $comment = Comment::findOrFail($likeComment->comment_id);
        $likeComment->delete();
        $totalLike = $comment->likes->count();


        return response()->json([
            'status' => 'OK',
            'message' => 'Like Comment has been deleted successfully',
            'data' =>
            [
                'totalLikes' => $totalLike
            ],
        ]);
    }
}

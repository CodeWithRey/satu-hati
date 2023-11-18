<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'body' => 'required',
        ]);

        $userId = Auth::id();
        $postId = $request->route()->parameter('postId');

        Comment::create([
            'body' => $validatedData['body'],
            'user_id' => $userId,
            'post_id' => $postId,
        ]);

        return redirect()->route('pages')->with('success', 'Comment has been created successfully !');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        $validatedData = $request->validate([
            'body' => 'required',
        ]);

        $userId = Auth::id();
        $postId = $request->route()->parameter('postId');


        $comment->fill([
            'body' => $validatedData['body'],
            'user_id' => $userId,
            'post_id' => $postId,
        ])->save();

        return redirect()->route('pages')->with('success', 'Comment has been updated successfully !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return redirect()->route('pages')->with('success','Comment has been deleted successfully');
    }
}

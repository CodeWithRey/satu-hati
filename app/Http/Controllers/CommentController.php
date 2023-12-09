<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;
use App\Traits\ImageHandling;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{

    use ImageHandling;
    /**
     * Show the form for creating a new resource.
     */
    public function create($postId)
    {
        $textPost = 'Apakah anda yakin untuk menghapus ?';
        confirmDelete('', $textPost);

        $post = Post::find($postId);

        $comments = Comment::with('user')
            ->with('commentImages')
            ->orderBy('created_at', 'desc')
            ->get();

        $userLikedComment = $comments->mapWithKeys(function ($comment) {
            return [
                $comment->id => [
                    'userLikedComment' => $comment->likes->where('user_id', auth()->check() ? auth()->user()->id : null)->isNotEmpty(),
                ],
            ];
        });

        return view('pages.detailforum', compact('post', 'comments', 'userLikedComment'));
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'body' => 'required',
            'post_id' => 'required',
            'user_id' => 'required',
            'images' => 'sometimes|image|max:2048',
            'parent_comment_id.*' => 'nullable|exists:comments,id'
        ]);


        if (isset($validatedData['parent_comment_id']) && $validatedData['parent_comment_id'][0] !== null) {
            foreach ($validatedData['parent_comment_id'] as $parentCommentId) {
                $parentComment = Comment::find($parentCommentId);
                if ($parentComment) {
                    $comment = $parentComment->replies()->create($request->all());
                } else {
                    abort(404, 'Parent comment not found');
                }
            }
        } else {
            $comment = Comment::create($request->except('parent_comment_id'));
        }



        if ($request->hasFile('images')) {
            $path = 'comments';
            $comment->commentImages()->create([
                'path' => $this->uploadImage($validatedData['images'], $path),
            ]);
        }

        return redirect()->back()->with('success', 'Comment has been created successfully !');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        $validatedData = $request->validate([
            'body' => 'required',
        ]);

        $comment->fill($validatedData)->save();

        return redirect()->route('pages')->with('success', 'Comment has been updated successfully !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        if (Auth::id() !== $comment->user_id) {
            return redirect()->back()->with('error', 'Kamu tidak bisa menghapus komen orang lain');
        }


        $comment->commentImages->each(function ($image) {
            $image->checkImages($image->path);
            $image->delete();
        });

        $comment->delete();
        return redirect()->back()->with('success', 'Comment has been deleted successfully');
    }
}

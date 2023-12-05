<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Traits\ImageHandling;
use Illuminate\Http\Request;

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

        return view('pages.detailforum', compact('post', 'comments'));
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
            //parent_id => nullable 
        ]);

        //ada kondisi untuk mengecek parent

        $comment = Comment::create($request->all());

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
        $comment->commentImages->each(function ($image) {
            $image->checkImages($image->path);
            $image->delete();
        });

        $comment->delete();
        return redirect()->back()->with('success', 'Comment has been deleted successfully');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create($postId)
    {

        $title = 'Hapus Diskusi !';
        $text = 'Apakah anda yakin untuk menghapus ?';

        confirmDelete($title, $text);

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
            //parent_id => nullable 
        ]);


        // dd($request->all());
        //ada kondisi untuk mengecek parent

        $comment = Comment::create($request->all());

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imagefile) {
                $path = 'comments';
                $comment->commentImages()->create([
                    'path' => $this->uploadImage($imagefile, $path),
                ]);
            }
        }

        return redirect()->route('post.index')->with('success', 'Comment has been created successfully !');
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
        $comment->delete();
        return redirect()->route('pages')->with('success', 'Comment has been deleted successfully');
    }
}

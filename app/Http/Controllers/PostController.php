<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Traits\ImageHandling;
use Illuminate\Http\Request;

class PostController extends Controller
{
    use ImageHandling;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts =
            Post::with('user')
            ->with('comments')
            ->with('postImages')
            ->orderBy('created_at', 'desc')
            ->get();


        return view('pages.forum', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'images.*' => 'sometimes|image|max:2048',
            'user_id' => 'required',
        ]);


        $post = Post::create($request->all());


        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imagefile) {
                $path = 'posts';
                $post->postImages()->create([
                    'path' => $this->uploadImage($imagefile, $path),
                ]);
            }
        }


        return redirect()->back()->with('success', 'Post has been created successfully !');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post->fill($validatedData)->save();

        return redirect()->route('pages')->with('success', 'Post has been updated successfully !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->postImages->each(function ($image) {
            $image->checkImages($image->path);
            $image->delete();
        });

        $post->delete();

        return redirect()->route('post.index')->with('success', 'Post has been deleted successfully');
    }
}

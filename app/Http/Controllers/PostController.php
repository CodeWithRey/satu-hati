<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::orderBy('created_at', 'desc');
        dd($posts);
        return view('pages', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $userId = Auth::id();


        Post::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'user_id' => $userId,
        ]);

        return redirect()->route('pages')->with('success', 'Post has been created successfully !');
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

        $userId = Auth::id();


        $post->fill([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'user_id' => $userId,
        ])->save();

        return redirect()->route('pages')->with('success', 'Post has been updated successfully !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('pages')->with('success','Post has been deleted successfully');
    }
}

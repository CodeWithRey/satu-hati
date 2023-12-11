<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Traits\ImageHandling;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    use ImageHandling;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $sort_by = $request->input('sort_by');
        $postsQuery =
            Post::with('user')
            ->with('comments')
            ->with('postImages')
            ->with('likes');


        if ($sort_by === 'popular') {
            $postsQuery->orderBy(function ($query) {
                $query->select(DB::raw('COUNT(DISTINCT like_posts.id) + COUNT(DISTINCT comments.id)'))
                    ->from('like_posts')
                    ->leftJoin('comments', 'like_posts.post_id', '=', 'comments.post_id')
                    ->whereColumn('like_posts.post_id', 'posts.id')
                    ->groupBy('like_posts.post_id');
            }, 'desc');
        } else {
            $postsQuery->orderByDesc('created_at');
        }


        $posts = $postsQuery->paginate(10)->withQueryString();

        $userLikedPost = $posts->mapWithKeys(function ($post) {
            return [
                $post->id => [
                    'userLikedPost' => $post->likes->where('user_id', auth()->check() ? auth()->user()->id : null)->isNotEmpty(),
                ],
            ];
        });

        return view('pages.forum', compact('posts', 'userLikedPost'));
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
        ], [
            'title.required' => 'Judul wajib diisi.',
            'description.required' => 'Deskripsi wajib diisi.',
            'images.*.max' => 'Ukuran gambar maximal 2 mb.',
            'images.*.image' => 'File harus berupa gambar (png, jpeg, svg dan sejenisnya).',
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


        return redirect()->back()->with('success', 'Diskusi berhasil dibuat !');
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

        if (Auth::id() !== $post->user_id) {
            return redirect()->back()->with('error', 'Kamu tidak bisa menghapus post orang lain');
        }


        $post->postImages->each(function ($image) {
            $image->checkImages($image->path);
            $image->delete();
        });

        $post->delete();

        return redirect()->route('post.index')->with('success', 'Diskusi berhasil dihapus !');
    }
}

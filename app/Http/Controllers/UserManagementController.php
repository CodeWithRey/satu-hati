<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Gender;
use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Traits\ImageHandling;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use RealRashid\SweetAlert\Facades\Alert;
use Dotenv\Exception\ValidationException;
use App\Http\Requests\ProfileUpdateRequest;

class UserManagementController extends Controller
{
    use ImageHandling;
    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($request->hasFile('profile_picture')) {
            $request->user()->profile_picture_path = $this->uploadImage($request->file('profile_picture'), 'profile');
        }

        $request->user()->save();

        return Redirect::route('profile.show', $request->user()->id)->with('success', 'Profile anda berhasil diperbaharui !');
    }

    public function show(string $postId)
    {
        $genders = Gender::all();
        $user = User::where('id', '=', $postId)->first();
        $top_post = $user->posts()->where('is_anonymous', '=', 0)->withCount('likes as likes_count')->orderByDesc('likes_count')->first();
        return view('pages.profile', compact(['user', 'genders', 'top_post']));
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}

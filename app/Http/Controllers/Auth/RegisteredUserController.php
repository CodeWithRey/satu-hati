<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\View\View;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use App\Models\Gender;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): View
    {
        // dd('create method');
        $genders = Gender::all();
        return view('pages.register', compact('genders'));
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'gender' => ['required']
        ], [
            'full_name.required' => ':Attribute wajib diisi.',
            'email.required' => ':Attribute wajib diisi.',
            'email.lowercase' => ':Attribute harus menggunakan huruf kecil.',
            'email.unique' => ':Attribute sudah digunakan.',
            'password.required' => ':Attribute wajib diisi.',
            'password.confirmed' => 'kata sandi tidak sesuai silahkan periksa kembali.',
            'gender.required' => ':Attribute wajib diisi.',
        ]);

        $user = User::create([
            'full_name' => $request->full_name,
            'birthday' => $request->birthday,
            'gender_id' => $request->gender,
            'profile_picture_path' => $request->profile_picture_path,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => 1,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->route('home')->with('toast_success', 'Berhasil untuk mendaftar akun.');
    }
}

@extends('layout.default')
@section('showFooter', 'hidden')
@section('showNavbar', 'hidden')
@section('title', 'Satu Hati | Buat Akun')


@section('content')
    <div class="bg-white min-h-screen min-w-screen grid lg:grid-cols-2 grid-cols-1">
        <div class="mr-8 items-center justify-center lg:flex hidden">
            <img src="{{ asset('assets/images/logo-sh.png') }}" alt="logo-satuhati" class="w-full object-cover rounded-full">
        </div>

        <div class="bg-yellow p-10 rounded shadow-md flex flex-col justify-center ">

            <span class="mx-auto"></span>

            <form method="POST" action="{{ route('register') }}" class="bg-white p-8 rounded-lg w-11/12 mx-auto">
                @csrf

                <h1 class="text-xl font-bold mb-4 flex items-center justify-center">Form Register</h1>
                <!-- Isian Form -->
                <div class="mb-4">
                    <label for="full_name" class="block text-sm font-semibold text-gray-600">Nama Lengkap</label>
                    <input type="text" id="full_name" name="full_name" class="w-full px-4 py-2 border rounded-md"
                        value={{ old('full_name') }}>
                    @error('full_name')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-sm font-semibold text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md"
                        value={{ old('email') }}>
                    @error('email')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>



                <div class="mb-4">
                    <label for="gender" class="block text-sm font-semibold text-gray-600">Jenis Kelamin</label>
                    <select id="gender" name="gender" class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Choose a gender</option>
                        @foreach ($genders as $gender)
                            <option value="{{ $gender->id }}">{{ $gender->name }}</option>
                        @endforeach
                    </select>
                    @error('gender')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-sm font-semibold text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-md">
                    @error('password')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="password_confirmation" class="block text-sm font-semibold text-gray-600">Ulangi
                        Password</label>
                    <input type="password" id="password_confirmation" name="password_confirmation"
                        class="w-full px-4 py-2 border rounded-md">
                    @error('password_confirmation')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <button type="submit" class="bg-red-500 w-full text-white px-10 py-2 rounded-md">Register</button>


            </form>
            <div class="text-center mb-1"><br>
                <p class="small mb-0">Sudah punya akun? <a href="{{ route('login') }}" class="text-blue-800">Login</a></p>
            </div>


        </div>
    </div>

    </div>

@endsection

@push('scripts')
@endpush

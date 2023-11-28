@extends('layout.auth-layout')
@section('content')

<div class="bg-white h-screen flex items-center justify-center">

    <div class="bg-white p-10 rounded shadow-md flex ">

        <div class="mr-8 flex items-center justify-center">
            <img src="{{ asset('assets/images/girl.png') }}" alt="girl-photo" class="w-32 h-32 object-cover rounded-full">
        </div>

        <div class="bg-yellow-200 p-10 rounded shadow-md flex">
           
            <span></span>
        
            <form method="POST" action="{{ route('login') }}" class="max-w-sm mx-auto">
                                @csrf>
                <!-- <div class="mr-8 flex items-center justify-center">
                    <img src="images/logo.jpg" alt="Gambar" class="w-32 h-32 object-cover rounded-full">
                </div> -->

                <h1 class="text-xl font-bold mb-4 flex items-center justify-center" >Form Login</h1>
                <!-- Isian Form -->
                <div class="mb-4">
                    <label for="username" class="block text-sm font-semibold text-gray-600">Username</label>
                    <input type="text" id="username" name="username" class="w-full px-4 py-2 border rounded-md">
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-sm font-semibold text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-md">
                </div>

                <!-- Tombol Login -->
                <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-md">Login</button>
            </form>
        </div>
    </div>

</div>

@endsection

@push('scripts')
@endpush

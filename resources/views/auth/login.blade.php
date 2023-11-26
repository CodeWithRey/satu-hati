@extends('layout.auth-layout')
@section('content')

<div class="bg-white min-h-screen min-w-screen grid lg:grid-cols-2 grid-cols-1">

        <div class="mr-8 flex items-center justify-center lg:flex hidden">
            <img src="{{ asset('assets/images/girl.png') }}" alt="girl-photo" class="w-full object-cover rounded-full">
        </div>

        <div class="bg-yellow p-10 rounded shadow-md flex flex-col justify-center ">
           
            <span class="mx-auto">logo</span>
        
            <form method="POST" action="{{ route('login') }}" class="bg-white p-8 rounded-lg w-11/12 mx-auto">
                @csrf

                <h1 class="text-xl font-bold mb-4 flex items-center justify-center">Form Login</h1>
                <!-- Isian Form -->
                <div class="mb-4">
                    <label for="email" class="block text-sm font-semibold text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md">
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-sm font-semibold text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-md">
                </div>

                <!-- Tombol Login -->
                <button type="submit" class="bg-red-500 w-full text-white px-10 py-2 rounded-md">Login</button>
           
                
            </form>
            <div class="text-center mb-1" ><br>
                <p class="small mb-0">Belum punya akun? <a href="{{ route('register') }}" class="text-blue-800" >Buat akun</a></p>
            </div>

              
        </div>
    </div>

</div>

@endsection

@push('scripts')
@endpush

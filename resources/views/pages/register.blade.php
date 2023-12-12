@extends('layout.default')
@section('showFooter', 'hidden')
@section('showNavbar', 'hidden')
@section('title', 'Satu Hati | Buat Akun')


@section('content')
    <div class="bg-white min-h-screen min-w-screen grid lg:grid-cols-2 grid-cols-1">
        <div class="mr-8 items-center justify-center lg:flex hidden">
            <img src="{{ asset('assets/images/logo satu hati.png') }}" alt="logo-satuhati" class="w-3/4">
        </div>

        <div class="bg-yellow lg:p-10 rounded shadow-md flex flex-col justify-center ">

            <span class="mx-auto"></span>

            <form method="POST" action="{{ route('register') }}" class="bg-white p-8 rounded-lg w-11/12 mx-auto">
                @csrf

                <h1 class="text-lg font-bold flex items-center justify-center text-center">Buat Akun Baru</h1>
                <h2 class="text-md mb-4 flex items-center justify-center text-center">Selamat datang di komunitas kami! <br>
                    Mohon isi formulir berikut untuk membuat akun Anda.</h2>
                <!-- Isian Form -->
                <div class="flex flex-col gap-2 mb-4">
                    <label for="full_name" class="block text-sm font-semibold text-gray-600">Nama Lengkap</label>
                    <input type="text" id="full_name" name="full_name" placeholder="Masukkan nama lengkap anda..."
                        class="w-full px-4 py-2 border rounded-md" value={{ old('full_name') }}>
                    @error('full_name')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <div class="flex flex-col gap-2 mb-4">
                    <label for="email" class="block text-sm font-semibold text-gray-600">E-Mail</label>
                    <input type="email" id="email" name="email" placeholder="Masukkan E-Mail anda..."
                        class="w-full px-4 py-2 border rounded-md" value={{ old('email') }}>
                    @error('email')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>



                <div class="flex flex-col gap-2 mb-4">
                    <label for="gender" class="block text-sm font-semibold text-gray-600">Gender</label>
                    <select id="gender" name="gender"
                        class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Pilih Gender...</option>
                        @foreach ($genders as $gender)
                            <option value="{{ $gender->id }}">{{ $gender->name }}</option>
                        @endforeach
                    </select>
                    @error('gender')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <div class="flex flex-col gap-2 mb-4">
                    <label for="password" class="block text-sm font-semibold text-gray-600">Kata Sandi</label>
                    <div class="w-full relative">
                        <input type="password" placeholder="Masukkan kata sandi anda..." id="password" name="password"
                            class="w-full px-4 py-2 border rounded-md">
                        <button type="button" tabindex="-1"
                            class="show-password absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 hover:text-gray-500">
                            <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </button>
                    </div>
                    @error('password')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <div class="flex flex-col gap-2 mb-4">
                    <label for="password_confirmation" class="block text-sm font-semibold text-gray-600">Ulangi
                        Kata Sandi</label>
                    <div class="w-full relative">
                        <input type="password" placeholder="Masukkan ulang kata sandi anda..." id="password_confirmation"
                            name="password_confirmation" class="w-full px-4 py-2 border rounded-md">
                        <button type="button" tabindex="-1"
                            class="show-password absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 hover:text-gray-500">
                            <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </button>
                    </div>
                    @error('password_confirmation')
                        <span class="text-red-500">{{ $message }}</span>
                    @enderror
                </div>

                <button type="submit"
                    class="bg-dy hover:bg-dy-dark transition duration-300 focus:ring-2 focus:ring-orange-300 w-full text-white px-10 py-2 rounded-md">Buat
                    Akun</button>


            </form>
            <div class="text-center mb-1"><br>
                <p class="small mb-0">Sudah punya akun? <a href="{{ route('login') }}"
                        class="text-dy font-bold hover:underline hover:text-dy-dark underline-offset-2 transition duration-300">Masuk</a>
                </p>
            </div>


        </div>
    </div>

    </div>

@endsection

@push('scripts')

@endpush

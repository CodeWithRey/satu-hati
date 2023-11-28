{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.auth-layout')

{{-- area konten yang ada pada layout default --}}
@section('content')

<h1 class="text-xl font-bold leading-7 flex items-center text-dy m-11">Edit Profil</h1>
<div class="col-span-full m-10">
    <label for="photo" class="block text-sm font-medium leading-6 text-black">Foto profile</label>
        <div class="mt-2 flex items-center gap-x-3">
            <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
            <button type="button" class="rounded-md bg-orange-600 px-8 py-1.5 text-sm font-semibold text-white">Ubah</button>
        </div>
</div>

<form method="POST">
       @csrf
<div class="border-b border-gray-900/10 pb-12 m-11">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Data Pribadi</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Lengkapi data diri Anda maka data privasi Anda terlindungi</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first_name" class="block text-sm font-medium leading-6 text-gray-900">Nama Depan</label>
          <div class="mt-2">
            <input type="text" name="first_name" id="first_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last_name" class="block text-sm font-medium leading-6 text-gray-900">Nama Belakang</label>
          <div class="mt-2">
            <input type="text" name="last_name" id="last_name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Alamat Email</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="birthday" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
          <div class="mt-2">
            <input type="date" name="birthday" id="birthday" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Umur</label>
          <div class="mt-2">
            <input type="text" name="age" id="age" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</label>
          <div class="mt-2">
            <select id="gender" name="gender" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="password-confirmation" class="block text-sm font-medium leading-6 text-gray-900">Ulangi Password</label>
          <div class="mt-2">
            <input id="password-confirmation" name="password-confirmation" type="password-confirmation" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>


      </div>
      <br>
      <button type="button" class="rounded-md bg-orange-600 px-8 py-1.5 text-sm font-semibold text-white flex items-center justify-center mx-auto">Simpan</button>
    </div>
</form>

@endsection
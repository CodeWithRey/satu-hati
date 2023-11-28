{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')

{{-- area konten yang ada pada layout default --}}
@section('content')
    <form method="POST" action="{{ route('profile.update', Auth::user()->id) }}">
        @csrf
        <div class="col-span-full m-10 text-center py-12">
            <h1 class="text-xl font-bold leading-7 text-dy m-11 text-center">Edit Profile</h1>
            <div class="mt-2 flex items-center gap-x-3">
                <label for="profilePicture" class="cursor-pointer mx-auto">
                    <img src="{{ asset('assets/images/user_placeholder.png') }}"
                        class="w-44 rounded-full object-contain border-2" alt="" id="previewProfilePicture">
                </label>

                <input type="file" name="profile_picture" id="profilePicture" class="hidden">
            </div>
        </div>


        <div class="border-b border-gray-900/10 pb-12 m-11">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Data Pribadi</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">Lengkapi data diri Anda maka data privasi Anda terlindungi</p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium leading-6 text-gray-900">Nama Depan</label>
                    <div class="mt-2">
                        <input type="text" name="first_name" id="first_name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium leading-6 text-gray-900">Nama Belakang</label>
                    <div class="mt-2">
                        <input type="text" name="last_name" id="last_name"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-4">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Alamat Email</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-2 sm:col-start-1">
                    <label for="birthday" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
                    <div class="mt-2">
                        <input type="date" name="birthday" id="birthday"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Umur</label>
                    <div class="mt-2">
                        <input type="text" name="age" id="age"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</label>
                    <div class="mt-2">
                        <select id="gender" name="gender"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            ` @foreach ($genders as $gender)
                                <option value="{{ $gender->id }}">{{ $gender->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                        <input id="password" name="password" type="password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="password-confirmation" class="block text-sm font-medium leading-6 text-gray-900">Ulangi
                        Password</label>
                    <div class="mt-2">
                        <input id="password-confirmation" name="password-confirmation" type="password-confirmation"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>


            </div>
            <br>
            <button type="button"
                class="rounded-md bg-orange-600 px-8 py-1.5 text-sm font-semibold text-white flex items-center justify-center mx-auto">Simpan</button>
        </div>
    </form>
@endsection

@push('scripts')
    <script>
        $(document).ready(function(e) {
            $('#profilePicture').change(function(e) {
                var file = e.target.files[0];
                if (file) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $('#previewProfilePicture').attr('src', e.target.result);
                    }
                    reader.readAsDataURL(file);
                }
            });
        });
    </script>
@endpush

{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')
@section('title', 'Satu Hati | Halaman Profil')
@section('showFooter', 'hidden')


{{-- area konten yang ada pada layout default --}}
@section('content')
    <div class="min-w-screen min-h-screen flex items-center justify-center">
        <div class="w-11/12 mx-auto my-32">
            <h1 class="font-bold text-2xl mb-6">Profil <span class="text-dy">{{ $user->full_name }}</span></h1>
            <div class="shadow-xl relative mx-auto rounded grid lg:grid-cols-3 grid-cols-1">
                {{-- Read Mode --}}
                <div class="lg:col-span-1 pt-10 bg-dy flex flex-col justify-between gap-8 rounded-l text-center text-white relative"
                    id="readProfile">
                    <img src="{{ $user->profile_picture_path ?? asset('assets/images/user_placeholder.png') }}"
                        class="w-44 h-44 rounded-full object-cover border-2 mx-auto">
                    <div class="flex flex-col items-start mx-auto gap-3">
                        <span class="font-bold mb-3 mx-auto flex items-center gap-3">
                            {{ $user->full_name }}
                            @if ($user->role->name === 'Expert')
                                <div class="group relative font-normal">
                                    <span
                                        class='bg-white w-6 h-6 text-dy flex items-center justify-center rounded-full text-sm cursor-pointer'>
                                        <i class="fa fa-check" aria-hidden="true"></i>
                                    </span>
                                    <div
                                        class="bg-white text-dy absolute w-72 rounded py-4 px-4 shadow-lg mt-2 -translate-x-full ml-4 hidden group-hover:block">
                                        <i class="fa fa-info-circle mr-2" aria-hidden="true"></i> Spesialis Berpengalaman
                                    </div>
                                </div>
                            @endif
                        </span>


                        <span class="flex items-center gap-4">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            {{ $user->email }}
                        </span>
                        <span class="flex items-center gap-4">
                            <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                            {{ $user->birthday ? \Carbon\Carbon::parse($user->birthday)->format('d M Y') : '-' }}
                        </span>
                        <span class="flex items-center gap-4">
                            @if ($user->gender->id == 1)
                                <i class="fa fa-male text-xl" aria-hidden="true"></i>
                            @else
                                <i class="fa fa-female text-xl" aria-hidden="true"></i>
                            @endif
                            {{ $user->gender->name ?? '-' }}
                        </span>
                        <span class="flex items-center gap-4">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            Bergabung sejak {{ \Carbon\Carbon::parse($user->created_at)->format('d M Y') }}
                        </span>
                    </div>
                    <div class="w-full bg-yellow p-4 mt-4 flex items-center justify-center gap-8">
                        <span class="flex items-center gap-2 text-black">
                            <i class="fa fa-newspaper" aria-hidden="true"></i>
                            {{ $user->posts->count() }} Postingan
                        </span>

                        <span class="flex items-center gap-2 text-black">
                            <i class="fa fa-comment" aria-hidden="true"></i>
                            {{ $user->comments->count() }} Komentar
                        </span>
                    </div>

                    @if (auth()->user()->id == $user->id)
                        <button type="button"
                            class="absolute top-4 right-4 text-white hover:text-yellow transition duration-300"
                            data-dropdown-toggle="edit-dropdown" data-dropdown-placement="bottom-end">
                            <i class="fa fa-edit text-xl" aria-hidden="true"></i>
                        </button>
                    @endif

                    <div id="edit-dropdown"
                        class="z-50 hidden my-4 w-[200px] text-start list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul>
                            <li>
                                <button type="button" data-menu="editProfile"
                                    class="btn-switch text-black p-4 text-sm hover:bg-slate-50 w-full text-start rounded-t-lg">Ubah
                                    Profil
                                </button>
                            </li>
                            <li>
                                <button type="button" data-menu="editPassword"
                                    class="btn-switch text-black p-4 text-sm hover:bg-slate-50 w-full text-start rounded-b-lg">Ubah
                                    Kata Sandi</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {{-- Edit Profile --}}
                <form method="POST" action="{{ route('profile.update', Auth::user()->id) }}" enctype="multipart/form-data"
                    class="lg:col-span-1 pt-10 bg-dy flex-col gap-8 rounded-l text-white relative hidden" id="editProfile">
                    @csrf
                    @method('PUT')
                    <label for="profilePicture" class="cursor-pointer mx-auto pb-8">
                        <img src="{{ $user->profile_picture_path ?? asset('assets/images/user_placeholder.png') }}"
                            class="w-44 h-44 rounded-full object-cover border-2 mx-auto" alt=""
                            id="previewProfilePicture">
                    </label>
                    <input type="file" name="profile_picture" id="profilePicture" class="hidden">
                    <div class="flex flex-col mx-auto gap-4 w-11/12">
                        <div class="flex flex-col gap-2">
                            <label for="fullName">Nama Lengkap <span class="text-white font-bold">*</span></label>
                            <input type="text" value="{{ $user->full_name }}" name="full_name" id="fullName"
                                class="w-full px-4 py-2 border rounded-md text-black">
                            @error('full_name')
                                <span class="text-red">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="gender">Gender <span class="text-white font-bold">*</span></label>
                            <select id="gender" name="gender_id" class="w-full px-4 py-2 border rounded-md text-black">
                                @foreach ($genders as $gender)
                                    <option value="{{ $gender->id }}"
                                        {{ $gender->id === $user->gender->id ?? 'selected' }}>
                                        {{ $gender->name }}</option>
                                @endforeach
                            </select>
                            @error('gender')
                                <span class="text-red">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="birthday">Tanggal Lahir</label>
                            <input type="date" id="birthday" name="birthday"
                                class="w-full px-4 py-2 border rounded-md text-black" value="{{ $user->birthday }}">
                            @error('birthday')
                                <span class="text-red">{{ $message }}</span>
                            @enderror
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="summary">Perkenalan Singkat</label>
                            <textarea placeholder="Perkenalkan dirimu secara singkat" name="summary" id="summary"
                                class="resize-none w-full h-28 px-4 py-2 border rounded-md text-black" id="">{{ $user->summary }}</textarea>
                            @error('summary')
                                <span class="text-red">{{ $message }}</span>
                            @enderror
                        </div>
                        <button type="submit"
                            class="bg-yellow w-full mt-6 text-black p-3 rounded-md font-bold mb-10">Ubah
                            Profil</button>
                    </div>

                    <button type="button" data-menu="readProfile"
                        class="btn-switch absolute top-4 right-4 text-white hover:text-yellow transition duration-300">
                        <i class="fa fa-times text-2xl" aria-hidden="true"></i>
                    </button>
                </form>
                {{-- Edit Password --}}
                <div class="lg:col-span-1 pt-10 bg-dy rounded-l text-center text-white relative hidden" id="editPassword">
                    <img src="{{ $user->profile_picture_path ?? asset('assets/images/user_placeholder.png') }}"
                        class="w-44 h-44 rounded-full object-cover border-2 mx-auto mb-8">
                    <span class="font-bold mx-auto">{{ $user->full_name }}</span>
                    <form method="POST" action="{{ route('password.update') }}"
                        class="flex flex-col items-start mx-auto gap-3 mt-6">
                        @csrf
                        @method('PUT')
                        <div class="flex flex-col mx-auto gap-4 w-11/12">
                            <div class="flex flex-col gap-2 text-start">
                                <label for="current_password">Kata Sandi Lama <span
                                        class="text-white font-bold">*</span></label>
                                <div class="w-full relative">
                                    <input id="current_password" type="password" name="current_password"
                                        class="w-full pl-4 pr-12 py-2 border rounded-md text-black"
                                        placeholder="Masukkan kata sandi lama...">
                                    <button type="button" tabindex="-1"
                                        class="show-password absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 hover:text-gray-500">
                                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                    </button>
                                </div>

                                @error('current_password')
                                    <span class="text-red">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="flex flex-col gap-2 text-start">
                                <label for="password">Kata Sandi Baru <span class="text-white font-bold">*</span></label>
                                <div class="w-full relative">
                                    <input id="password" type="password" name="password"
                                        class="w-full pl-4 pr-12 py-2 border rounded-md text-black"
                                        placeholder="Masukkan kata sandi baru...">
                                    <button type="button" tabindex="-1"
                                        class="show-password absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 hover:text-gray-500">
                                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                    </button>
                                </div>

                                @error('password')
                                    <span class="text-red">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="flex flex-col gap-2 text-start">
                                <label for="password_confirmation">Konfirmasi Kata Sandi Baru <span
                                        class="text-white font-bold">*</span></label>
                                <div class="w-full relative">
                                    <input id="password_confirmation" type="password" name="password_confirmation"
                                        class="w-full pl-4 pr-12 py-2 border rounded-md text-black"
                                        placeholder="Masukkan kata sandi baru...">
                                    <button type="button" tabindex="-1"
                                        class="show-password absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 hover:text-gray-500">
                                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                    </button>
                                </div>

                                @error('password_confirmation')
                                    <span class="text-red">{{ $message }}</span>
                                @enderror
                            </div>
                            <button type="submit"
                                class="bg-yellow w-full mt-6 text-black p-3 rounded-md font-bold mb-10">Ubah
                                Password</button>
                        </div>
                    </form>
                    <button type="button" data-menu="readProfile"
                        class="btn-switch absolute top-4 right-4 text-white hover:text-yellow transition duration-300">
                        <i class="fa fa-times text-2xl" aria-hidden="true"></i>
                    </button>
                </div>

                <div class="lg:col-span-2 py-10 rounded-r">
                    <div class="w-11/12 mx-auto flex flex-col gap-6">
                        <div class="flex flex-col gap-2">
                            <h2 class="font-bold text-xl">Perkenalan Singkat
                                <br class="lg:hidden block">
                                <span class="text-dy">
                                    {{ $user->full_name }}
                                </span>
                            </h2>
                            <p class="text-justify">{{ $user->summary ?? 'Tidak ada perkenalan singkat.' }}</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h2 class="font-bold text-xl">Postingan <span class="text-dy">Terpopuler</span></h2>
                            @if ($top_post)
                                <div class="bg-white p-4 rounded-md shadow-md w-full">
                                    <div class="flex w-full items-center justify-between">
                                        <div class="flex items-center mb-4">
                                            <img src="{{ $top_post->user->profile_picture_path ? $top_post->user->profile_picture_path : asset('assets/images/user_placeholder.png') }}"
                                                alt="Profile Picture" class="w-8 h-8 rounded-full mr-2 ">
                                            <span
                                                class="text-black font-semibold">{{ $top_post->is_anonymous === 0 ? $top_post->user->full_name : 'Anonymous' }}</span>
                                        </div>
                                        <a href='{{ route('reply.comment', $top_post->id) }}'
                                            class="flex items-center gap-3 bg-dy hover:bg-dy-dark py-2 px-6 rounded focus:ring-4 focus:ring-orange-200 text-white transition duration-300">
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                            Lihat
                                        </a>
                                    </div>
                                    <h2 class="text-lg font-semibold mb-2">{{ $top_post->title }}</h2>
                                    <p class="text-gray-600 mb-4">{{ $top_post->description }}</p>
                                    <div class="flex flex-wrap items-center justify-start gap-8 mb-4">
                                        @foreach ($top_post->postImages as $image)
                                            <a class="my-image-links" data-maxwidth="800px"
                                                href="{{ asset($image->path) }}">
                                                <img src="{{ asset($image->path) }}" class="object-cover" width="100px"
                                                    alt="">
                                            </a>
                                        @endforeach
                                    </div>
                                    <div class="flex items-center text-gray-500 mb-2">
                                        <div class="like-button mr-2">
                                            <i class="fas fa-thumbs-up"></i>
                                        </div>
                                        <span class="mr-5">{{ $top_post->likes()->count() }} Suka</span>
                                        <span class="mr-5"><i class="fas fa-comment"></i>
                                            {{ $top_post->comments()->count() }}
                                            Komentar</span>
                                    </div>
                                </div>
                            @else
                                <p class="text-justify">Belum pernah membuat postingan</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



@endsection

@push('scripts')
    <script>
        new VenoBox({
            selector: '.my-image-links',
            spinner: 'rotating-plane',
            maxWidth: '100%'
        });
    </script>
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


            $('.btn-switch').on('click', function() {
                const target = $(this).data('menu');
                $('#readProfile').hide();
                $('#editProfile').hide();
                $('#editPassword').hide();
                $(`#${target}`).show();
            });
        });
    </script>
@endpush

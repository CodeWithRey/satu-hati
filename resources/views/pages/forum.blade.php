{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')

@section('showFooter', 'hidden')
@section('content')
    <div class="bg-landing-forum min-h-[80vh] min-w-screen flex flex-col items-center justify-center py-12">
        <img src="{{ asset('assets/images/vec.png') }}" class="w-[400px]" alt="">
        <div class="flex flex-col gap-4 mt-4">
            <h1 class="mx-auto font-bold text-5xl">Forum <span class="text-[#CB6A10]">Diskusi</span>
            </h1>
            <p class="text-xl text-center mb-0 px-20">Selamat Datang di Forum Diskusi SatuHati!
                <br>Mari bersama-sama membangun ruang aman untuk berdiskusi, mendukung satu sama lain, dan menciptakan
                    perubahan positif.
                </p>
        </div>
    </div>

    <section class="bg-white py-8 mx-auto">
        <div class="w-11/12 mx-auto">
            <!-- Tombol New Post -->
            <!-- Tombol New Post dengan modal toggle -->
            @auth
                <button data-modal-target="crud-modal" data-modal-toggle="crud-modal"
                    class="bg-[#CB6A10] text-white py-3 px-4 rounded-lg mb-4 flex items-center text-lg">
                    <i class="fas fa-plus-circle mr-2 text-2xl"></i> Postingan Baru
                </button>
            @endauth

            @guest
                <button class="bg-[#CB6A10] text-white py-3 px-4 rounded-lg mb-4 flex items-center text-lg">
                    <a href="{{ route('login') }}" class="w-full h-full">
                        <i class="fas fa-plus-circle mr-2 text-2xl"></i> Postingan Baru
                    </a>
                </button>
            @endguest


            @auth
                <div id="crud-modal" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-[1100px] max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Buat Postingan Baru
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <form class="p-6 md:p-8 min-w-full" action="{{ route('post.store') }}" method="POST"
                                enctype="multipart/form-data">
                                @csrf
                                <input type="hidden" value="{{ Auth::user()->id }}" name="user_id">
                                <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
                                    <div class="col-span-2">
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul
                                            Postingan <span class="text-red-500">*</span></label>
                                        <input value="{{ old('title') }}" type="text" name="title" id="name" value="{{ old('name') }}"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#CB6A10] focus:border-[#CB6A10] block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#CB6A10] dark:focus:border-[#CB6A10]"
                                            placeholder="Tuliskan judul dengan singkat...">
                                        @error('title')
                                            <span class="text-red-500 text-sm">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="col-span-2">
                                        <label for="description"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Isi
                                            Postingan <span class="text-red-500">*</span></label>
                                        <textarea id="description" name="description" rows="10"
                                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#CB6A10] focus:border-[#CB6A10] dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#CB6A10] dark:focus:border-[#CB6A10]"
                                            placeholder="Ceritakan masalahmu di sini secara detail...">{{ old('description') }}</textarea>
                                        @error('description')
                                            <span class="text-red-500 text-sm">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="col-span-2">
                                        <label for="image"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unggah
                                            Gambar</label>
                                        <div
                                            class="relative border-dashed border-2 border-[#CB6A10] rounded-lg p-6 flex justify-center items-center">
                                            <input type="file" id="imageInput" name="images[]" accept="image/*" multiple
                                                class="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer"
                                                onchange="displayFileName()">
                                            <div class="text-center">
                                                <p class="text-sm text-gray-500 dark:text-gray-400">Tarik dan lepas gambar
                                                    atau klik di sini</p>
                                                <p id="fileName"
                                                    class="text-[#CB6A10] text-sm font-medium mt-2 whitespace-pre-wrap"></p>
                                            </div>
                                        </div>
                                        @error('images[]')
                                            <span class="text-red-500 text-sm">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>

                                    <script>
                                        function displayFileName() {
                                            const input = document.getElementById('imageInput');
                                            const fileNameDisplay = document.getElementById('fileName');
                                            fileNameDisplay.textContent = '';
                                            if (input.files.length > 0) {
                                                for (const f of input.files) {
                                                    fileNameDisplay.textContent += f.name + '\n'
                                                }
                                            }
                                        }
                                    </script>

                                    <div class="flex items-center mb-5">
                                        <input id="default-checkbox" type="checkbox" value=1 name="is_anonymous"
                                            class="w-4 h-4 text-[#CB6A10] bg-gray-100 border-gray-300 rounded focus:ring-[#CB6A10] dark:focus:ring-[#CB6A10] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="default-checkbox"
                                            class="ml-2 text-sm font-normal italic dark:text-gray-300 overflow-visible whitespace-nowrap overflow-ellipsis">
                                            Centang jika Anda ingin posting secara anonim tanpa mengungkapkan
                                            identitas Anda.
                                        </label>
                                        @error('is_anonymous')
                                            <span class="text-red-500 text-sm">
                                                {{ $message }}
                                            </span>
                                        @enderror
                                    </div>


                                </div>


                                <button type="submit"
                                    class="text-white inline-flex items-center bg-[#CB6A10] hover:bg-[#CB6A20] focus:ring-4 focus:outline-none focus:ring-[#CB6A10] font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-[#CB6A20] dark:hover:bg-[#CB6A30] dark:focus:ring-[#CB6A30]">
                                    <i class="fas fa-paper-plane text-lg me-2"></i> Posting
                                </button>

                            </form>


                        </div>
                    </div>
                </div>
            @endauth
            <!-- Main modal -->


            <!-- Tombol Kategori -->
            <div class="flex space-x-4 mb-4">
                <button class="bg-[#d6d6d6] text-white py-1 px-2 rounded-full flex items-center text-xs">
                    <i class="fas fa-fire-alt text-sm mr-1"></i> Populer
                </button>
                <button class="bg-[#d6d6d6] text-white py-1 px-2 rounded-full flex items-center text-xs">
                    <i class="fas fa-clock text-sm mr-1"></i> Terbaru
                </button>
            </div>


            <!-- Komentar-komentar -->
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                @foreach ($posts as $post)
                    <!-- Card Komentar -->
                    <div class="bg-white p-4 rounded-md shadow-md w-full">
                        <!-- Foto Profile dan Nickname -->
                        <div class="flex items-center mb-4">
                            <img src="{{ $post->user->profile_picture_path && !$post->is_anonymous ? $post->user->profile_picture_path : asset('assets/images/user_placeholder.png') }}"
                                alt="Profile Picture" class="w-8 h-8 rounded-full mr-2">
                            <span
                                class="text-black font-semibold {{ $post->is_anonymous == 1 ? 'italic' : '' }}">{{ $post->is_anonymous === 0 ? $post->user->full_name : 'Pengguna Anonim' }}</span>
                        </div>
                        <!-- Judul Postingan -->
                        <h2 class="text-lg font-semibold mb-2">{{ $post->title }}</h2>
                        <!-- Deskripsi Postingan -->
                        <p class="text-gray-600 mb-4 whitespace-pre-wrap">{{ $post->description }}</p>

                        <div class="flex flex-wrap items-center justify-start gap-8 mb-4">
                            @foreach ($post->postImages as $image)
                                <a class="my-image-links" data-maxwidth="800px" href="{{ asset($image->path) }}">
                                    <img src="{{ asset($image->path) }}" class="object-cover" width="100px"
                                        alt="">
                                </a>
                            @endforeach
                        </div>
                        <!-- Tombol Like dan Jumlah Like -->
                        <div class="flex items-center text-gray-500 mb-2">
                            <button class="like-button mr-2" onclick="toggleLike(this)">
                                <i class="fas fa-thumbs-up"></i>
                            </button>
                            <span class="mr-5">{{ $post->likes()->count() }} Suka</span>
                            <span class="mr-5"><i class="fas fa-comment"></i> {{ $post->comments()->count() }}
                                Komentar</span>
                        </div>

                        <!-- Tombol Like dan Jumlah Like -->
                        <style>
                            .like-button {
                                transition: color 0.2s ease;
                                /* Efek transisi untuk perubahan warna */
                            }

                            .like-button.clicked {
                                color: #CB6A10;
                                /* Warna yang diinginkan saat tombol diklik */
                            }
                        </style>


                        <script>
                            function toggleLike(button) {
                                button.classList.toggle('clicked');
                            }
                        </script>


                        <!-- Tombol Balas -->
                        @auth
                            <button class="text-gray-600">
                                <a href="{{ route('reply.comment', $post->id) }}" class="w-full h-full">
                                    Balas
                                </a>
                            </button>
                        @endauth

                        @guest
                            <button class="text-gray-600">
                                <a href="{{ route('login') }}" class="w-full h-full">
                                    Balas
                                </a>
                            </button>
                        @endguest

                    </div>
                @endforeach
            </div>
        </div>
    </section>
@endsection

@push('scripts')
    <script>
        new VenoBox({
            selector: '.my-image-links',
            spinner: 'rotating-plane',
            maxWidth: '100%'
        });
    </script>
@endpush

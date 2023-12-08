{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')

@section('showFooter', 'hidden')
@section('content')

    <!-- Postingan Utama -->
    <section class="w-11/12 py-5 mx-auto mt-20">
        <div class="bg-white p-4 rounded-lg shadow-md">
            <!-- Foto Profile dan Nickname -->
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                    <img src="{{ $post->user->profile_picture_path ? $post->user->profile_picture_path : asset('assets/images/user_placeholder.png') }}"
                        alt="Profile Picture" class="w-8 h-8 rounded-full mr-2">
                    <div class="flex flex-col ">
                        <span
                            class="text-black font-semibold capitalize {{ $post->is_anonymous == 1 ? 'italic' : '' }}">{{ $post->is_anonymous === 0 ? $post->user->full_name : 'Pengguna Anonim' }}</span>
                        <span class="text-slate-400 font-medium">Diposting pada
                            {{ $post->created_at->diffForHumans() }}</span>
                    </div>
                </div>
                @if ($post->user->id == Auth::id())
                    <div class="relative group">
                        <button class="text-gray-600 focus:outline-none text-lg p-2" onclick="toggleMenu(this)">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>

                        <!-- Menu Opsi Edit dan Hapus -->
                        <div class="hidden absolute right-0 mt-2 bg-white border rounded-md shadow-lg" id="optionsMenu">
                            <button
                                class="w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300">
                                Edit
                            </button>
                            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
                                href="{{ route('post.destroy', $post->id) }}" data-confirm-delete="true">
                                Hapus
                            </a>
                        </div>
                    </div>
                @endif
            </div>
            <!-- Judul Postingan -->
            <h2 class="text-lg font-semibold mb-2">{{ $post->title }}</h2>
            <!-- Deskripsi Postingan -->
            <p class="text-gray-600 mb-4">{{ $post->description }}
            </p>
            <!-- Gambar Postingan -->
            @foreach ($post->postImages as $image)
                <a class="my-image-links" data-maxwidth="800px" href="{{ asset($image->path) }}">
                    <img src="{{ asset($image->path) }}" alt="Posting Image" class="w-96 h-auto rounded-md">
                </a>
            @endforeach
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

            <div class="flex items-center text-gray-500 mb-2 mt-4">
                <button class="like-button mr-2" onclick="toggleLike(this)">
                    <i class="fas fa-thumbs-up text-xl"></i>
                </button>
                <span class="mr-5">{{ $post->likes()->count() }} Suka</span>
                <span class="mr-5"><i class="fas fa-comment text-xl"></i> {{ $post->comments()->count() }}
                    Komentar</span>
            </div>
        </div>
    </section>

    <section class="bg-white mb-5 mt-8 w-11/12 mx-auto">
        <h2 class="text-[#CB6A10] text-2xl text-center font-bold mb-8">───※ Balasan Para User ※───</h2>
        <!-- Container -->
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <!-- Card Komentar 3-->
            @forelse ($post->comments as $comment)
                @if ($comment->parent_comment_id === null)
                    <div class="bg-white p-4 rounded-lg border w-full">
                        <!-- Foto Profile dan Nickname Komentator -->
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center">
                                <img src="{{ $comment->user->profile_picture_path ? $comment->user->profile_picture_path : asset('assets/images/user_placeholder.png') }}"
                                    alt="Profile Picture" class="w-8 h-8 rounded-full mr-2">
                                <div class="flex flex-col ">
                                    <span class="text-black font-semibold capitalize flex self-start"
                                        id="{{ $comment->id }}">{{ $comment->user->full_name }}</span>
                                    <span class="text-slate-400 font-medium">Diposting pada
                                        {{ $comment->created_at->diffForHumans() }}</span>
                                </div>
                            </div>
                            @if ($comment->user->id == Auth::id())
                                <div class="relative group">
                                    <button class="text-gray-600 focus:outline-none text-lg p-2" onclick="toggleMenu(this)">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                    <!-- Menu Opsi Edit dan Hapus -->
                                    <div class="hidden absolute right-0 mt-2 bg-white border rounded-md shadow-lg"
                                        id="optionsMenu">
                                        <button
                                            class="text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">Edit</button>
                                        <a class="text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
                                            href="{{ route('comment.destroy', $comment->id) }}" data-confirm-delete="true">
                                            Hapus
                                        </a>
                                    </div>
                                </div>
                            @endif

                        </div>
                        <!-- Isi Komentar -->
                        <p class="text-gray-600 mb-2">{{ $comment->body }}</p>
                        <!-- Gambar Postingan -->
                        @foreach ($comment->commentImages as $image)
                            <a class="my-image-links" data-maxwidth="800px" href="{{ asset($image->path) }}">
                                <img src="{{ asset($image->path) }}" alt="Posting Image" class="w-80 h-auto rounded-md">
                            </a>
                        @endforeach
                        <!-- Tombol Like dan Jumlah Like untuk Komentar -->
                        <div class="flex items-center justify-start text-gray-500 mt-4">
                            <!-- Tombol Suka -->
                            <div class="flex items-center">
                                <button class="like-button mr-2" onclick="toggleLike(this)">
                                    <i class="fas fa-thumbs-up text-lg"></i>
                                </button>
                                <span class="mr-5">{{ $comment->likes()->count() }} Suka</span>

                            </div>
                            <!-- Tombol Balas -->
                            <button class="text-gray-600"
                                onclick="prepareReply('{{ $comment->user->full_name }}', '{{ $comment->id }}')">
                                Balas
                            </button>
                        </div>

                        <!-- Kontainer untuk reply -->
                        <div class="mt-4 space-y-4 ml-10" style="display: none;" id="commentContainer">
                            @include('includes.comment_replies', ['replies' => $comment->replies])
                        </div>

                        <!-- Tombol Tampilkan/Sembunyikan Komentar -->
                        @if ($comment->replies->count() > 0)
                            <button class="text-gray-600 mt-2" onclick="toggleComments(this)">
                                Tampilkan Balasan 🡫
                            </button>
                        @endif
                    </div>
                @endif
            @empty
                @include('includes.no_content_detail')
            @endforelse

        </div>
    </section>


    <!-- Form Chatroom -->
    <form action="{{ route('comment.store') }}" method="POST" class="sticky bottom-0 inset-x-0 bg-white"
        enctype="multipart/form-data">
        @csrf

        <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
        <input type="hidden" name="post_id" value="{{ $post->id }}">


        <input type="hidden" name="parent_comment_id[]" id="parent_comment_id">

        <label for="chat" class="sr-only">Your message</label>
        <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <label for="image-upload"
                class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 20 18">
                    <path fill="currentColor"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
                </svg>
                <span class="sr-only">Upload image</span>
                <input type="file" id="image-upload" class="hidden" name="images" accept="image/*"
                    onchange="displayImagePreview(this)">
            </label>
            <img id="image-preview" class="hidden w-16 h-16 object-cover rounded-lg mr-1" src=""
                alt="Image Preview">
            <!-- Tambahkan tombol silang -->
            <button type="button" id="cancel-image"
                class="hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M14.95 5.95a1 1 0 0 1 0 1.414L11.414 10l3.536 3.536a1 1 0 0 1-1.414 1.414L10 11.414l-3.536 3.536a1 1 0 0 1-1.414-1.414L8.586 10 5.05 6.464a1 1 0 1 1 1.414-1.414L10 8.586l3.536-3.536a1 1 0 0 1 1.414 0Z">
                    </path>
                </svg>
                <span class="sr-only">Cancel image</span>
            </button>
            <div class="w-full flex items-stretch mx-4 border border-gray-300">
                <div class="bg-gray-300 border-gray-400 py-2 px-4 text-sm items-center justify-center font-bold gap-2 hidden"
                    id="replyContainer">
                    <span id="replyLabel"></span>
                    <button onclick="cancelReply()" type="button">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <textarea id="chat" rows="1"
                    class="block p-2.5 grow text-sm text-gray-900 bg-white  resize-none border-none focus:ring-[#CB6A10] focus:border-[#CB6A10] dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#CB6A10] dark:focus:border-[#CB6A10]"
                    name="body" placeholder="Tulis balasan..."></textarea>
            </div>

            <button type="submit"
                class="inline-flex justify-center p-2 text-white rounded-full cursor-pointer bg-[#CB6A10] hover:bg-[#AD5910] dark:bg-[#CB6A10] dark:hover:bg-[#AD5910]">
                <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 18 20">
                    <path
                        d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span class="sr-only">Send message</span>
            </button>
        </div>
    </form>
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
        function toggleMenu(button) {
            const optionsMenu = button.nextElementSibling;
            optionsMenu.classList.toggle('hidden');
        }

        function toggleLike(button) {
            button.classList.toggle('clicked');
        }

        let commentsVisible = false;

        function toggleComments(button) {
            const commentSection = button.parentElement.querySelector(".mt-4.space-y-4.ml-10");
            commentsVisible = !commentsVisible;

            if (commentsVisible) {
                commentSection.style.display = "block";
                button.textContent = "Sembunyikan Balasan 🡩";
            } else {
                commentSection.style.display = "none";
                button.textContent = "Tampilkan Balasan 🡫";
            }
        }
    </script>

    <script>
        function displayImagePreview(input) {
            const preview = document.getElementById('image-preview');
            const cancelBtn = document.getElementById('cancel-image');

            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.classList.remove('hidden');
                cancelBtn.classList.remove('hidden');
            };

            reader.readAsDataURL(input.files[0]);
        }

        // fungsi untuk membatalkan pilihan gambar
        document.getElementById('cancel-image').addEventListener('click', function() {
            const preview = document.getElementById('image-preview');
            const input = document.getElementById('image-upload');

            preview.classList.add('hidden');
            this.classList.add('hidden');
            input.value = ''; // Reset nilai input file untuk membatalkan pilihan gambar
        });
    </script>

    <script>
        function prepareReply(commenterName, commentId) {
            var textarea = document.getElementById('chat');
            $('#replyContainer').removeClass('hidden')
            $('#replyContainer').addClass('flex')
            $('#replyLabel').text(`@ ${commenterName}`)
            textarea.placeholder = 'Balas kepada ' + commenterName + '...';
            $('#parent_comment_id').val([commentId]);
        }

        function cancelReply() {
            var textarea = document.getElementById('chat');
            $('#replyContainer').removeClass('flex')
            $('#replyContainer').addClass('hidden')
            textarea.placeholder = 'Tulis balasan...';
            $('#parent_comment_id').val(null);
        }

        function handleReplyOrigin(commentId) {
            scrollToTargetAdjusted(document.getElementById(commentId))
            $('.highlight-text').removeClass('highlight-text')
            $(`#${commentId}`).addClass('highlight-text')
        }

        function scrollToTargetAdjusted(element) {
            var headerOffset = 200;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    </script>
@endpush

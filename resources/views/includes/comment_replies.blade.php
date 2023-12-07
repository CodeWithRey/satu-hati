@if ($replies->isNotEmpty())
    @foreach ($replies as $reply)
        <div class="bg-gray-100 p-4 rounded-lg border">
            <!-- Foto Profile dan Nickname Penjawab -->
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img src="{{ $reply->user->profile_picture_path ? $reply->user->profile_picture_path : asset('assets/images/user_placeholder.png') }}"
                            alt="Profile Picture" class="w-8 h-8 rounded-full mr-2">
                        <div class="flex flex-col ">
                            <span class="text-black font-semibold capitalize">{{ $reply->user->full_name }}</span>
                            <span class="text-slate-400 font-medium">Diposting pada
                                {{ $reply->created_at->diffForHumans() }}</span>
                        </div>
                    </div>
                </div>
                <div class="relative group">
                    <button class="text-gray-600 focus:outline-none text-lg p-2" onclick="toggleMenu(this)">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <!-- Menu Opsi Edit dan Hapus -->
                    <div class="hidden absolute right-0 mt-2 space-y-2 bg-white border rounded-md shadow-lg"
                        id="optionsMenu">
                        <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</button>
                        <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hapus</a>
                    </div>
                </div>
            </div>

            <!-- Isi reply -->
            <p class="text-gray-600 mb-2">
                <span
                    class="text-blue-500 font-semibold capitalize">{{ '@' . $reply->parentComment->user->full_name }}</span>
                {{ $reply->body }}
            </p>

            <!-- Gambar Postingan -->
            @foreach ($reply->commentImages as $image)
                <a class="my-image-links" data-maxwidth="800px" href="{{ asset($image->path) }}">
                    <img src="{{ asset($image->path) }}" alt="Posting Image" class="w-32 h-auto rounded-md">
                </a>
            @endforeach
            <!-- Tombol Like dan Jumlah Like untuk Komentar -->
            <div class="flex items-center justify-start text-gray-500 mt-4">
                <!-- Tombol Suka -->
                <div class="flex items-center">
                    <button class="like-button mr-2" onclick="toggleLike(this)">
                        <i class="fas fa-thumbs-up text-lg"></i>
                    </button>
                    <span class="mr-5">{{ $reply->likes()->count() }} Suka</span>

                </div>
                <!-- Tombol Balas -->
                <button class="text-gray-600 reply-comment" data-comment-id="{{ $reply->id }}"
                    onclick="prepareReply(this)">
                    Balas
                </button>
            </div>
        </div>

        <!-- Recursively include nested replies -->
        @include('includes.comment_replies', ['replies' => $reply->replies])
    @endforeach
@endif

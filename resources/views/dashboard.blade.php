<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <form action="{{ route('post.store') }}" method="post">
        @csrf
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 flex flex-col gap-3">
                        <span class="text-gray-900 dark:text-gray-100 mx-auto">Forum Discussion</span>
                        <div>
                            <label for="Title"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" id="title" name="title"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Title" required>
                        </div>
                        <div>
                            <label for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="message" rows="4" name="description"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <div class="ml-auto">
                            <button type="submit"
                                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>

    @foreach ($posts as $post)
        <div class="thread-discussion max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 flex flex-col">
                    <div class="flex gap-4">
                        <img class="w-10 h-10 my-auto rounded-full" src="{{ asset('assets/img/user-test.jpg') }}"
                            alt="Rounded avatar">
                        <div class="flex flex-col gap-1">
                            <span class="my-auto text-sm font-bold text-black">{{ $post->title }}</span>
                            <span
                                class="my-auto text-[14px] font-light text-black">{{ $post->user->first_name . ' ' . $post->user->last_name }}
                                -
                                {{ $post->created_at }}</span>
                        </div>
                    </div>
                    <p class="py-4 text-[14px] font-light text-black">{{ $post->description }}</p>
                    <div class="flex justify-end items-end gap-3">
                        <form action="{{ route('post.destroy', $post->id) }}" method="post" class="relative top-6">
                            @csrf
                            @method('DELETE')
                            <button type="submit"
                                class="w-20 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                            <a class="reply-link cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                data-post-id="{{ $post->id }}">Reply</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endforeach

</x-app-layout>

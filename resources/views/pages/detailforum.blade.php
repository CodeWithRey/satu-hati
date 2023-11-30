<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" onclick="history.back()"
                class="flex items-center space-x-10 rtl:space-x-reverse cursor-pointer">
                <i class="fas fa-arrow-left text-xl"></i>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Detail Forum
                    Diskusi</span>
            </a>
        </div>
    </nav>

    <section class="bg-white py-8 mt-10 mx-auto">
        <div class="w-11/12 mx-auto">

            <!-- Komentar-komentar -->
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                <!-- Card Komentar -->
                <div class="bg-white p-4 rounded-lg shadow-md w-full">
                    <!-- Foto Profile dan Nickname -->
                    <div class="flex items-center mb-4">
                        <img src="path/to/profile-picture.jpg" alt="Profile Picture" class="w-8 h-8 rounded-full mr-2">
                        <span class="text-black font-semibold">Nickname User</span>
                    </div>
                    <!-- Judul Postingan -->
                    <h2 class="text-lg font-semibold mb-2">Judul Postingan</h2>
                    <!-- Deskripsi Postingan -->
                    <p class="text-gray-600 mb-4">Deskripsi Postingan Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                    <!-- Gambar Postingan -->
                    <img src="https://o-cdn-cas.sirclocdn.com/parenting/images/tipe-tipe-pelecehan-seksual-yan.width-800.jpegquality-80.jpg"
                        alt="Posting Image" class="w-80 h-auto mb-4 rounded-md">
                    <!-- Tombol Like dan Jumlah Like -->
                    <div class="flex items-center text-gray-500 mb-2">
                        <button class="mr-2">
                            <i class="fas fa-thumbs-up text-lg"></i>
                        </button>
                        <span class="mr-5">10 Likes</span>
                        <span class="mr-5"><i class="fas fa-comment text-lg"></i> 5 Komentar</span>
                    </div>

                </div>


                <!-- Card Komentar (Tambahkan lebih banyak card sesuai kebutuhan) -->
                <!-- ... -->
            </div>
        </div>
    </section>

</body>

</html>

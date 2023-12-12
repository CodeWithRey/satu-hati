<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>419 - Page Expired</title>
    @vite(['resources/css/app.css'])
</head>

<body class="bg-white h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-gray-500 text-3xl font-bold mb-4">Halaman Kadaluwarsa</h1>
        <h1 class="text-[#fcc42adc] text-7xl font-extrabold">419</h1>
        <img class="h-72 w-auto mx-auto rounded-lg"src="{{ asset('assets/image-errors/419.gif') }}" alt="" />
        <p class="text-2xl text-gray-500 pb-12">Maaf, Anda telah mengakses halaman kadaluwarsa yang tidak tersedia Lagi</p>
        <a href="{{ route('home') }}"
            class="bg-dy rounded hover:bg-dy-dark transition duration-300 lg:w-auto w-11/12 text-center py-3 px-8 text-white font-bold">
            Kembali ke halaman utama
        </a>
    </div>
</body>

</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Not Found</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-gray-500 text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
        <img class="h-72 w-auto mx-auto rounded-lg"src="{{ asset('assets/image-errors/404.gif') }}" alt="" />
        <p class="text-2xl text-gray-500">Oops! Halaman yang Anda minta tidak dapat ditemukan</p>
    </div>
</body>
</html>


{{-- Ini buat mencoba tampilan 500|server error --}}
{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>500 - Server Error</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-gray-500 text-3xl font-bold mb-4">Kesalahan Pada Server</h1>
        <img class="h-72 w-auto mx-auto rounded-lg"src="{{ asset('assets/image-errors/500.gif') }}" alt="" />
        <p class="text-2xl text-gray-500">Maaf! Terdapat kesalahan pada internal server saat memuat halaman yang diminta</p>
    </div>
</body>
</html> --}}


{{-- ini buat nyoba tampilan 419|page expired --}}
{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>419 - Page Expired</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-gray-500 text-3xl font-bold mb-4">Halaman Kadaluwarsa</h1>
        <h1 class="text-[#fcc42adc] text-7xl font-extrabold">419</h1>
        <img class="h-72 w-auto mx-auto rounded-lg"src="{{ asset('assets/image-errors/419.gif') }}" alt="" />
        <p class="text-2xl text-gray-500">Maaf, Anda telah mengakses halaman kadaluwarsa yang tidak tersedia Lagi</p>
    </div>
</body>
</html>
 --}}

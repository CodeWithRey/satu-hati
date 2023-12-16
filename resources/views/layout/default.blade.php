<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Satu Hati | Bersama Lawan Pelecehan')</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css" />
    <meta name="dicoding:email" content="rizkypratama471@gmail.com">
    {{-- Styles --}}
    @include('includes.css.styles')
</head>

<body>
    @include('sweetalert::alert')
    <header class="@yield('showNavbar', 'block')">
        @include('includes.navbar')
    </header>

    <main>
        @yield('content')
    </main>



    <footer class="bg-white dark:bg-gray-900 @yield('showFooter', 'block')">
        @include('includes.footer')
    </footer>

    {{-- Script --}}
    @include('includes.js.script')
    @stack('scripts')
</body>

</html>

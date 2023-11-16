<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    {{-- Styles --}}
    @include('includes.css.styles')
</head>

<body>
    <header>
        @include('includes.navbar')
    </header>


    <main>
        @yield('content')
    </main>


    <footer>
        @include('includes.footer')
    </footer>

    {{-- Script --}}
    @include('includes.js.script')
    @stack('scripts')
</body>

</html>
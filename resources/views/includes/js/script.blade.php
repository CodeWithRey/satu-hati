<script src="{{ asset('assets/js/flowbite.min.js') }}"></script>
@vite('resources/js/app.js')
{{-- <script src="{{ asset('assets/js/app-aa379cfa.js') }}"></script> --}}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
    integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/venobox/2.0.9/venobox.min.js"
    integrity="sha512-uLe5mbCw7v62Mzid8/z9alKnxzqxRjKgludy8jdnp6zcHei0Ihrss3CtxpkiX6CSaAyaMVkTpFBeet9EYgGkjA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script>
    function scrollToTarget(element, offset = 200) {
        var headerOffset = offset;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
</script>

{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')
@section('title', 'Satu Hati | Tentang Kami')

{{-- area konten yang ada pada layout default --}}
@section('content')
    <section class="min-h-[100vh] flex items-center justify-center py-16">
        <div class="grid md:grid-cols-2 grid-cols-1 p-4 place-items-stretch pt-10">
            <img class=" md:block hidden object-contain h-full mx-auto place-items-center"
                src="{{ asset('assets/images/about.png') }}" alt="">
            <div class="flex flex-col gap-4 w-11/12 mx-auto place-content-center">
                <h2 class="text-center md:text-start text-3xl font-bold text-dy items-center">Tentang Kami</h2>
                <img class="md:hidden object-contain w-96 place-items-center mx-auto"
                    src="{{ asset('assets/images/about.png') }}" alt="">
                <p class="text-start text-gray-600 text-xl font-semibold md:mt-0 mt-6">Selamat Datang di SatuHati!</p>
                <p class="text-start text-gray-600 text-xl">
                    Kami tim yang berkomitmen mengatasi perbedaan sosial dan stigma dalam penanganan pelecehan seksual di
                    Indonesia. Fokus pada edukasi dan diskusi, SatuHati bertujuan meningkatkan kesadaran, menghilangkan
                    stigma, dan memberikan dukungan kepada korban. Bergabunglah dalam membangun komunitas yang kuat,
                    menciptakan lingkungan yang aman.
                </p>
                <span class="font-bold text-2xl flex items-center">
                    <span class="text-dy flex items-center gap-2">
                        <img class="w-12" src="{{ asset('assets/images/logo-no-text.png') }}" alt="">
                        SatuHati
                    </span>
                    - Bersama Lawan Pelecehan Seksual!</span>
            </div>
        </div>
    </section>
    </section>
    <section class="p-16 bg-[#FFEAB3]">
        <div class="flex flex-col items-center justify-center h-full pb-4 ">
            <h1 class="font-extrabold tracking-tight leading-none text-black text-4xl md:text-4xl text-left ">Tim Kami</h1>
        </div>
        <div class=" grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 place-items-center w-11/12 mx-auto">
            <div class="flex flex-col justify-start max-w-sm bg-transparant place-content-center">
                <a href="https://www.linkedin.com/in/marcellinojg/">
                    <img class="rounded-t-lg h-48 w-auto mx-auto " src="{{ asset('assets/images/marcel2.png') }}"
                        alt="" />
                </a>
                <div class="p-5 text-center">
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Back-End Developer</p>
                    <a href="#">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Marcellino Julian
                            Gozal</h5>
                    </a>
                </div>
            </div>

            <div class="flex flex-col justify-start max-w-sm bg-transparant place-content-center">
                <a href="https://www.linkedin.com/in/junia-vitasari-1918a8252/">
                    <img class="rounded-t-lg h-48 w-auto mx-auto " src="{{ asset('assets/images/jun2.png') }}"
                        alt="" />
                </a>
                <div class="p-5 text-center">
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Front-End Developer</p>
                    <a href="#">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Junia Vitasari</h5>
                    </a>


                </div>
            </div>

            <div class="flex flex-col justify-start max-w-sm bg-transparant place-content-center ">
                <a href="https://www.linkedin.com/in/reynaldi-rizky-pratama/">
                    <img class="rounded-t-lg h-48 w-auto mx-auto " src="{{ asset('assets/images/masrey.png') }}"
                        alt="" />
                </a>
                <div class="p-5 text-center">
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Back-End Developer</p>
                    <a href="#">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Reynaldi Rizky
                            Pratama</h5>
                    </a>


                </div>
            </div>

            <div class="flex flex-col justify-start max-w-sm bg-transparant place-content-center">
                <a href="https://www.linkedin.com/in/vicka-rizqia-b4505a222/">
                    <img class="rounded-t-lg h-48 w-auto mx-auto " src="{{ asset('assets/images/vicqa.png') }}"
                        alt="" />
                </a>
                <div class="p-5 text-center">
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Front-End Developer</p>
                    <a href="#">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Vicka Rizqia</h5>
                    </a>
                </div>
            </div>

            <div class="flex flex-col justify-start max-w-sm bg-transparant place-content-center">
                <a href="https://www.linkedin.com/in/arfan-astaraja-8b1b54221">
                    <img class="rounded-t-lg h-48 w-auto mx-auto " src="{{ asset('assets/images/arfan.png') }}"
                        alt="" />
                </a>
                <div class="p-5 text-center">
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Front-End Developer</p>
                    <a href="#">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Arfan Astaraja</h5>
                    </a>
                </div>
            </div>

        </div>
    </section>
@endsection


{{-- Menambahkan scripts pada stack --}}
@push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
@endpush

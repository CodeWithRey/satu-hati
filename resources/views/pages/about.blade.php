{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')

{{-- area konten yang ada pada layout default --}}
@section('content')
    <section>
        <div class="grid md:grid-cols-2 grid-cols-1 p-4 place-items-stretch pt-24">
            <img class=" md:block hidden object-contain w-96 mx-auto place-items-center"
                src="{{ asset('assets/images/about.png') }}" alt="">
            <div class="flex flex-col gap-6 p-16 place-content-center">
                <h2 class="text-start text-3xl font-bold text-orange-600 place-content-center">About Us</h2>
                <img class="md:hidden object-contain block w-96" src="{{ asset('assets/images/about.png') }}" alt="">
                <p class="text-start text-gray-600 text-xl font-semibold">Selamat Datang di SatuHati!</p>
                <p class="text-start text-gray-600 text-xl">
                    Kami adalah tim yang berkomitmen untuk mengatasi perbedaan perlakuan sosial dan stigma dalam penanganan
                    pelecehan seksual di Indonesia.
                    Berdasarkan data yang mengkhawatirkan, kami menaruh perhatian khusus pada pengalaman korban, baik
                    perempuan maupun laki-laki.
                    Dengan fokus pada edukasi dan forum diskusi, SatuHati bertujuan meningkatkan kesadaran masyarakat,
                    menghilangkan stigma, dan memberikan dukungan bagi para korban.
                    Bergabunglah dengan kami dalam membangun komunitas yang kuat dan menciptakan lingkungan yang aman bagi
                    semua individu.
                    Bersama-sama, mari wujudkan perubahan positif dalam penanganan pelecehan seksual di Indonesia. SatuHati
                    - Bersama Lawan Pelecehan Seksual!</p>
            </div>
        </div>
    </section>
    </section>
    <section class="p-16 bg-about">
        <div class="flex flex-col items-center justify-center h-full pb-4">
            <h1 class="font-extrabold tracking-tight leading-none text-black text-4xl md:text-4xl text-left">Our Team</h1>
        </div>
        <div class=" grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
            <div class="flex flex-col justify-start max-w-sm bg-transparant ">
                <a href="#">
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

            <div class="flex flex-col justify-start max-w-sm bg-transparant">
                <a href="#">
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

            <div class="flex flex-col justify-start max-w-sm bg-transparant ">
                <a href="#">
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

            <div class="flex flex-col justify-start max-w-sm bg-transparant ">
                <a href="#">
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

            <div class="flex flex-col justify-start max-w-sm bg-transparant ">
                <a href="#">
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

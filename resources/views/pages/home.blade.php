{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')

{{-- area konten yang ada pada layout default --}}
@section('content')
    <section
        class="bg-center bg-no-repeat min-h-[100vh] bg-cover bg-landing bg-blend-multiply relative flex items-center justify-center">
        <div class=" px-4 mx-auto max-w-screen-xl text-center grid md:grid-cols-2 grid-cols-1 place-items-center h-full">
            <div class="md:ml-4">
                <h1
                    class="py-1 mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#CB6A10] md:text-5xl lg:text-6xl text-left">
                    SatuHati</h1>
                <p class="mb-4 text-2xl font-semibold text-black text-left">“Bersama Lawan Pelecehan Seksual, Kita Adalah
                    Suara Perubahan dan Cahaya Keadilan”</p>
                <div class="py-7 flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0">
                    <a href="{{ route('forum') }}"
                        class="inline-flex gap-2 justify-center items-center py-3 px-5 text-base font-bold text-center text-white rounded-lg bg-dy hover:bg-dy-dark focus:ring-4 focus:ring-orange-300 dark:focus:ring-dy transition duration-300">
                        Forum Diskusi<i class="fa-solid fa-comments"></i>
                    </a>
                    <a href="{{ route('pengaduan') }}"
                        class="inline-flex gap-2 justify-center hover:text-white hover:bg-dy items-center py-3 px-5 sm:ms-4 text-base font-bold text-center text-dy rounded-lg border-2 border-dy focus:ring-4 focus:ring-orange-300 transition duration-300">
                        Pengaduan <i class="fa-solid fa-phone-volume"></i>
                    </a>
                </div>
            </div>
            <img src="{{ asset('assets/images/tangan.png') }}" alt=""
                class="lg:block hidden absolute right-0 h-full top-0">
            <img src="{{ asset('assets/images/orang.png') }}" alt="" class="md:block hidden">
        </div>
    </section>
    <section>
        <div class="flex items-center justify-center text-center lg:p-16 py-10 px-4">
            <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white lg:w-1/2 w-11/12">
                <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path
                        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p class="text-[#FF0000] font-bold text-3xl">PENGINGAT</p>
                <p class="text-black"><br> "Kamu bukanlah kesalahan! <br>
                    Kamu kuat, kamu berharga, dan aku di sini untuk mendukungmu."</p>
            </blockquote>
        </div>
    </section>
    <section class="pb-24">
        <div class="grid md:grid-cols-2 grid-cols-1 p-4 place-items-stretch lg:w-10/12 w-11/12 mx-auto">
            <div class="flex flex-col gap-6 place-content-center">
                <h2 class="md:text-start text-center text-3xl font-bold text-black place-content-center">Pelecehan Seksual
                    <span class="text-3xl font-bold text-[#CB6A10]">Secara Verbal</span>
                </h2>
                <img class="md:hidden object-contain block w-96 mx-auto" src="{{ asset('assets/images/verbal.png') }}"
                    alt="">
                <p class="text-start text-gray-600 text-xl ">Melibatkan penggunaan kata-kata atau komunikasi lisan
                    yang tidak pantas dengan unsur seksual. Ini termasuk komentar atau lelucon yang tidak diinginkan,
                    merendahkan, dan menciptakan rasa tidak aman.</p>
            </div>
            <img class=" md:block hidden object-contain w-96 mx-auto place-items-center"
                src="{{ asset('assets/images/verbal.png') }}" alt="">
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 p-4 place-items-stretch lg:w-10/12 w-11/12 mx-auto">
            <img class=" md:block hidden object-contain w-72 mx-auto place-items-center"
                src="{{ asset('assets/images/fisik.png') }}" alt="">
            <div class="flex flex-col gap-6 place-content-center">
                <h2 class="md:text-start text-center text-3xl font-bold text-black place-content-center">Pelecehan Seksual
                    <span class="text-3xl font-bold text-[#CB6A10]">Secara Fisik</span>
                </h2>
                <img class="md:hidden object-contain block w-72 mx-auto" src="{{ asset('assets/images/fisik.png') }}"
                    alt="">
                <p class="text-start text-gray-600 text-xl">Melibatkan kontak fisik yang tidak diinginkan dan bersifat
                    seksual
                    terhadap seseorang tanpa persetujuan mereka. Ini dapat mencakup berbagai jenis
                    tindakan yang merugikan dan tidak etis, seperti sentuhan yang tidak senonoh, pemaksaan seksual,
                    atau penyerangan fisik dengan unsur seksual.</p>
            </div>
        </div>

        <div class="grid md:grid-cols-2 grid-cols-1 p-4 place-items-stretch lg:w-10/12 w-11/12 mx-auto">
            <div class="flex flex-col gap-6 place-content-center">
                <h2 class="md:text-start text-center text-3xl font-bold text-black place-content-center">Pelecehan Seksual
                    <span class="text-3xl font-bold text-[#CB6A10]">Secara Non Fisik</span>
                </h2>
                <img class="md:hidden object-contain block w-96 mx-auto" src="{{ asset('assets/images/non-fisik.png') }}"
                    alt="">
                <p class="text-start text-gray-600 text-xl ">Melibatkan aspek-aspek non-fisik, seperti kata-kata, gambar,
                    atau tindakan yang
                    bersifat seksual dan dapat mengganggu atau merugikan seseorang. Ini mencakup berbagai bentuk perilaku
                    yang
                    merendahkan martabat atau membuat seseorang merasa tidak aman, tanpa melibatkan kontak fisik langsung.
                </p>
            </div>
            <img class=" md:block hidden object-contain w-96 mx-auto place-items-center"
                src="{{ asset('assets/images/non-fisik.png') }}" alt="">
        </div>


        <div class="grid md:grid-cols-2 grid-cols-1 p-4 place-items-stretch lg:w-10/12 w-11/12 mx-auto">
            <img class=" md:block hidden object-contain w-96 mx-auto place-items-center"
                src="{{ asset('assets/images/daring.png') }}" alt="">
            <div class="flex flex-col gap-6 place-content-center">
                <h2 class="md:text-start text-center text-3xl font-bold text-black place-content-center">Pelecehan Seksual
                    <span class="text-3xl font-bold text-[#CB6A10]">Secara Daring</span>
                </h2>
                <img class="md:hidden object-contain block w-96 mx-auto" src="{{ asset('assets/images/daring.png') }}"
                    alt="">
                <p class="text-start text-gray-600 text-xl">Melibatkan penggunaan platform online untuk menyampaikan pesan,
                    gambar, atau tindakan yang tidak diinginkan dan bersifat seksual, merugikan dan mengganggu kesejahteraan
                    individu yang terkena dampak.</p>
            </div>
        </div>

    </section>
    <section class="py-24 bg-landing2">
        <div class="flex flex-col items-center justify-center h-full pb-12">
            <h1 class="font-extrabold tracking-tight leading-none text-black text-3xl md:text-4xl lg:text-left text-center">
                Pemenuhan Hak Korban</h1>
            <h1
                class="font-extrabold tracking-tight leading-none text-[#FF0000] text-3xl md:text-4xl lg:text-left text-center">
                Pelecehan Seksual</h1>
        </div>
        <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 place-items-center w-11/12 mx-auto">
            <div
                class="flex flex-col justify-start max-w-sm bg-white border self-stretch border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg h-72 w-72 object-contain mx-auto "
                        src="{{ asset('assets/images/perlindungan.png') }}" alt="" />
                </a>
                <div class="p-5 text-center">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hak Prosedural</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Pendampingan, bantuan hukum, informasi
                        perkembangan perkara, akses dokumen</p>

                </div>
            </div>

            <div
                class="flex flex-col justify-start max-w-sm bg-white border self-stretch border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg h-72 w-72 object-contain mx-auto "
                        src="{{ asset('assets/images/kesehatan.png') }}" alt="" />
                </a>
                <div class="p-5 text-center">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Layanan Kesehatan
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bantuan medis, bantuan psikologis, akses
                        penguatan psikososial, dan pemeriksaan berkelanjutan.</p>

                </div>
            </div>

            <div
                class="flex flex-col justify-start max-w-sm bg-white border self-stretch border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg h-72 w-72 object-contain mx-auto "
                        src="{{ asset('assets/images/rumah.png') }}" alt="" />
                </a>
                <div class="p-5 text-center">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Perlindungan</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bebas dari ancaman dan intimidasi, bebas
                        diskriminasi serta sigma masyarakat.</p>

                </div>
            </div>

            <div
                class="flex flex-col justify-start max-w-sm bg-white border self-stretch border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg h-72 w-72 object-contain mx-auto "
                        src="{{ asset('assets/images/korban.png') }}" alt="" />
                </a>
                <div class="p-5 text-center">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rehabilitas Sosial
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bantuan medis, bantuan psikologis, akses
                        penguatan psikososial, dan pemeriksaan berkelanjutan.</p>
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

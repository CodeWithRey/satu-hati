{{-- Footer --}}



<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-center">
        <div class="mb-6 md:mb-0 flex items-center">
            <img class="h-16 me-3" src="{{ asset('assets/images/logo-no-text.png') }}" alt="SatuHati Logo" />
            <div class="flex flex-col">
                <p class=" text-2xl font-bold whitespace-nowrap  text-[#CB6A10]">SatuHati</p>
                <p class="  text-gray-500 dark:text-gray-400 font-normal w-3/2 ">SatuHati merupakan aplikasi untuk korban
                    pelecehan seksual dengan visi “Bersama Lawan Pelecehan Seksual, Kita Adalah Suara Perubahan dan
                    Cahaya Keadilan”</p>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-7 sm:gap-6 sm:grid-cols-3 px-8">
            <div class="px-8">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Fitur</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-normal">
                    <li class="mb-2">
                        <a href="{{ route('home') }}" class="">Beranda</a>
                    </li>
                    <li class="mb-2">
                        <a href="{{ route('forum') }}" class="">Forum Diskusi</a>
                    </li>
                    <li class="mb-2">
                        <a href="{{ route('forum') }}" class="">Pengaduan</a>
                    </li>
                    <li>
                        <a href="{{ route('about') }}" class="">Tentang</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Tentang Kami</h2>
                <p class="flex items-center  text-gray-500 dark:text-gray-400 font-">Hubungi kami jika terdapat kendala
                    saat menggunakan website satu hati.</p>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/"
                class="hover:underline">SatuHati</a>
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <i class="fa-brands fa-whatsapp w-4 h-4"></i>
                <span class="sr-only">Whatsapp page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                <span class="sr-only">Youtube page</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <i class="fa-brands fa-twitter w-4 h-4"></i>
                <span class="sr-only">Twitter page</span>
            </a>
        </div>
    </div>
</div>

{{-- Menghubungkan home page dengan layout default  --}}
@extends('layout.default')

{{-- area konten yang ada pada layout default --}}
@section('content')
    <section
        class="bg-center bg-no-repeat min-h-[100vh] pt-24 bg-cover bg-white bg-blend-multiply relative flex place-items-center justify-center">
        <div
            class="px-4 mx-auto max-w-screen-xl w-11/12 gap-8 text-center grid md:grid-cols-2 grid-cols-1 place-items-center h-full">
            <div class="mx-auto">
                <h1
                    class="py-1 mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#CB6A10] md:text-5xl lg:text-6xl text-left">
                    SatuHati</h1>
                <p class="mb-4 text-4xl font-bold text-black text-left">Apakah Anda ingin melakukan pengaduan?</p>

                <img src="{{ asset('assets/images/calling.png') }}" alt="icon-calling"
                    class="max-h-[250px] mx-auto md:hidden block">
                <div class="py-7  flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0">
                    <a href="https://wa.me/6285770010048"
                        class="inline-flex font- gap-2 justify-center items-center py-5 px-8 text-base font-bold text-center text-white rounded-lg bg-[#CB6A10] hover:bg-[#CB6A10] focus:ring-4 focus:ring-orange-300 dark:focus:ring-[#CB6A10] transition duration-300">
                        Pengaduan <i class="fa-solid fa-phone-volume"></i>
                    </a>
                </div>
            </div>
            <img src="{{ asset('assets/images/calling.png') }}" alt="icon-calling"
                class="max-h-[400px] mx-auto  md:block hidden">
        </div>
    </section>

    <section class="bg-center bg-no-repeat min-h-[100vh] bg-cover bg-white bg-blend-multiply relative">
        <p class="mx-4 pb-10 text-3xl  font-bold text-black text-center">6 Posko aduan yang dapat diakses</p>

        <div
            class="pb-24 place-items-center w-11/12 mx-auto gap-8 px-4 max-w-screen-xl text-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center h-full">
            <div
                class="max-w-sm h-full p-6 bg-[#FFEAB3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="w-48 h-48 mb-4 object-contain mx-auto " src="{{ asset('assets/images/sapa-129.png') }}"
                    alt="sapa-129">

                <h5 class="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">Call Center SAPA 129</h5>

                <p class="mb-3 font-normal text-black text-left">
                    Hubungi 129 untuk melakukan pengaduan. Call Center Sahabat Perempuan dan Anak 129 bertujuan mempermudah
                    akses bagi korban dalam melakukan pengaduan kasus kekerasan seksual, serta pendataan kasusnya.
            </div>

            <div
                class="max-w-sm h-full p-6 bg-[#FFEAB3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="w-48 h-48 mb-4 object-contain mx-auto " src="{{ asset('assets/images/komnas-perempuan.png') }}"
                    alt="logo-komnas-perempuan">

                <h5 class="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">Komnas Perempuan</h5>

                <p class="mb-3 font-normal text-black text-left">
                    Pelapor bisa membuat laporan ke Komnas Perempuan dengan mengirim berkas ke email komnas perempuan Selain
                    itu, bisa melapor langsung melalui media sosial resmi Komnas Perempuan.
            </div>

            <div
                class="max-w-sm h-full p-6 bg-[#FFEAB3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="w-48 h-48 mb-4 object-contain mx-auto " src="{{ asset('assets/images/komnas-ham.png') }}"
                    alt="logo-komnas-ham">

                <h5 class="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">Komnas HAM</h5>

                <p class="mb-3 font-normal text-black text-left">
                    Pelapor bisa mengirim berkasnya secara langsung ke alamat Komnas HAM. Pun dapat melalui aduan online,
                    dengan mengisi berkas pada laman komnas ham. Komnas HAM juga menerima layanan konsultasi melalui nomor
                    08111129129.
            </div>

            <div
                class="max-w-sm p-6 h-full bg-[#FFEAB3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="w-48 h-48 mb-4 object-contain mx-auto " src="{{ asset('assets/images/lpsk.png') }}"
                    alt="logo-lpsk">

                <h5 class="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">Lembaga Perlindungan Saksi
                    dan Korban (LPSK)</h5>

                <p class="mb-3 font-normal text-black text-left">
                    LPSK hadir untuk memastikan perlindungan dan hak saksi dan korban agar kejahatan bisa terungkap.
                    Pengajuan perlindungan ke LPSK dapat melalui call center di nomor 148, WhatsApp di nomor 085770010048,
                    dan melalui akun media sosial LPSK.
            </div>

            <div
                class="max-w-sm h-full p-6 bg-[#FFEAB3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="w-48 h-48 mb-4 object-contain mx-auto " src="{{ asset('assets/images/polri.png') }}"
                    alt="logo-polri">

                <h5 class="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">Kantor Polisi</h5>

                <p class="mb-3 font-normal text-black text-left">
                    Unit Pelayanan Perempuan dan Anak (UPPA) akan melayani korban ketika membuat laporan ke polisi. Jika
                    korban membutuhkan pemantauan atas proses pelaporannya dan butuh surat rekomendasi, maka Komnas
                    Perempuan akan mengeluarkan surat rekomendasi yang ditujukan ke kepolisian.
            </div>

            <div
                class="max-w-sm h-full p-6 bg-[#FFEAB3] border border-[#FFEAB3] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img class="w-48 h-48 mb-4 object-contain mx-auto" src="{{ asset('assets/images/logo-kemenpppa.png') }}"
                    alt="logo-kemenpppa">

                <h5 class="mb-2 text-xl font-semibold tracking-tight text-black dark:text-white">Kementerian Pemberdayaan
                    Perempuan dan Perlindungan Anak (KemenPPPA)</h5>

                <p class="mb-3 font-normal text-black text-left">
                    Jika anda mengalami, melihat, mendengar dan mengetahui tindak kekerasan pada perempuan dan anak hubungi
                    hotline SAPA 129 atau melalui whatsapp 08111-129-129.
            </div>
        </div>


    </section>
@endsection

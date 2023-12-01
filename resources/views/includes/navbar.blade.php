{{-- Navbar --}}
<nav class="fixed top-0 w-full z-20 bg-white border-gray-200 dark:bg-gray-900 floating-shadow-lg">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="{{ asset('assets/images/logo-sh.png') }}" class="h-10" alt="Flowbite Logo" />
            <span class="self-center text-2xl whitespace-nowrap text-orange-600 font-bold">SatuHati</span>
        </a>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            @auth
                <button type="button"
                    class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="{{ asset('assets/images/user_placeholder.png') }}"
                        alt="user photo">
                </button>

                <!-- Dropdown menu -->
                <div class="z-50 hidden my-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <span
                            class="block text-sm text-gray-900 dark:text-white">{{ Auth::user()->full_name }}</span>
                        <span
                            class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ Auth::user()->email }}</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="{{ route('profile.show', Auth::user()->id) }}"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                Profil</a>
                        </li>
                        <li>
                            <form action="{{ route('logout') }}" class="w-full" method="POST">
                                @csrf
                                <button type="submit"
                                    class="block px-4 w-full text-start py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Keluar <i class="ml-1 fa-solid fa-arrow-right-from-bracket"></i>
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            @endauth

            <button data-collapse-toggle="navbar-user" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            @guest
                <div class="lg:grid hidden grid-cols-2 gap-4">
                    <a href="{{ route('register') }}"
                        class="flex items-center justify-center bg-transparent hover:bg-orange-700 transition duration-300 text-orange-700 hover:text-white border-orange-700 hover:border-orange-700 border-2 py-2 px-5 font-bold rounded shadow-lg">
                        Register
                    </a>
                    <a href="{{ route('login') }}"
                        class="flex items-center justify-center bg-orange-700 hover:bg-orange-600 transition duration-300 text-white py-2 px-5 font-bold rounded shadow-lg">
                        Login
                    </a>
                </div>
            @endguest
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto" id="navbar-user">
            <ul
                class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="{{ route('home') }}"
                        class="block py-2 px-3 rounded {{ Route::is('home') ? 'navbar-link-active' : 'navbar-link-inactive' }}">Home</a>
                </li>
                <li>
                    <a href="{{ route('forum') }}"
                        class="block py-2 px-3 rounded {{ Route::is('forum') ? 'navbar-link-active' : 'navbar-link-inactive' }}">Forum
                        Diskusi</a>
                </li>
                <li>
                    <a href="{{ route('about') }}"
                        class="block py-2 px-3 rounded {{ Route::is('about') ? 'navbar-link-active' : 'navbar-link-inactive' }}">About
                        Us</a>
                </li>
                @guest
                    <div class="lg:hidden grid grid-cols-2 gap-4 mt-4">
                        <a href="{{ route('register') }}"
                            class="flex items-center justify-center bg-transparent hover:bg-orange-600 transition duration-300 text-orange-700 hover:text-white border-orange-700 hover:border-orange-600 border-2 py-2 px-5 font-bold rounded shadow-lg">
                            Register
                        </a>
                        <a href="{{ route('login') }}"
                            class="flex items-center justify-center bg-orange-700 hover:bg-orange-600 transition duration-300 text-white py-2 px-5 font-bold rounded shadow-lg">
                            Login
                        </a>
                    </div>
                @endguest
            </ul>
        </div>
    </div>
</nav>

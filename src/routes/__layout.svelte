<script context="module">
    /** @type {import('@sveltejs/kit').Load}*/
    export function load({page}) {
        return {
            props: {
                currentPage: page.path
            }
        }
    }
</script>

<script>
    import '../app.css';
    import DarkModeToggle from '$lib/darkModeToggle.svelte';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
import UserStateButton from '$lib/userStateButton.svelte';

    export let currentPage;
    export let showMobileMenu = false;

</script>

<link rel="stylesheet" href="https://cdn.pride.codes/css/bar_helpers.css">

<nav class="bg-green-200 transition  dark:bg-green-700 shadow-lg top-0 z-auto sticky">
    <div class="pride-strip"></div>
    <div class="max-w-6xl mx-auto px-2">
        <div class="flex justify-between">
            <div class="flex space-x-7">
                <div>
                    <a href="/" class="flex items-center py-2 px-2">
                        <img src="/favicon.ico" alt="Sanae, the logo for this site." class="h-8 w-8 mx-2" />
                        <span class="transition-colors text-gray-600 dark:text-white text-lg">sanae.soopy.moe</span>
                    </a>
                </div>

                <!--Navbar contents-->
                <div class="hidden sm:flex items-center space-x-1">
                    <a href="/" class="
                                       nav-item py-1 px-2 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                       text-black hover:bg-opacity-30 hover:bg-yellow-300 hover:text-black hover:border-yellow-600 active:border-sanae-dark-green
                                       dark:text-white dark:hover:bg-opacity-40 dark:hover:bg-yellow-300 dark:hover:border-yellow-400 dark:active:border-sanae-green
                                       {currentPage === "/" ? "border-yellow-600 dark:border-yellow-400 border-2" : ""} ">Home</a> <!--More bad code kekwg-->
                    <a href="/app/packages" class="
                                       nav-item py-1 px-2 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                       text-black hover:bg-opacity-40 hover:bg-pink-300 hover:text-black hover:border-pink-400 active:border-sanae-dark-green
                                       dark:text-white dark:hover:bg-opacity-60 dark:hover:bg-pink-600 dark:over:text-white dark:hover:border-pink-400 dark:active:border-sanae-green
                                       {currentPage === "/app/packages" ? "border-pink-400 dark:border-pink-400 border-2" : ""} ">Package Listing</a>
                    <a href="/about" class="
                                       nav-item py-1 px-2 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                       text-black hover:bg-opacity-40 hover:bg-blue-300 hover:text-black hover:border-blue-400 active:border-sanae-dark-green
                                       dark:text-white dark:hover:bg-opacity-60 dark:hover:bg-blue-700 dark:over:text-white dark:hover:border-blue-400 dark:active:border-sanae-green
                                       {currentPage === "/about" ? "border-blue-400 dark:border-blue-400 border-2" : ""} ">About</a>
                    <!-- <a href="/app/packages" class="py-1 px-2 text-black rounded border border-transparent border-pink-400 hover:bg-opacity-40 hover:bg-pink-300 hover:text-black hover:border-pink-400 active:border-pink-400">Temp</a> -->
                </div>
            </div>

            <div class="flex items-center md:gap-x-3">
                <UserStateButton currentPage/>
                <DarkModeToggle />
                <div class="md:hidden flex items-center ml-5">
                    <button class="outline-none menu-button w-6 h-6"><Fa icon={faBars}/></button>
                </div>
            </div>
        </div>
    </div>

    <div class="hidden menu">

    </div>
</nav>

<slot></slot>

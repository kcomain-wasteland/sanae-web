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
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faBars } from '@fortawesome/free-solid-svg-icons'

    export let showMobileMenu = false;

</script>

<link rel="stylesheet" href="https://cdn.pride.codes/css/bar_helpers.css">

<nav class="bg-green-200 transition duration-300 dark:bg-green-700 shadow-lg top-0 z-auto sticky">
    <div class="pride-strip"></div>
    <div class="max-w-6xl mx-auto px-2">
        <div class="flex justify-between">
            <div class="flex space-x-7">
                <div>
                    <a href="/" class="flex items-center py-2 px-2">
                        <img src="/favicon.ico" alt="Sanae, the logo for this site." class="h-8 w-8 mx-2" />
                        <span class="hidden md:block transition-colors text-gray-600 dark:text-white text-lg">sanae.soopy.moe</span>
                    </a>
                </div>

                <!--Navbar contents-->
                <div class="hidden sm:flex items-center space-x-1">
                    <a href="/" class="
                                       nav-item py-1 px-2 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                       text-black hover:bg-opacity-30 hover:bg-yellow-300 hover:text-black hover:border-yellow-500 active:border-sanae-dark-green
                                       dark:text-white dark:hover:bg-opacity-40 dark:hover:bg-gray-300 dark:hover:border-gray-500 dark:active:border-sanae-green">Home</a>
                    <a href="/app/packages" class="
                                       nav-item py-1 px-2 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                       text-black hover:bg-opacity-40 hover:bg-pink-300 hover:text-black hover:border-pink-400 active:border-sanae-dark-green
                                       dark:text-white dark:hover:bg-opacity-60 dark:hover:bg-pink-600 dark:over:text-white dark:hover:border-pink-400 dark:active:border-sanae-green">Package Listing</a>
                    <a href="/about" class="
                                       nav-item py-1 px-2 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                       text-black hover:bg-opacity-40 hover:bg-blue-300 hover:text-black hover:border-blue-400 active:border-sanae-dark-green
                                       dark:text-white dark:hover:bg-opacity-60 dark:hover:bg-blue-700 dark:over:text-white dark:hover:border-blue-400 dark:active:border-sanae-green">About</a>
                    <!-- <a href="/app/packages" class="py-1 px-2 text-black rounded border border-transparent border-pink-400 hover:bg-opacity-40 hover:bg-pink-300 hover:text-black hover:border-pink-400 active:border-pink-400">Temp</a> -->
                </div>
            </div>

            <div class="hidden sm:flex items-center space-x-3">
                <a href="/login" class="nav-item py-1 px-3 rounded border border-transparent hover:no-underline dark:hover:no-underline
                                      text-black bg-blue-300 hover:bg-opacity-20 hover:text-black hover:border-blue-600
                                      dark:text-white dark:bg-blue-500 dark:hover:text-white dark:hover:border-blue-200">Login</a>
                <DarkModeToggle />
            </div>

        </div>
    </div>
</nav>

<slot></slot>

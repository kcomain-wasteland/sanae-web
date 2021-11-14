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
</script>

<link rel="stylesheet" href="https://cdn.pride.codes/css/bar_helpers.css">

<nav class="bg-green-200 dark:bg-green-700 shadow-lg top-0 z-auto sticky">
	<div class="pride-strip"></div>
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<div>
					<a href="/" class="flex items-center py-2 px-2 rounded">
						<img src="/favicon.ico" alt="Sanae, the logo for this site." class="h-8 w-8 mx-2" />
						<span class="hidden md:block text-gray-600 text-lg">sanae.soopy.moe</span>
					</a>
				</div>

				<!--Navbar contents-->
				<div class="hidden sm:flex items-center space-x-1">
					<a href="/" class="py-1 px-2 text-black rounded border border-transparent hover:bg-opacity-30 hover:bg-gray-400 hover:text-black hover:border-black active:border-black">Home</a>
					<a href="/app/packages" class="py-1 px-2 text-black rounded border border-transparent hover:bg-opacity-40 hover:bg-pink-300 hover:text-black hover:border-pink-400 active:border-pink-400">Package Listing</a>
					<!-- <a href="/app/packages" class="py-1 px-2 text-black rounded border border-transparent border-pink-400 hover:bg-opacity-40 hover:bg-pink-300 hover:text-black hover:border-pink-400 active:border-pink-400">Temp</a> -->
				</div>
			</div>

			<div class="flex items-center space-x-3">
				<a href="/login" class="py-1 px-3 text-black bg-blue-300 rounded border border-transparent hover:bg-opacity-20 hover:text-black hover:border-blue-600">Login</a>
			</div>

		</div>
	</div>
</nav>
<slot />

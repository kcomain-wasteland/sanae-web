<script>
	export let dorkMode = false;

	function toggleDorkMode() {
		const svelObject = document.getElementsByTagName('html')[0];
		dorkMode = !dorkMode;
		svelObject.classList.toggle('dark');
	}
</script>

<svelte:head>
	<title>Home - Sanae</title>
</svelte:head>

<div class="container w-screen h-screen my-5 mx-20">
	<h1 class="text-2xl">sanae.soopy.moe</h1>
	<div class="flex flex-col my-5">
		<div>
			<a href="/word">word</a>
			<a href="/extremely-long-word" class="underline">Extremely long page</a>
		</div>

		<div>
			<button
				on:click={toggleDorkMode}
				class="flex-grow-0 rounded border-2 border-transparent transition-colors p-2
                bg-blue-300 text-black hover:border-blue-500
                dark:bg-blue-800 dark:text-white dark:hover:border-blue-400"
			>
				Switch to {dorkMode ? 'flashbang' : 'dork'} mode
			</button>
		</div>
	</div>
</div>

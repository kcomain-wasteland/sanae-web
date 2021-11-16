<script>
	const svelObject = document.getElementById('svelte');
	export let dorkMode = false;
	function toggleDorkMode() {
		dorkMode = !dorkMode;
		svelObject.classList.toggle('dark');
	}
</script>

<svelte:head>
	<title>Home - Sanae</title>
</svelte:head>

<div class="container my-5 mx-20">
	<h1 class="text-2xl">sanae.soopy.moe</h1>
	<a href="/word">word</a>
	<a href="/extremely-long-word" class="underline">Extremely long page</a>

	<button
		on:click={toggleDorkMode}
		class="rounded border-2 border-transparent transition-colors p-2
                bg-blue-300 text-black hover:border-blue-500
                dark:bg-blue-800 dark:text-white dark:hover:border-blue-400"
	>
		Switch to {dorkMode ? 'dork' : 'flashbang'} mode
	</button>
</div>

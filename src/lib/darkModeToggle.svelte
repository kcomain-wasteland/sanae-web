<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
	import { onMount } from 'svelte';

	function toggleDorkMode() {
		console.log('Toggling dark mode');
		const svelObject = document.getElementsByTagName('html')[0];
		dorkMode = !dorkMode;
		svelObject.classList.toggle('dark');
	}
	
	let getDorkMode = false;

	onMount(() => {
		if (document) {
			let baseElement = document.getElementsByTagName('html')[0];
			getDorkMode = baseElement.classList.contains('dark')
			console.log(`Current mode gotten from html: ${getDorkMode ? 'dark' : 'unspecified'}`)
		}
	})

	export let dorkMode = getDorkMode;
</script>

<button
	on:click={toggleDorkMode}
	class="hidden sm:inline flex-grow-0 flex-row rounded border-2 border-transparent transition-colors p-2
                bg-blue-300 text-black hover:border-blue-500
                dark:bg-blue-700 dark:text-white dark:hover:border-blue-400">
	{#key dorkMode}
			<Fa icon={dorkMode ? faSun : faMoon} />
	{/key}
</button>

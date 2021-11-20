<script>
	import { fly } from 'svelte/transition';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

	function toggleDorkMode() {
		console.log('Toggling dark mode');
		const svelObject = document.getElementsByTagName('html')[0];
		dorkMode = !dorkMode;
		svelObject.classList.toggle('dark');
	}

	export let dorkMode = false;
</script>

<button
	on:click={toggleDorkMode}
	class="flex-grow-0 flex-row rounded border-2 border-transparent transition-colors p-2
                bg-blue-300 text-black hover:border-blue-500
                dark:bg-blue-700 dark:text-white dark:hover:border-blue-400"
>
	{#key dorkMode}
			<Fa icon={dorkMode ? faSun : faMoon} />
	{/key}
</button>

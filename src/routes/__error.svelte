<script context="module">
    
    /** @type {import('@sveltejs/kit').ErrorLoad}*/
    export function load({error, status}) {
        return {
            props: {
                error: error,
                status: status
            }
        }
    }
</script>

<script>
export let status;
export let error;
export let balls = `${error.name}: ${error.message}<br><pre>${error.stack}</pre>`;
// export let content = errorText;
</script>

<svelte:head>
    <title>Error - Sanae</title>
</svelte:head>

<div class="flex flex-col mx-auto justify-items-center items-center">
    <a href="/" class="w-1/2 sm:h-1/5 sm:w-1/5 pt-5 pb-3">
        <img src="/confused-sanae-46664363.jpg" alt="sanae, sanae confused, sanae not found, sanae the" 
             class="rounded-full transition hover:transform hover:-translate-y-2 hover:drop-shadow-md"/>
    </a>
    <h1 class="mx-auto text-6xl md:text-8xl text-pink-400">{status}</h1>
    {#if status === 404}
    <p class="mx-auto">Page not found.</p>
    {:else}
    <p class="mx-2 text-center">A wild <code class="text-red-400 hover:text-green-200">MISSINGNO</code> appeared! <br/> Please try again later.</p>
    <div class="text-gray-400 dark:text-gray-400 overflow-auto w-3/4 text-xs md:text-base">Error: {@html balls}</div>
    {/if}
    <br>
    <p class="py-3 text-xs md:text-lg">
        <a href="/" class="rounded p-3 bg-opacity-25 border border-transparent bg-pink-300 hover:bg-opacity-75 hover:border-gray-700 hover:text-gray-600">Return to home</a>
        <a href="#/" onclick="window.location.reload()" class="rounded p-3 bg-opacity-25 border border-transparent bg-green-300 hover:bg-opacity-75 hover:border-gray-700 hover:text-gray-600">Reload Page</a>
        {#if status >= 500}
        <a href="mailto:sanae@soopy.moe" class="rounded p-3 bg-opacity-25 border border-transparent bg-blue-300 hover:bg-opacity-75 hover:border-gray-700 hover:text-gray-600">Email @ 2 am</a>
        {/if}
    </p>
</div>

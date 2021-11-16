<script context="module">
    
    /** @type {import('@sveltejs/kit').ErrorLoad}*/
    export function load({error, status}) {
        return {
            props: {
                errorText: error,
                status: status
            }
        }
    }
</script>

<script>
export let status;
export let content;
</script>

{#if status === 404}
<div class="flex flex-col mx-auto my-11 justify-items-center items-center">
    <a href="/" class="h-1/5 w-1/5 py-5">
        <img src="/confused-sanae-46664363.jpg" alt="sanae, sanae confused, sanae not found, sanae the" 
             class="rounded-full  transition hover:transform hover:-translate-y-2 hover:drop-shadow-md"/>
    </a>
    <h1 class="mx-auto text-8xl text-pink-400">404</h1>
    <p class="mx-auto">Page not found.</p>
    <br>
    <p class="py-3"><a href="/" class="rounded p-3 bg-opacity-25 bg-gray-300 hover:bg-opacity-75 hover:border-gray-700 hover:border">Return to home?</a></p>
</div>
{:else}
<div>
    <h1>{status}</h1>
    <p>An unknown error occured!</p>
    <p>Try again later</p>
    <p class="text-gray-400 dark:text-gray-600">Error: {content}</p>
</div>
{/if}

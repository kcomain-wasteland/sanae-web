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
<div class="container mx-auto px-4">
    <h1 class="w-min mx-auto text-8xl text-pink-400">404</h1>
    <p class="w-max mx-auto">Page not found.</p>
    <br>
    <p class="w-max mx-auto"><a href="/" class="rounded p-2 bg-opacity-25 bg-gray-300 hover:bg-opacity-75 hover:border-gray-700 hover:border">Return to home?</a></p>
</div>
{:else}
<div>
    <h1>{status}</h1>
    <p>An unknown error occured!</p>
    <p>Try again later</p>
    <p class="text-gray-400 dark:text-gray-600">Error: {content}</p>
</div>
{/if}

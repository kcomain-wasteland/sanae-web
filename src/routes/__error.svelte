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
<div class="container ring-pink-200 mx-auto content-center">
    <h1>404</h1>
    <p>Page not found</p>
</div>
{:else}
<div>
    <h1>{status}</h1>
    <p>An unknown error occured!</p>
    <p>Try again later</p>
    <p class="text-gray-400 dark:text-gray-600">Error: {content}</p>
</div>
{/if}

<script context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad}*/
    export function load({error, status}) {
        return {
            props: {
                errorTitle: error,
                status: status
            }
        }
    }
</script>

<script>
export let errorTitle;
export let status;
</script>

<h1>Oops!</h1>
<div>
    <p>An error has occured while trying to render this page: <code>{errorTitle}</code></p>
    <p>Status: {status}</p>
    <br>
    <p>Please try again later, or return to <a href="/">home.</a></p>
</div>
<h1>Word</h1>

<script>
    let balls;
    $: balls = 'loading...'

    fetch('https://pronoundb.org/api/v1/lookup?platform=discord&id=397029587965575170')
        .then(response => response.json())
        .then(data => {
            balls = data.pronouns;
        });
</script>

<p>Pronouns: {balls}</p>
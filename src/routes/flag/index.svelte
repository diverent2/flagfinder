<script context="module">
  export async function preload(page, session) {
    return this.redirect(308, "/search");
  }
</script>

<svelte:head>
  <title>Redirecting | Prideflags.info</title>
</svelte:head>

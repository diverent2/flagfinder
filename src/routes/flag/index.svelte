<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`flag.json`)
      .then(res => res.json())
      .then(flags => {
        return { flags };
      });
  }
</script>

<script>
  export let flags;
</script>

<svelte:head>
  <title>Flag Details</title>
</svelte:head>

<h1>Flags</h1>

<ul>
  {#each flags as flag}
    <li>
      <a rel="prefetch" href="flag/{flag.id}">{flag.name}</a>
    </li>
  {/each}
</ul>

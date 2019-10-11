<script>
  import FlagCard from "./FlagCard.svelte";

  export let flags = [];
</script>

<style>
  .flag-results {
    margin: var(--spacing);
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: 100%; /*fix overflow*/
  }
</style>

<div class="flag-results">
  {#if flags.length}
    {#each flags as flag}
      <FlagCard {flag} />
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

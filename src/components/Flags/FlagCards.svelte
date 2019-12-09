<script>
  import FlagCard from "./FlagCard.svelte";

  export let flags = [];
</script>

<style>
  .flag-results {
    padding: var(--spacing);
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: 100%; /*fix overflow*/
    justify-content: center;

    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 420px) {
    .flag-results {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
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

<script>
  import FlagCard from "./FlagCard.svelte";
  import flags from "../data/flags";

  export let activeFilters = [];

  let filtedFlags;
  $: if (activeFilters) {
    filtedFlags = getFilteredFlags();
  }

  function getFilteredFlags() {
    if (!activeFilters.length) {
      return [];
    }
    const matchingFlags = flags.filter(flag => {
      return checkIfFlagMatchesColorFilters(flag, activeFilters);
    });
    return matchingFlags;
  }

  function checkIfFlagMatchesColorFilters(flag, colorFilters) {
    const flagColorIds = flag.colors;
    const areMatching = colorFilters.every(color => {
      return flagColorIds.indexOf(color) !== -1;
    });
    return areMatching;
  }
</script>

<style>
  .results {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
    grid-gap: var(--spacing-large);
    padding-top: var(--spacing-large);
    overflow: scroll;
  }
</style>

<div class="results">
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <FlagCard {flag} />
    {/each}
  {:else if !activeFilters.length}
    {#each flags as flag}
      <FlagCard {flag} />
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

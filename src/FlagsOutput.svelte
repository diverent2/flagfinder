<script>
  import Flag from "./Flag.svelte";
  import flags from "./data/flags";

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

<div class="results">
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <Flag name={flag.name} />
    {/each}
  {:else if !activeFilters.length}
    <p>Select some filters</p>
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

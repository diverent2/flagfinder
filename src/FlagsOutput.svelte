<script>
  import Flag from "./Flag.svelte";
  import flags from "./data/flags";

  export let activeFilters = [];

  let filtedFlags = [];
  $: filtedFlags;

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

  function handleClick(event) {
    filtedFlags = getFilteredFlags();
  }
</script>

<div class="results">
  <button on:click={handleClick}>HEY</button>
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <Flag name={flag.name} />
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

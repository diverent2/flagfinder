<script>
  import FlagCard from "./FlagCard.svelte";
  import flags from "../../data/_flags";

  let filtedFlags = [];
  filtedFlags = flags;
  let activeFilters = filtedFlags;
  /*
  export let activeColorFilters = [];
  export let activeCategoryFilters = [];
  $: activeFilters = [activeColorFilters, activeCategoryFilters];

  export let activeFlag;
  $: activeFlag;

  function setActiveFlag(event) {
    const newActiveFlag = event.detail.activeFlag;
    activeFlag = newActiveFlag;
  }

  let filtedFlags;
  $: if (activeFilters) {
    filtedFlags = getFilteredFlags();
    console.log(activeFilters);
  }

  function getFilteredFlags() {
    if (!activeFilters.length) {
      return [];
    }
    let matchingFlags = flags.filter(flag => {
      return (
        checkIfFlagMatchesCategoryFilters(flag, activeCategoryFilters) &&
        checkIfFlagMatchesColorFilters(flag, activeColorFilters)
      );
    });
    return matchingFlags;
  }

  function checkIfFlagMatchesColorFilters(flag, colorFilters) {
    const flagColorIds = flag.matches.colors;
    const areMatching = colorFilters.every(color => {
      return flagColorIds.indexOf(color) !== -1;
    });
    return areMatching;
  }

  function checkIfFlagMatchesCategoryFilters(flag, categoryFilters) {
    const flagCategory = flag.category;
    const areMatching = categoryFilters.every(category => {
      return flagCategory.indexOf(category) !== -1;
    });
    return areMatching;
  } */
</script>

<style>
  .flag-results {
    margin: var(--spacing);
    display: grid;
    grid-gap: var(--spacing);
  }
</style>

<div class="flag-results">
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

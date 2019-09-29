<script>
  import FlagCard from "./FlagCard.svelte";
  import flags from "../data/flags";

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
  }
</script>

<style>
  .results {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
    grid-gap: var(--spacing-large);
    padding: var(--spacing-large) var(--spacing);
    overflow: scroll;
  }
</style>

<div class="results">
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <FlagCard {flag} on:setActiveFlag={setActiveFlag} />
    {/each}
  {:else if !activeFilters.length}
    {#each flags as flag}
      <FlagCard {flag} on:setActiveFlag={setActiveFlag} />
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

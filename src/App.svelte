<script>
  /*Modules*/
  import ColorButton from "./ColorButton.svelte";
  import Flag from "./Flag.svelte";

  /*Data*/
  import filterColors from "./data/filter__colors";
  import flags from "./data/flags";

  $: filtedFlags = getFilteredFlags();

  function getFilteredFlags() {
    const matchingFlags = flags.filter(flag => {
      return checkIfFlagMatchesColorFilters(flag, filterColors);
    });
    return matchingFlags;
  }

  function checkIfFlagMatchesColorFilters(flag, colorFilters) {
    let colorIds = colorFilters.map(filter => {
      return filter.id;
    });

    let flagColorIds = flag.colors;
    const areMatching = colorIds.every(color => {
      return flagColorIds.indexOf(color) !== -1;
    });
    return areMatching;
    }
</script>

<style>
  :root {
    --spacing-small: 8px;
    --spacing: 16px;
    --spacing-large: 34px;

    --gry-light: lightgray;
    --gry: gray;

    --green-light: lightgreen;
    --green: green;
  }

  h1 {
    color: purple;
  }

  .colorButtons {
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--spacing-large));
    grid-template-rows: repeat(auto-fill, var(--spacing-large));
    grid-gap: var(--spacing-small);
  }
</style>

<h1>Flagfinder</h1>

<div class="colorButtons">
  {#each filterColors as cFilter}
    <ColorButton {...cFilter} />
  {/each}

</div>

<div class="results">
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <Flag name={flag.name} />
  {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

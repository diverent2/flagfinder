<script>
  /*Modules*/
  import Flag from "./Flag.svelte";

  /*Data*/
  import filtedFlags from "./data/flags";
  /*
  function getFilteredFlags() {
    console.log("update");
    const matchingFlags = flags.filter(flag => {
      return checkIfFlagMatchesColorFilters(flag, filterColors);
    });
    console.log("update3");
    return matchingFlags;
  }

  function checkIfFlagMatchesColorFilters(flag, colorFilters) {
    let activeColorFilters = document.querySelectorAll(".colorButton.selected");
    console.log(activeColorFilters);
    let colorIds = [];

    let flagColorIds = flag.colors;
    const areMatching = colorIds.every(color => {
      return flagColorIds.indexOf(color) !== -1;
    });
    return areMatching;
  }
  */

  /*
  let activeColorFilters = document.querySelectorAll(".colorButton.selected");

  $: activeColorFilters = console.log(activeColorFilters);

  /*() => {
    let activeColorFilters = document.querySelectorAll(".colorButton.selected");
    return activeColorFilters;
  };

  console.log(selectedColorButtons);
  /*

  $: filtedFlags = getFilteredFlags();

  function getFilteredFlags() {
    const matchingFlags = flags.filter(flag => {
      return checkIfFlagMatchesColorFilters(flag, filterColors);
    });
    return matchingFlags;
  }

  function checkIfFlagMatchesColorFilters(flag, colorFilters) {
    let activeColorFilters = document.querySelectorAll(".colorButton.selected");
    console.log(activeColorFilters);
    let colorIds = [];

    let flagColorIds = flag.colors;
    const areMatching = colorIds.every(color => {
      return flagColorIds.indexOf(color) !== -1;
    });
    return areMatching;
  }
  */
</script>

<div class="results">
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <Flag name={flag.name} />
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

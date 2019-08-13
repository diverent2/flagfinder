<script>
  /*Modules*/
  import ColorButton from "./ColorButton.svelte";
  import Flag from "./Flag.svelte";

  /*Data*/
  import filterColors from "./data/filter__colors";
  import flags from "./data/flags";

  let fillings = [];
  $: fillings;

  let filtedFlags = flags;

  function handleClick(event) {
    console.log(fillings);
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
</style>

<h1>Flagfinder</h1>

<button on:click={handleClick}>HEY</button>

<ColorButton {filterColors} bind:matches={fillings} />

<div class="results">
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <Flag name={flag.name} />
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

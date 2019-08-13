<script>
  /*Modules*/
  import ColorButtons from "./ColorButtons.svelte";
  import FlagsOutput from "./FlagsOutput.svelte";

  let filter = [];
  $: filter;

  function handleClick(event) {
    console.log(filter);
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

<ColorButtons bind:active={filter} />

<div class="results">
  {#if filtedFlags.length}
    {#each filtedFlags as flag}
      <Flag name={flag.name} />
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

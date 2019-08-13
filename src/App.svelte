<script>
  /*Modules*/
  import ColorButtons from "./ColorButtons.svelte";
  import FlagsOutput from "./FlagsOutput.svelte";

  let filter = [];
  $: filter;
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

<h1>Flagfinder 🌈</h1>

<ColorButtons bind:active={filter} />

<FlagsOutput activeFilters={filter} />

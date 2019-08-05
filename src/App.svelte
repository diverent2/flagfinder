<script>
  import ColorButton from "./ColorButton.svelte";
  export let name;

  const colorFilterOptions = [
    { id: "red", color: "red" },
    { id: "red", color: "red" },
    { id: "red", color: "red" },
    { id: "red", color: "red" }
  ];
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
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
</style>

<h1>Flagfinder</h1>

<div class="colorButtons">
  {#each colorFilterOptions as cButton}
    <ColorButton {...cButton} />
  {/each}

</div>

<div>Result goes here</div>

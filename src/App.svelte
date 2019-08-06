<script>
  import ColorButton from "./ColorButton.svelte";
  import Flag from "./Flag.svelte";
  export let name;

  const filterColors = [
    /*     { id: "white", color: "#FFFFFF" }, */
    {
      id: "red",
      color: "#FB0005"
    },
    {
      id: "orange",
      color: "#FB8B07"
    } /*
    { id: "yellow", color: "#FFE80A" },
    { id: "green", color: "#20A30C" },
    { id: "seegreen", color: "#1EC3C0" },
    { id: "lightblue", color: "#60CEFA" },
    { id: "blue", color: "#083CB3" },
    { id: "purple", color: "#C000DC" },
    { id: "deepurple", color: "#3F0097" },
    { id: "cyan", color: "#D40070" },
    { id: "darkviolet", color: "#9A4897" },
    { id: "lightpink", color: "#F3A5B8" },
    { id: "pink", color: "#FC008C" } */
  ];

  const flags = [
    {
      id: "gay",
      name: "gay pride flag",
      colors: ["red", "orange", "yellow", "green", "blue", "purple"]
    },
    {
      id: "bi",
      name: "bisexual pride flag",
      colors: ["cyan", "darkviolet", "deepurple"]
    },
    {
      id: "trans",
      name: "trans pride flag",
      colors: ["lightpink", "lightblue", "white"]
    },
    {
      id: "pan",
      name: "pansexual pride flag",
      colors: ["pink", "lightblue", "yellow"]
    }
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
  {#each flags as flag}
    <Flag id={flag.id} />
  {/each}

</div>

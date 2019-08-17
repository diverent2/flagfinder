<script>
  /*Styles*/
  import StylesFont from "./styles/StylesFont.svelte";
  /*Modules*/
  import ColorButtons from "./ColorButtons.svelte";
  import FlagCardsOutput from "./Flags/FlagCardsOutput.svelte";
  import Footer from "./Footer.svelte";

  let filter = [];
  $: filter;
</script>

<style>
  :root {
    --spacing-tiny: 4px;
    --spacing-small: 8px;
    --spacing: 16px;
    --spacing-large: 32px;

    --white: #fff;

    --black: #000;
    --black-light: rgba(0, 0, 0, 0.527);

    --gry-light: lightgray;
    --gry: gray;

    --green-light: lightgreen;
    --green: green;
  }

  h1 {
    color: purple;
  }
</style>

<h1>Prideflag Finder 🌈</h1>

<ColorButtons bind:active={filter} />

<FlagCardsOutput activeFilters={filter} />

<Footer />

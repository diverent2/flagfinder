<script>
  /*Styles*/
  import StylesFont from "./styles/StylesFont.svelte";
  /*Modules*/
  import Filter from "./Filter.svelte";
  import FlagCardsOutput from "./Flags/FlagCardsOutput.svelte";
  import FlagDetails from "./Flags/FlagDetails.svelte";
  import Footer from "./Footer.svelte";

  import flags from "./data/flags";

  let filter = [];
  $: filter;

  let activeFlag = flags[0];
  $: activeFlag;
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
</style>

<header>
  <h1 class="color--rainbow">Prideflag Finder</h1>
</header>

{#if activeFlag.length != 0}
  <FlagDetails {activeFlag} />
{/if}

<Filter bind:active={filter} />
<FlagCardsOutput activeFilters={filter} />

<Footer />

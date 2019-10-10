<script>
  import MainOptions from "../components/Filter/MainOptions.svelte";
  import FlagCards from "../components/Flags/FlagCards.svelte";

  import flags from "../data/_flags";

  let activeColorFilters = [];
  let searchterm = "";

  $: activeFilters = [activeColorFilters];

  let filtedFlags;

  $: searchresults_amount = filtedFlags.length;

  $: if (activeFilters.flat().length || searchterm.length) {
    filtedFlags = getFilteredFlags();
  } else {
    filtedFlags = flags;
  }

  function getFilteredFlags() {
    let matchingFlags;
    matchingFlags = flags.filter(flag => {
      return checkIfFlagMatchesColorFilters(flag, activeColorFilters);
    });
    matchingFlags = matchingFlags.filter(flag => {
      return checkIfFlagMatchesSearchRequest(flag, searchterm);
    });
    console.log("flagsV2", matchingFlags);
    return matchingFlags;
  }

  function checkIfFlagMatchesColorFilters(flag, colorFilters) {
    const flagColorsIds = flag.matches.colors;
    //check if flag matches any of the colors
    const areMatching = colorFilters.every(color => {
      return flagColorsIds.indexOf(color) !== -1;
    });
    return areMatching; //true or false
  }

  function checkIfFlagMatchesSearchRequest(flag, searchterm) {
    const { name, description, origin, props } = flag;
    const { firstAppearance, timeframe } = origin;
    const colors = [];
    props.colors.forEach(color => {
      colors.push(color.meaning);
    });

    const fieldsToCheck = [
      name,
      description,
      firstAppearance,
      timeframe,
      colors
    ].flat();

    const didMatch = fieldsToCheck.findIndex(field => {
      return field.includes(searchterm);
    });

    // return if match was found
    if (didMatch != -1) {
      return true;
    }
    console.log("nop");
  }
</script>

<style>
  h1 {
    display: none;
  }
</style>

<h1>Search</h1>

<MainOptions bind:activeColorFilters bind:searchterm {searchresults_amount} />

<FlagCards flags={filtedFlags} />

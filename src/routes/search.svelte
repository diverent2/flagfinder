<script>
  import MainOptions from "../components/Filter/MainOptions.svelte";
  import FlagCards from "../components/Flags/FlagCards.svelte";

  import flags from "../data/_flags";

  let activeColorFilters = [];
  let searchterm = "";

  $: activeFilters = [activeColorFilters, searchterm];

  let filtedFlags;

  $: searchresults_amount = filtedFlags.length;

  $: if (activeFilters.flat().length) {
    console.log("change", activeFilters.flat().length);
    filtedFlags = getFilteredFlags();
    console.log(activeFilters);
    console.log("search", searchterm);
  } else {
    console.log("reset");
    filtedFlags = flags;
  }

  function getFilteredFlags() {
    let matchingFlags;
    matchingFlags = flags.filter(flag => {
      return checkIfFlagMatchesColorFilters(flag, activeColorFilters);
    });
    console.log("flags", matchingFlags);
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
    const fieldsToCheck = [];

    const fieldToCheck = flag.description;

    if (fieldToCheck.includes(searchterm)) {
      return true;
    }
    return false;
  }

  /*
  
  function getFilteredFlags() {
    console.log("lenght", activeFilters.length);
    if (!activeFilters.length) {
      return []; //return empty
    }
    const matchingFlags = flags.filter(flag => {
      return checkIfFlagMatchesColorFilters(flag, activeColorFilters);
    });
    console.log("flags", matchingFlags);
    return matchingFlags;
  }
  */
</script>

<style>
  h1 {
    display: none;
  }
</style>

<h1>Search</h1>

<MainOptions bind:activeColorFilters bind:searchterm {searchresults_amount} />

<FlagCards flags={filtedFlags} />

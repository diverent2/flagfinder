<script>
  import MainOptions from "../components/Filter/MainOptions.svelte";
  import FlagCards from "../components/Flags/FlagCards.svelte";
  import Footer from "../components/Footer.svelte";

  import flags from "../data/_flags";

  let activeColorFilters = [];
  let activeCategoryFilters = [];
  let searchterm = "";

  $: activeFilters = [activeColorFilters, activeCategoryFilters];

  let filtedFlags;

  $: searchresults_amount = filtedFlags.length;

  $: if (activeFilters.flat().length || searchterm.length) {
    filtedFlags = getFilteredFlags();
  } else {
    filtedFlags = flags;
  }

  function getFilteredFlags() {
    let matchingFlags = flags;
    if (activeColorFilters.length) {
      matchingFlags = flags.filter(flag => {
        return checkIfFlagMatchesColorFilters(flag, activeColorFilters);
      });
    }
    if (searchterm.length) {
      matchingFlags = matchingFlags.filter(flag => {
        return checkIfFlagMatchesSearchRequest(flag, searchterm);
      });
    }
    if (activeCategoryFilters.length) {
      matchingFlags = matchingFlags.filter(flag => {
        return checkIfFlagMatchesCategories(flag, activeCategoryFilters);
      });
    }
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

  function checkIfFlagMatchesCategories(flag, categories) {
    const flagCategory = flag.category;
    return categories.includes(flagCategory);
  }

  function checkIfFlagMatchesSearchRequest(flag, searchterm) {
    const { name, description, origin, category, props } = flag;
    const { firstAppearance, timeframe } = origin;

    const colors = [];
    props.colors.forEach(_color => {
      const { name, hue, meaning, value } = _color;

      const color = [
        cleanValue(name),
        cleanValue(hue),
        cleanValue(meaning),
        cleanValue(value)
      ];

      colors.push(color);
    });

    const fieldsToCheck = [
      cleanValue(name),
      cleanValue(description),
      cleanValue(firstAppearance),
      cleanValue(category),
      colors.flat(),
      cleanValue(timeframe)
    ].flat();

    const didMatch = fieldsToCheck.findIndex(field => {
      const searchterm_cleaned = cleanValue(searchterm);
      return field.includes(searchterm_cleaned);
    });

    // return if match was found
    if (didMatch != -1) {
      return true;
    }
  }

  // solve case issues and spacing
  function cleanValue(val = "") {
    return val.toLowerCase().trim();
  }
</script>

<style>
  h1 {
    display: none;
  }
</style>

<svelte:head>
  <title>Search | Prideflags.info</title>
</svelte:head>

<h1>Search</h1>

<MainOptions
  bind:activeColorFilters
  bind:searchterm
  bind:activeCategoryFilters
  {searchresults_amount} />

<FlagCards flags={filtedFlags} />

<Footer />

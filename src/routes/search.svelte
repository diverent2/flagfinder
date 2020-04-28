<script>
  import { app_name, app_baseUrl } from "../data/global.js";

  import Metainfos from "../components/Helpers/Metainfos.svelte";
  import MainOptions from "../components/Filter/MainOptions.svelte";
  import FlagCards from "../components/Flags/FlagCards.svelte";
  import Navigation from "../components/Navigation/Navigation.svelte";

  import flags from "../data/_flags";

  const meta = {
    title: `Search | ${app_name}`,
    desc:
      "Search for a variety of LGBTQ*+ Prideflags 🌈 using its Colors, Categories or a Searchterm.",
    url: `${app_baseUrl}/search`,
    image: `${app_baseUrl}/socialcards/search.png`
  };

  // add valid keyword
  flags.forEach(flag => {
    flag.keywords.push("valid");
  });

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
    const areMatching = colorFilters.every(colorFilter => {
      return flagColorsIds.indexOf(colorFilter) !== -1;
    });
    return areMatching; //true or false
  }

  function checkIfFlagMatchesCategories(flag, categoriesFilter) {
    const flagCategories = flag.categories;
    return flagCategories.some(flagCategory => {
      return categoriesFilter.includes(flagCategory);
    });
  }

  function checkIfFlagMatchesSearchRequest(flag, searchterm) {
    const { name, keywords, description, origin, category, props } = flag;
    const { firstAppearance, timeframe } = origin;

    const colors = [];
    props.colors.forEach(_color => {
      const { name, hue, meaning, value } = _color;
      const color = [name, hue, meaning, value];
      colors.push(color);
    });

    const fieldsToCheck = [
      name,
      keywords,
      description,
      firstAppearance,
      category,
      colors.flat(),
      timeframe
    ].flat();

    const fieldsToCheck_cleaned = Array.from(fieldsToCheck, field => {
      return cleanValue(field);
    });

    const didMatch = fieldsToCheck_cleaned.findIndex(field => {
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

<Metainfos {...meta} />

<h1>Search</h1>

<Navigation />

<MainOptions
  bind:activeColorFilters
  bind:searchterm
  bind:activeCategoryFilters
  {searchresults_amount} />

<div class="container">

  <FlagCards flags={filtedFlags} />
</div>

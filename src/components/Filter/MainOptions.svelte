<script>
  import { searchterm, colorFilters, categoryFilters } from './../../data/stores/searchQuery';

  import Search from "./Search.svelte";
  import Icon from "./../Elements/Icon.svelte";
  import Filter, { clearFilter } from "./Filter.svelte";

  export let allowFilterReset = false;

  export let expanded = false;

  export let searchresults_amount = 0;

  function toggleExpand() {
    expanded = !expanded;
  }

  $: if (
    $searchterm.length ||
    $colorFilters.length ||
    $categoryFilters.length
  ) {
    allowFilterReset = true;
  } else {
    allowFilterReset = false;
  }

  function clearFilters(event) {
    searchterm.set("");
    categoryFilters.set([]);
    colorFilters.set([]);
    clearFilter();
  }

  function exendPerKeyDown(event) {
    if (event.code === "Space" || event.key === "Enter") {
      event.preventDefault();
      toggleExpand();
      document.querySelector("#search").focus();
    }
  }
</script>

<style lang="scss">
  @import "../../../styles/z-index";
  
  .options {
    position: sticky;
    top: 0;
    color: var(--white);
    text-transform: capitalize;
    z-index: $z-index-search-options;

    .main {
      padding: var(--spacing);
      background: var(--blue-dark-500);
    }

    .filter {
      margin-top: 0.5rem;
      visibility: hidden;
      opacity: 0;
      height: 0;
      transform: scale(0) translateY(-100%);
      transition: all 0.15s ease-in-out;
    }
  }

  .main_container {
    display: flex;
    justify-content: center;
    background: var(--blue-dark-500);

    > .main {
      width: 100%;
      height: 100%;
      max-width: 800px;
    }
  }

  .expandToggle {
    padding-bottom: var(--spacing);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    cursor: pointer;
    background: var(--blue-dark-500);
    transition: transform 0.2s ease;
    box-shadow: var(--box-shadow);

    .ico-arrow {
      display: flex;
      justify-content: center;
      height: var(--spacing);
      transition: transform 0.25s ease;
      animation: {
        name: call2action;
        duration: 5s;
        iteration-count: infinite;
        timing-function: ease-in-out;
        fill-mode: both;
      }
    }

    @keyframes call2action {
      0%,
      80% {
        transform: translateY(0);
      }
      85%,
      95% {
        transform: translateY(0.5rem);
      }
      90%,
      100% {
        transform: translateY(0rem);
      }
    }

    &:hover .ico-arrow {
      transform: translateY(0.5rem) scaleY(1.2);
    }
  }

  .options.expanded {
    .expandToggle .ico-arrow {
      transform: scaleY(-1) translateY(-0.5rem);
      animation-play-state: paused;
    }

    .expandToggle:hover .ico-arrow {
      transform: scaleY(-1);
    }

    .filter {
      opacity: 1;
      height: 100%;
      visibility: visible;
      transform: scale(1);
    }
  }

  .resultInfo {
    text-align: center;
    user-select: none;

    .resultInfo_amount {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    }
  }

  @media (--medium-up) and (--min-height) {
    .options {
      width: calc(100% - 140px);
      margin-left: 140px;
    }

    .main {
      padding: var(--spacing-large) var(--spacing-xlarge);
      margin-left: 3rem;
    }

    .expandToggle_inner {
      margin-left: 3rem;
    }
  }
</style>

<div class="options" class:expanded data-cy-filter-options data-cy-expanded={expanded}>

  <div class="main_container">
    <div class="main">
      <Search
        {allowFilterReset}
        on:clearFiltersEvent={clearFilters} />

      <div class="filter">
        <Filter />
      </div>
    </div>
  </div>

  <div
    class="expandToggle"
    aria-expanded={expanded}
    data-cy-search-filters-expand
    on:click={toggleExpand}
    on:keydown={exendPerKeyDown}
    tabindex="0">
    <div class="expandToggle_inner">
      <div class="resultInfo">
        <span>
          Your search has returned
          <span class="resultInfo_amount" data-cy-searchresults-number>
            {searchresults_amount}
          </span>
          results
        </span>
      </div>
      <div class="ico-arrow">
        <Icon icon="arrow-down" scale="var(--spacing)" aria="toggle filters" />
      </div>
    </div>
  </div>
</div>

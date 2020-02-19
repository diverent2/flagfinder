<script>
  import Search from "./Search.svelte";
  import Filter, { clearFilter } from "./Filter.svelte";

  export let allowFilterReset = false;

  export let activeColorFilters = [];
  $: activeColorFilters;

  export let activeCategoryFilters = [];
  $: activeCategoryFilters;

  export let searchterm = "";

  let expanded = false;

  export let searchresults_amount = 0;

  function toggleExpand() {
    expanded = !expanded;
  }

  $: if (
    searchterm.length ||
    activeColorFilters.length ||
    activeCategoryFilters.length
  ) {
    allowFilterReset = true;
  } else {
    allowFilterReset = false;
  }

  function clearFilters(event) {
    searchterm = "";
    activeCategoryFilters = [];
    activeColorFilters = [];
    clearFilter();
  }
</script>

<style lang="scss">
  .options {
    width: 100vw;
    position: sticky;
    top: 0;
    color: var(--white);

    z-index: 1;

    .filter {
      margin-top: 0.5rem;
      visibility: hidden;
      opacity: 0;
      height: 0;
      transform: scale(0);
      transition: all 0.2s ease-in-out;
    }
  }

  .options_main {
    background: var(--blue);
    padding-top: var(--spacing);
    padding-left: var(--spacing);
    padding-right: var(--spacing);
  }

  .options_expandToggle {
    padding-bottom: var(--spacing);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background: var(--blue);
    cursor: pointer;
    transition: transform 0.2s ease;

    .ico-arrow {
      display: block;
      height: var(--spacing);
      width: auto;
      margin: 0 auto;
      transition: transform 0.25s ease;
    }

    &:hover .ico-arrow {
      transform: translateY(0.5rem) scaleY(1.2);
    }
  }

  .options.expanded {
    .options_expandToggle {
      box-shadow: var(--box-shadow);

      .ico-arrow {
        transform: scaleY(-1) translateY(-0.5rem);
      }

      &:hover .ico-arrow {
        transform: scaleY(-1);
      }
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
    margin: 0;

    .resultInfo_amount {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 4px;
    }
  }
</style>

<div class="options" class:expanded>

  <div class="options_main">
    <Search
      bind:searchterm
      {allowFilterReset}
      on:clearFiltersEvent={clearFilters} />

    <div class="filter">
      <Filter bind:activeColorFilters bind:activeCategoryFilters />
    </div>
  </div>

  <div
    class="options_expandToggle"
    data-cy-search-filters-expand
    on:click={toggleExpand}>
    <p class="resultInfo">
      Your search has returned
      <span class="resultInfo_amount" data-cy-searchresults-number>
        {searchresults_amount}
      </span>
      results
    </p>
    <img
      class="ico-arrow"
      title="toggle more options"
      src="icons/arrow-down.svg"
      alt />
  </div>
</div>

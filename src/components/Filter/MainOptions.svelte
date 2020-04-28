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
    text-transform: capitalize;
    z-index: 1;

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

  .expandToggle {
    padding-bottom: var(--spacing);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    cursor: pointer;
    background: var(--blue-dark-500);
    transition: transform 0.2s ease;
    box-shadow: var(--box-shadow);

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
    .expandToggle .ico-arrow {
      transform: scaleY(-1) translateY(-0.5rem);
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

  @media (--medium-up) and (--min-height) {
    .options {
      width: calc(100vw - 180px);
      margin-left: 180px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 200px;
        height: 60%;
        top: 0;
        left: 0;
        background: var(--blue-dark-500);
        transform: translateX(-200px);
      }
    }

    .main {
      padding: var(--spacing-large) var(--spacing-xlarge);
    }
  }

  .resultInfo {
    text-align: center;
    user-select: none;

    .resultInfo_amount {
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 4px;
    }
  }
</style>

<div class="options" class:expanded>

  <div class="main">
    <Search
      bind:searchterm
      {allowFilterReset}
      on:clearFiltersEvent={clearFilters} />

    <div class="filter">
      <Filter bind:activeColorFilters bind:activeCategoryFilters />
    </div>
  </div>

  <div
    class="expandToggle"
    data-cy-search-filters-expand
    on:click={toggleExpand}>
    <div class="resultInfo">
      <span>
        Your search has returned
        <span class="resultInfo_amount" data-cy-searchresults-number>
          {searchresults_amount}
        </span>
        results
      </span>
    </div>
    <img
      class="ico-arrow"
      title="toggle more options"
      src="icons/arrow-down.svg"
      alt />
  </div>
</div>

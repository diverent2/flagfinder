<script>
  import Search from "./Search.svelte";
  import Filter from "./Filter.svelte";

  export let activeColorFilters = [];
  $: activeColorFilters;

  let expanded = false;
  export let searchresults_amount = 0;

  function toggleExpand() {
    expanded = !expanded;
  }
</script>

<style>
  .mainOptions {
    width: 100vw;
    position: sticky;
    top: 0;
    left: 0;
    padding: var(--spacing);
    color: var(--white);
    box-sizing: border-box;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background: var(--blue);
    z-index: 1;
    transition: height 0.3s ease;
  }

  .filter {
    opacity: 0;
    height: 0;
    visibility: hidden;
    transition: height 0.25s ease-in-out;
  }

  .mainOptions.expanded {
    box-shadow: var(--box-shadow);
  }

  .mainOptions.expanded .filter {
    opacity: 1;
    height: auto;
    visibility: visible;
  }

  .mainOptions__arrow {
    width: 100%;
    position: absolute;
    padding: 0.5rem 0;
    box-sizing: border-box;
    left: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 0.8;
    transition: transform 0.2s ease;
  }

  .mainOptions__arrow:hover .mainOptions__arrow--icon {
    transform: translateY(0.5rem) scaleY(1.2);
  }

  .mainOptions.expanded .mainOptions__arrow:hover .mainOptions__arrow--icon {
    transform: translateY(0.5rem);
  }

  .mainOptions__arrow--icon {
    height: var(--spacing);
    width: 100%;
    margin: 0 auto;
    will-change: transform;
    transition: transform 0.25s ease;
  }

  .mainOptions.expanded .mainOptions__arrow {
    transform: scaleY(-1);
  }

  .mainOptions__resultInfo {
    text-align: center;
    margin-top: 0;
  }
  .mainOptions__resultInfo--amount {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 4px;
  }
</style>

<div class="mainOptions" class:expanded>

  <Search />

  <div class="filter">
    <Filter bind:activeColorFilters />
  </div>

  <p class="mainOptions__resultInfo">
    Your search has returned
    <span class="mainOptions__resultInfo--amount">{searchresults_amount}</span>
    results
  </p>

  <div class="mainOptions__arrow" on:click={toggleExpand}>
    <img
      class="mainOptions__arrow--icon"
      title="extend options"
      src="icons/arrow-down.svg"
      alt />
  </div>
</div>

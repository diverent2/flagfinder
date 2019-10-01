<script>
  import Search from "../components/Search.svelte";
  import Filter from "../components/Filter.svelte";

  let expanded = false;
  let searched = true;

  let searchresults_amount = 10;

  function extendOptions() {
    expanded = true;
  }

  function minifyOptions() {
    expanded = false;
  }
</script>

<style>
  .mainOptions {
    width: 100vw;
    height: 6rem;
    padding: var(--spacing);
    position: relative;
    color: var(--white);
    box-sizing: border-box;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background: var(--blue);
    transition: height 0.3s ease;
  }

  .mainOptions.expanded {
    height: 10rem;
  }

  .mainOptions__arrow {
    width: 100%;
    position: absolute;
    padding-top: 1.5rem;
    box-sizing: border-box;
    left: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .mainOptions__arrow--icon {
    height: var(--spacing);
    width: 100%;
    margin: 0 auto;
  }

  .mainOptions.expanded .mainOptions__arrow {
    opacity: 0;
    cursor: default;
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

  {#if searched}
    <p class="mainOptions__resultInfo">
      Your search has returned
      <span class="mainOptions__resultInfo--amount">
        {searchresults_amount}
      </span>
      results
    </p>
  {/if}

  <div class="mainOptions__arrow" on:click={extendOptions}>
    <img
      class="mainOptions__arrow--icon"
      title="extend options"
      src="icons/arrow-down.svg"
      alt />
  </div>
</div>

<Filter />

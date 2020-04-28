<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let searchterm;
  export let allowFilterReset = false;
</script>

<style lang="scss">
  .searchbox {
    width: 100%;
    height: var(--spacing-xlarge);

    padding: var(--spacing-tiny);

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom-style: none;
    border-bottom-width: medium;
    border-bottom: 1px var(--white) solid;
  }

  .inputfield {
    color: var(--white);
    padding: 0 8px;
    flex-grow: 1;

    font-size: 1rem;
    border: none;
    background: transparent;

    overflow: hidden;
    text-overflow: ellipsis;

    &::placeholder {
      font-family: Saira, Helvetica Neue, sans-serif;
      color: var(--white);
      opacity: 0.7;
    }
  }

  .clearButton {
    transform: scale(0);
    width: var(--spacing);
    height: var(--spacing);
    opacity: 0;
    border-radius: 50%;
    cursor: pointer;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    &.visible {
      opacity: 0.8;
      border-radius: 50%;
      visibility: visible;
      transform: scale(1);
    }
  }
</style>

<div class="searchbox">
  <img
    class="search-icon"
    src="icons/search.svg"
    alt
    aria-hidden="true"
    height="24" />
  <input
    class="inputfield"
    bind:value={searchterm}
    id="search"
    name="search"
    autocomplete="off"
    placeholder="Searchterm goes here" />
  <img
    class="clearButton"
    class:visible={allowFilterReset}
    title="clear searchterm"
    src="icons/cross.svg"
    data-cy-search-reset-all
    on:click={() => dispatch('clearFiltersEvent')}
    alt />
</div>

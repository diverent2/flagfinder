<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let searchterm;
  export let allowFilterReset = false;
</script>

<style>
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
  .searchbox__inputfield {
    color: var(--white);
    padding: 0 8px;
    flex-grow: 1;

    font-size: 1rem;
    border: none;
    background: transparent;
  }

  .searchbox__inputfield::placeholder {
    font-family: Saira, Helvetica Neue, sans-serif;
    color: var(--white);
    opacity: 0.7;
  }

  .searchbox__delete {
    transform: scale(0);
    width: var(--spacing);
    height: var(--spacing);
    opacity: 0;
    border-radius: 50%;
    cursor: pointer;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
  .searchbox__delete.visible {
    opacity: 0.8;
    border-radius: 50%;
    visibility: visible;
    transform: scale(1);
  }
</style>

<div class="searchbox">
  <img
    class="searchbox__icon"
    src="icons/search.svg"
    alt
    aria-hidden="true"
    height="24" />
  <input
    class="searchbox__inputfield"
    bind:value={searchterm}
    id="search"
    name="search"
    placeholder="Searchterm goes here" />
  <img
    class="searchbox__delete"
    class:visible={allowFilterReset}
    title="clear searchterm"
    src="icons/cross.svg"
    on:click={() => dispatch('clearFiltersEvent')}
    alt />
</div>

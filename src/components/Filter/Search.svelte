<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "./../Elements/Icon.svelte";

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
    cursor: pointer;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    display: inline-flex;
    line-height: 1;

    &.visible {
      opacity: 0.8;
      visibility: visible;
      transform: scale(1);
    }
  }
</style>

<div class="searchbox">
  <Icon icon="search" scale="var(--spacing-large)" />
  <input
    class="inputfield"
    bind:value={searchterm}
    id="search"
    name="search"
    autocomplete="off"
    placeholder="Searchterm goes here" />
  <div
    class="clearButton"
    class:visible={allowFilterReset}
    title="clear searchterm"
    on:click={() => dispatch('clearFiltersEvent')}
    data-cy-search-reset-all>
    <Icon icon="cross" scale="1.3rem" />
  </div>
</div>

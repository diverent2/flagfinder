<script>
  /*Data*/
  import { filterColors, filterCategories } from "../../data/_filter";
  import ColorSpot from "../Elements/ColorSpot.svelte";

  export let activeColorFilters;
  $: activeColorFilters;

  export let activeCategoryFilters;
  $: activeCategoryFilters;

  function clearFilters() {
    for (const filter of filterColors) {
      filter.selected = false;
    };
    for (const filter of filterCategories) {
      filter.selected = false;
    };

    const filterButtons = document.querySelectorAll(".filter label.selected");
    filterButtons.forEach(filter => {
      filter.classList.remove("selected");
    });
  }
</script>

<style>
  fieldset {
    color: var(--white);
    margin: 0;
    border: none;
  }
  .filter {
    display: flex;
  }

  .filter-color {
    flex-grow: 3;
  }

  .colorButtons,
  .categoryButtons {
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--spacing-xlarge));
    grid-gap: 0.5rem;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .button__color,
  .button__category {
    position: relative;
  }

  .button {
    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    background: var(--white);
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    box-shadow: var(--box-shadow);
  }

  .button__color,
  .button__category {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-color 0.2s ease;
  }

  .buttonColor__checkmark {
    width: 1rem;
    height: 1.1rem;
    position: absolute;
    right: -4px;
    bottom: 0px;
    color: var(--green-light);
    transition: opacity 0.2s ease;
    opacity: 0;
  }

  .button__color.selected {
    border-color: var(--green-light);
  }

  .ico-category {
    width: 1rem;
    height: 1rem;
  }

  .button__color.selected .buttonColor__checkmark {
    opacity: 1;
  }

  .button:not(.selected) {
    border-color: var(--gry-light) !important;
  }

  .button__category:not(.selected) .ico-category {
    color: var(--gry-light) !important;
  }
</style>

<div class="filter">

  <fieldset class="filter-color">
    <legend>colors</legend>
    <div class="colorButtons">
      {#each filterColors as colorFilter}
        <label
          class="button button__color"
          title={colorFilter.id}
          class:selected={colorFilter.selected}>

          {#if (colorFilter.id === 'yellow') | (colorFilter.id === 'white')}
            <ColorSpot color={colorFilter.color} withBorder="true" />
          {:else}
            <ColorSpot color={colorFilter.color} />
          {/if}
          <input
            type="checkbox"
            value={colorFilter.id}
            bind:group={activeColorFilters}
            bind:checked={colorFilter.selected} />
          <div class="buttonColor__checkmark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="ico-checkmark">
              <use href="icons/checkmark-circle.svg#checkmark-circle" />
            </svg>
          </div>
        </label>
      {/each}
    </div>
  </fieldset>

  <fieldset class="filter-categories">
    <legend>categories</legend>
    <div class="categoryButtons">
      {#each filterCategories as category}
        <label
          class="button button__category"
          title={category.id}
          class:selected={category.selected}
          style="border-color: {category.color}">
          <input
            type="checkbox"
            value={category.id}
            bind:checked={category.selected}
            bind:group={activeCategoryFilters} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="ico-category"
            style="color: {category.color}">
            <use href="icons/{category.id}.svg#{category.id}" />
          </svg>
        </label>
      {/each}
    </div>
  </fieldset>
</div>
<button on:click={clearFilters}>clear filters [test]</button>

<script>
  /*Data*/
  import { filterColors, filterCategories } from "../data/filter__colors";

  export let colorFilters = [];
  export let categoryFilters = [];
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
    grid-template-columns: repeat(auto-fill, var(--spacing-large));
    grid-gap: 0.25rem;
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
    box-sizing: border-box;
    width: var(--spacing-large);
    height: var(--spacing-large);
    background: var(--white);
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
  }

  .button__color,
  .button__category {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-color 0.2s ease;
  }

  .button__color > .ico-colorSpot {
    width: 12px;
    height: 13px;
  }
  .buttonColor__checkmark {
    width: 12px;
    height: 12px;
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

  .button__color.selected .buttonColor__checkmark {
    opacity: 1;
  }

  .button__category:not(.selected) {
    border-color: var(--gry-light) !important;
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
            <svg
              style="color: {colorFilter.color}"
              class="ico-colorSpot"
              viewBox="0 0 12 13"
              xmlns="http://www.w3.org/2000/svg">
              <use href="icons/color-spot-with-frame.svg#color-spot" />
            </svg>
          {:else}
            <svg
              style="color: {colorFilter.color}"
              class="ico-colorSpot"
              viewBox="0 0 12 13"
              xmlns="http://www.w3.org/2000/svg">
              <use href="icons/color-spot.svg#color-spot" />
            </svg>
          {/if}
          <input
            type="checkbox"
            value={colorFilter.id}
            bind:group={colorFilters}
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
            bind:group={categoryFilters}
            bind:checked={category.selected} />
        </label>
      {/each}
    </div>
  </fieldset>
</div>

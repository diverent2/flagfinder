<script context="module">
  export function clearFilter() {
    for (const filter of filterColors) {
      filter.selected = false;
    }
    for (const filter of filterCategories) {
      filter.selected = false;
    }

    const filterButtons = document.querySelectorAll(".filter label.selected");
    filterButtons.forEach(filter => {
      filter.classList.remove("selected");
    });
  }
</script>

<script>
  import { colorFilters, categoryFilters } from './../../data/stores/searchQuery';
  import { filterColors, filterCategories } from "../../data/_filter";
  import ColorSpot from "../Elements/ColorSpot.svelte";
</script>

<style lang="scss">
  .filter {
    display: flex;
    flex-direction: column;
  }

  fieldset {
    color: var(--white);
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
    legend {
      font-size: 0.8rem;
      margin-bottom: 0;
      text-align: center;
      width: 100%;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .colorButtons {
    max-width: 360px;
    margin-top: var(--spacing-small);
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .colorButton {
    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    position: relative;

    &:focus-within {
      outline: var(--outline);
    }

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: var(--spacing-tiny);
    margin-bottom: var(--spacing-small);

    @media (--small-up) {
      margin-right: var(--spacing-small);
    }

    //not selected
    border-color: var(--gry-light);
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;

    cursor: pointer;
    background: var(--white);
    box-shadow: var(--box-shadow);
    transition: border-color 0.2s ease;

    .colorButton_checkmark {
      width: 1rem;
      height: 1.1rem;
      position: absolute;
      right: -4px;
      bottom: 0px;
      color: var(--green-light);
      transition: opacity 0.2s ease;
      opacity: 0;
    }

    &.selected {
      border-color: var(--green-light);

      .colorButton_checkmark {
        opacity: 1;
      }
    }
  }

  .categoryButtons {
    margin-top: var(--spacing-small);

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (--xsmall-only) {
      flex-direction: column;
      align-items: center;
    }
  }

  .categoryButton {
    height: 100%;
    max-width: 100px;
    padding: var(--spacing-tiny) var(--spacing-small);
    color: var(--black);
    background: var(--white);

    display: flex;
    flex-basis: 6rem;
    justify-content: space-between;

    margin-right: var(--spacing-tiny);
    margin-bottom: var(--spacing-small);

    &:focus-within {
      outline: var(--outline);
    }

    @media (--small-up) {
      margin-right: var(--spacing-small);
    }

    @media (--xsmall-only) {
      width: 100%;
      display: block;
      flex-basis: 0;
      margin-right: 0;
    }

    border: var(--gry-light) 2px solid;
    border-radius: 35px;

    cursor: pointer;
    user-select: none;
    transition: all 0.15s ease-in-out;
    transition-property: background-color, color;

    .categoryButton_inner {
      display: flex;
      align-items: center;

      margin: 0 auto;
      width: max-content;
    }

    .categoryButton_icon {
      width: 1rem;
      height: 1rem;
    }

    .categoryButton_text {
      margin-left: var(--spacing-small);
    }

    &.selected {
      color: var(--white);
      background: var(--color);
      border-color: transparent;
    }
  }
</style>

<div class="filter">

  <fieldset class="filter-category">
    <legend>Categories</legend>
    <div class="categoryButtons">
      {#each filterCategories as filterCategory}
        <label
          title={filterCategory.id}
          for="category-{filterCategory.id}"
          aria-label="{filterCategory.selected ? 'Remove' : 'Add'} filter for
          category '{filterCategory.id}"
          class="categoryButton"
          style="--color: {filterCategory.color};"
          class:selected={filterCategory.selected}
          data-cy-filter-category={filterCategory.id}>
          <div class="categoryButton_inner">
            <input
              type="checkbox"
              id="category-{filterCategory.id}"
              value={filterCategory.id}
              aria-label="Filter flags by the color '{filterCategory.selected}'"
              bind:checked={filterCategory.selected}
              bind:group={$categoryFilters} />
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="categoryButton_icon">
              <use href="icons/{filterCategory.id}.svg#{filterCategory.id}" />
            </svg>
            <span class="categoryButton_text">{filterCategory.id}</span>
          </div>
        </label>
      {/each}
    </div>
  </fieldset>

  <fieldset class="filter-color">
    <legend>Colors</legend>
    <div class="colorButtons">
      {#each filterColors as filterColor}
        <label
          class="colorButton"
          title={filterColor.id}
          class:selected={filterColor.selected}
          data-cy-filter-color={filterColor.id}>

          {#if (filterColor.id === 'yellow') | (filterColor.id === 'white')}
            <ColorSpot color={filterColor.color} withBorder="true" />
          {:else}
            <ColorSpot color={filterColor.color} />
          {/if}
          <input
            type="checkbox"
            value={filterColor.id}
            bind:group={$colorFilters}
            bind:checked={filterColor.selected} />
          <div class="colorButton_checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <use href="icons/checkmark-circle.svg#checkmark-circle" />
            </svg>
          </div>
        </label>
      {/each}
    </div>
  </fieldset>
</div>

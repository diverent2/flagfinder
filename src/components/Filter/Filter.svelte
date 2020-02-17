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
  /*Data*/
  import { filterColors, filterCategories } from "../../data/_filter";
  import IconButton from "../Elements/IconButton.svelte";
  import ColorSpot from "../Elements/ColorSpot.svelte";

  export let activeColorFilters;
  $: activeColorFilters;

  export let activeCategoryFilters;
  $: activeCategoryFilters;
</script>

<style lang="scss">
  .filter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  fieldset {
    color: var(--white);
    margin: 0;
    border: none;
    max-width: 600px;

    &.filter-color {
      width: 100%;
    }

    legend {
      font-size: 0.8rem;
      margin-bottom: 0;
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
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--spacing-xlarge));
    grid-gap: 0.5rem;
    justify-content: center;
  }

  .colorButton {
    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--spacing-small);

    @media (--small-up) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .categoryButton {
    height: 100%;
    max-width: 100px;
    padding: var(--spacing-tiny) var(--spacing-small);
    color: var(--white);

    justify-content: space-between;
    display: flex;

    border: var(--gry-light) 2px solid;
    border-radius: 35px;

    cursor: pointer;
    user-select: none;

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
      background: var(--color);
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
          class="categoryButton"
          style="--color: {filterCategory.color};"
          class:selected={filterCategory.selected}
          data-cy-filter-category={filterCategory.id}>
          <div class="categoryButton_inner">
            <input
              type="checkbox"
              value={filterCategory.id}
              bind:checked={filterCategory.selected}
              bind:group={activeCategoryFilters} />
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
            bind:group={activeColorFilters}
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

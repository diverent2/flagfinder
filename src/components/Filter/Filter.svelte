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
  fieldset {
    color: var(--white);
    margin: 0;
    border: none;
  }

  .filter-color {
    flex-grow: 3;
  }

  .colorButtons {
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: var(--spacing-small);
  }

  .categoryButton {
    height: 100%;
    max-width: 100px;
    padding: var(--spacing-tiny) var(--spacing-small);
    color: var(--white);

    border: var(--gry-light) 1px solid;
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
      color: var(--black);
      border: transparent 1px solid;
      background: var(--color);
    }
  }
</style>

<div class="filter">

  <fieldset class="filter-categories">
    <legend>Categories</legend>
    <div class="categoryButtons">
      {#each filterCategories as category}
        <label
          title={category.id}
          class="categoryButton"
          style="--color: {category.color};"
          class:selected={category.selected}>
          <div class="categoryButton_inner">
            <input
              type="checkbox"
              value={category.id}
              bind:checked={category.selected}
              bind:group={activeCategoryFilters} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="categoryButton_icon">
              <use href="icons/{category.id}.svg#{category.id}" />
            </svg>
            <span class="categoryButton_text">{category.id}</span>
          </div>
        </label>
      {/each}
    </div>
  </fieldset>

  <fieldset class="filter-color">
    <legend>Colors</legend>
    <div class="colorButtons">
      {#each filterColors as colorFilter}
        <label
          class="colorButton"
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

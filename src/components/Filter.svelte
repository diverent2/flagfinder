<script>
  /*Data*/
  import filterColors from "../data/filter__colors";
</script>

<style>
  fieldset {
    color: var(--white);
  }
  .filter {
    /*   display: flex; */
  }

  .colorButtons {
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
    border-color: var(--gry-light);
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
  }

  .button__color {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button__color > .colorSpot {
    width: 12px;
    height: 13px;
  }
</style>

<div class="filter">

  <fieldset class="filter-color">
    <legend>colors</legend>
    <div class="colorButtons">
      {#each filterColors as colorFilter}
        <label class="button button__color" title={colorFilter.id}>

          {#if (colorFilter.id === 'yellow') | (colorFilter.id === 'white')}
            <svg
              style="color: {colorFilter.color}"
              class="colorSpot"
              viewBox="0 0 12 13"
              xmlns="http://www.w3.org/2000/svg">
              <use href="icons/color-spot-with-frame.svg#color-spot" />
            </svg>
          {:else}
            <svg
              style="color: {colorFilter.color}"
              class="colorSpot"
              viewBox="0 0 12 13"
              xmlns="http://www.w3.org/2000/svg">
              <use href="icons/color-spot.svg#color-spot" />
            </svg>
          {/if}
          <input
            type="checkbox"
            value={colorFilter.id}
            bind:checked={colorFilter.selected} />
        </label>
      {/each}
    </div>
  </fieldset>
</div>

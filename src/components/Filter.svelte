<script>
  /*Data*/
  import filterColors from "../data/filter__colors";

  export let activeColorFilters = [];
  export let activeCategoryFilters = [];
  let disabled = false;

  const filterCategories = [
    { id: "sexuality" },
    { id: "gender" },
    { id: "attraction" }
  ];
</script>

<style>
  .colorButtons {
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--spacing-large));
    grid-gap: var(--spacing-small);
  }
  .colorButton,
  .categoryLabel {
    position: relative;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .colorButton {
    box-sizing: border-box;
    width: var(--spacing-large);
    height: var(--spacing-large);
    background: yellow;
    border-radius: 50%;
    border-color: var(--gry);
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
  }

  .colorButton.selected {
    border-color: var(--green-light);
    border-width: 3px;
  }

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--gry-light) !important;
  }

  .categoryLabels {
    display: flex;
  }

  .categoryLabel {
    margin-right: var(--spacing-small);

    padding: var(--spacing-tiny) var(--spacing-small);

    background: var(--green-light);
    border-radius: 25px;
    border: 2px solid var(--green);

    cursor: pointer;
  }

  .categoryLabel.selected {
    color: var(--white);
    background: var(--green);
  }
</style>

<fieldset>
  <legend>Colors</legend>
  <div class="colorButtons">
    {#each filterColors as colorFilter}
      <label
        class:selected={colorFilter.selected}
        class="colorButton"
        title={colorFilter.id}
        style="background: {colorFilter.color}">
        <input
          type="checkbox"
          value={colorFilter.id}
          bind:group={activeColorFilters}
          bind:checked={colorFilter.selected} />
      </label>
    {/each}
  </div>
</fieldset>

<fieldset>
  <legend>Categories</legend>
  <div class="categoryLabels">
    {#each filterCategories as categoryFilter}
      <label class="categoryLabel" class:selected={categoryFilter.selected}>
        {categoryFilter.id}
        <input
          type="checkbox"
          value={categoryFilter.id}
          bind:group={activeCategoryFilters}
          bind:checked={categoryFilter.selected} />
      </label>
    {/each}
  </div>
</fieldset>

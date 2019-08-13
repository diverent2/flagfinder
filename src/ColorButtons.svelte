<script>
  /*Data*/
  import filterColors from "./data/filter__colors";

  export let active = [];
  let disabled = false;
</script>

<style>
  .colorButtons {
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--spacing-large));
    grid-gap: var(--spacing-small);
  }
  .colorButton {
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

  .colorButton.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--gry-light) !important;
  }
</style>

<div class="colorButtons">
  {#each filterColors as cFilter}
    <label
      class:selected={cFilter.selected}
      class="colorButton"
      title={cFilter.id}
      style="background: {cFilter.color}">
      <input
        type="checkbox"
        value={cFilter.id}
        bind:group={active}
        bind:checked={cFilter.selected} />
    </label>
  {/each}

</div>

<script>
  export let id = "text";
  export let color;
  export let selected;
  export let disabled;
</script>

<style>
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

<label
  class="colorButton"
  class:disabled
  class:selected
  title={id}
  style="background: {color}">
  <input type="checkbox" {disabled} bind:checked={selected} />
</label>

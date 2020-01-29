<script>
  export let symbols = [];

  function addSymbolElement() {
    symbols = symbols.concat({
      id: "",
      name: "",
      meaning: "",
      icon: ""
    });
  }

  function removeSymbolElement(indexOfTheElementToDelete) {
    symbols = symbols.filter(symbol => {
      //return if not the one element to get deleted
      return symbol !== symbols[indexOfTheElementToDelete];
    });

    symbols = [...symbols];
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .form-symbol {
    position: relative;
    padding-top: var(--spacing-xlarge);
    display: grid;
    color: var(--black);
    grid-gap: var(--spacing);
    margin-bottom: var(--spacing-xlarge);
  }

  @media only screen and (min-width: 360px) {
    .form-symbol {
      grid-template-columns: 1fr 1fr;
    }
  }

  .removeButton {
    position: absolute;
    top: 0;
    right: 0;

    padding: var(--spacing-small) var(--spacing-large);
    border: none;
    border-radius: 25px;

    color: var(--white);
    background: var(--red);
    cursor: pointer;
  }
</style>

<fieldset>
  <legend>Symbols</legend>
  <ul class="symbols">
    {#each symbols as symbol, index}
      <li class="symbol">
        <div class="form-symbol">

          <button
            class="removeButton"
            on:click={() => removeSymbolElement(index)}>
            Remove
          </button>
          <div>
            <label for="symbolName" class="formField--required">Name</label>
            <input
              type="text"
              name="symbolName"
              placeholder="double mars"
              bind:value={symbol.name}
              required />
          </div>

          <div>
            <label for="symbolId" class="formField--required">ID</label>
            <input
              type="text"
              name="symbolId"
              placeholder="double-mars"
              bind:value={symbol.id}
              required />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="symbolIcon">Icon URL</label>
            <input
              name="symbolIcon"
              placeholder="./icons/double-mars.svg"
              rows="2"
              bind:value={symbol.icon} />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="symbolMeaning">Meaning of the symbol</label>
            <textarea
              name="symbolMeaning"
              placeholder="male* sexuality"
              rows="2"
              bind:value={symbol.meaning} />
          </div>

        </div>
      </li>
    {/each}
  </ul>
  <div class="text--center">
    <button data-ql-add-symbol-button on:click={addSymbolElement}>
      Add symbol
    </button>
  </div>
</fieldset>

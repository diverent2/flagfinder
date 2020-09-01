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

<style lang="scss">
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

  @media (--small-up) {
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
      <li class="symbol" data-ql-symbol>
        <div class="form-symbol">

          <button
            class="removeButton"
            on:click={() => removeSymbolElement(index)}
            data-ql-remove-symbol>
            Remove
          </button>
          <div>
            <label for="symbolName-{index}" class="formField--required">
              Name
            </label>
            <input
              type="text"
              id="symbolName-{index}"
              name="symbolName"
              placeholder="double mars"
              bind:value={symbol.name}
              required />
          </div>

          <div>
            <label for="symbolId-{index}" class="formField--required">ID</label>
            <input
              type="text"
              id="symbolId-{index}"
              name="symbolId"
              pattern="[a-z0-9-]+"
              placeholder="double-mars"
              bind:value={symbol.id}
              required />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="symbolIcon-{index}">
              Icon URL
              <br />
              <small>
                If you have one, please add the icon to the github issue. If
                not, leave
                <i>empty</i>
                .
              </small>
            </label>
            <input
              id="symbolIcon-{index}"
              name="symbolIcon"
              placeholder="double-mars.svg"
              rows="2"
              bind:value={symbol.icon} />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="symbolMeaning-{index}">Meaning of the symbol</label>
            <textarea
              id="symbolMeaning-{index}"
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
    <button data-ql-add-symbol on:click={addSymbolElement}>Add symbol</button>
  </div>
</fieldset>

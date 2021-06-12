<script>
  export let facts = [""];

  function addElement() {
    facts.push("");
    facts = facts;
  }

  function removeElement(index) {
    facts.splice(index, 1)
    facts = facts;
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .form-facts {
    position: relative;
    padding-top: var(--spacing-xlarge);
    display: grid;
    color: var(--black);
    grid-template-columns: 1fr;
    grid-gap: var(--spacing);
    margin-bottom: var(--spacing-xlarge);
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
  <legend>Bonus Facts</legend>
  <ul class="form-facts">
    {#each facts as fact, index}
      <li class="fact" data-ql-fact>
        <div class="form-facts">
          <button
            class="removeButton"
            on:click={() => removeElement(index)}
            data-ql-remove-fact>
            Remove
          </button>

          <div style="grid-column: 1 / -1">
            <label for="fact-{index}">Fact</label>
            <textarea
              id="fact-{index}"
              name="fact"
              placeholder="Something really interesting"
              rows="2"
              bind:value={fact} />
          </div>

        </div>
      </li>
    {/each}
  </ul>
  <div class="text--center">
    <button data-ql-add-fact on:click={addElement}>Add fact</button>
  </div>
</fieldset>

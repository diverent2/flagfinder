<script>
  export let sources = [
    {
      link: "",
      name: "",
      researchDate: ""
    }
  ];

  function addSource() {
    sources = sources.concat({
      link: "",
      name: "",
      researchDate: ""
    });
  }

  function removeSourceElement(indexOfTheElementToDelete) {
    sources = sources.filter(source => {
      //return if not the one element to get deleted
      return source !== sources[indexOfTheElementToDelete];
    });

    sources = [...sources];
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .form-source {
    position: relative;
    padding-top: var(--spacing-large);
    display: grid;
    color: var(--black);
    grid-template-columns: 1fr;
    grid-gap: var(--spacing-small);
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
  <legend>Sources</legend>
  <ul class="sources">
    {#each sources as source, index}
      <li class="source">
        <div class="form-source">

          <button
            class="removeButton"
            on:click={() => removeSourceElement(index)}>
            Remove
          </button>

          <div>
            <label for="sourceName" class="formField--required">
              Name [Website - Description]
            </label>
            <input
              type="text"
              name="sourceName"
              placeholder="Wiki Commons - sexual identity symbols"
              bind:value={source.name}
              required />
          </div>

          <div>
            <label for="sourceLink" class="formField--required">Link</label>
            <input
              type="text"
              name="sourceLink"
              placeholder="https://commons.wikimedia.org/wiki/Sexual_identity_symbols"
              bind:value={source.link}
              required />
          </div>

          <div>
            <label for="sourceResearchDate" class="formField--required">
              Research Date
            </label>
            <input
              value="2017-06-01"
              type="date"
              name="sourceResearchDate"
              bind:value={source.researchDate}
              required />
          </div>

        </div>
      </li>
    {/each}
  </ul>
  <div class="text--center">
    <button data-ql-add-source-button on:click={addSource}>Add source</button>
  </div>
</fieldset>

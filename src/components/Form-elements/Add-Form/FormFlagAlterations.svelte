<script>
  export let flagAlterations = [];

  function addElement(array) {
    array = array.concat({
      title: "",
      imageUrl: "",
      imageAlt: "",
      description: ""
    });
    flagAlterations = array;
  }

  function removeElement(indexOfTheElementToDelete) {
    let array = flagAlterations;
    array = array.filter(el => {
      //return if not the one element to get deleted
      return el !== array[indexOfTheElementToDelete];
    });
    flagAlterations = [...array];
  }
</script>

<style lang="scss">
  fieldset {
    margin-top: var(--spacing-xlarge);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .form-flagAlteration {
    position: relative;
    padding-top: var(--spacing-xlarge);
    display: grid;
    color: var(--black);
    grid-gap: var(--spacing);
    margin-bottom: var(--spacing-xlarge);

    @media (--small-up) {
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
  <legend>Flag History and Alterations</legend>
  <p>
    <small>
      A list of the design evolution and alteration throughout the years.
    </small>
  </p>
  <ul class="flagAlterations">
    {#each flagAlterations as flagAlteration, index}
      <li class="flagAlteration" data-ql-flag-alteration>
        <div class="form-flagAlteration">

          <button
            class="removeButton"
            on:click={() => removeElement(index)}
            data-ql-remove-flag-alteration>
            Remove
          </button>

          <div style="grid-column: 1 / -1">
            <label
              for="flagAlteration-title-{index}"
              class="formField--required">
              Image Title
            </label>
            <input
              type="text"
              id="flagAlteration-title-{index}"
              name="flagAlteration-title"
              placeholder="First Version from 2008"
              bind:value={flagAlteration.title}
              required />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="flagAlteration-imageUrl-{index}">
              <span class="formField--required">Image Source Path</span>
              <br />
              <small>
                Link to the URL where the image orignates from. Make sure the
                image is free to use!
              </small>
            </label>
            <input
              type="text"
              name="flagAlteration-imageUrl"
              id="flagAlteration-imageUrl-{index}"
              placeholder="path/to/image.png"
              bind:value={flagAlteration.imageUrl}
              required />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="flagAlteration-imageAlt-{index}">
              <span class="formField--required">Image alt text</span>
              <br />
              <small>
                (he text that will be shown when the image isn't viewable.
              </small>
            </label>
            <input
              type="text"
              id="flagAlteration-imageAlt-{index}"
              name="flagAlteration-imageAlt"
              placeholder="The stripes originally had brighter colors"
              bind:value={flagAlteration.imageAlt}
              required />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="flagAlteration-description-{index}">
              flag description
            </label>
            <textarea
              type="text"
              id="flagAlteration-description-{index}"
              name="flagAlteration-description"
              placeholder="The original Flag was meant to be seen as…"
              bind:value={flagAlteration.description}
              rows="3" />
          </div>

        </div>
      </li>
    {/each}
  </ul>
  <div class="text--center">
    <button
      data-ql-add-flag-alteration
      on:click={() => {
        addElement(flagAlterations);
      }}>
      Add Flag Alteration
    </button>
  </div>
</fieldset>

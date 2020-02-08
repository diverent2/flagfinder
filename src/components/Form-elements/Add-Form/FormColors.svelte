<script>
  import { filterColors } from "../../../data/_filter";

  export let colors = [];

  let hueValue = "transparent";

  function updateHuePreview(color) {
    const matchingHue = filterColors.find(
      filterColor => filterColor.id === color.hue
    );
    hueValue = matchingHue.color;
  }

  let hexValue = "transparent";

  function addColorElement() {
    colors = colors.concat({
      id: "",
      name: "",
      hue: "",
      meaning: "",
      value: ""
    });
  }

  function removeColorElement(indexOfTheElementToDelete) {
    colors = colors.filter(color => {
      //return if not the one element to get deleted
      return color !== colors[indexOfTheElementToDelete];
    });

    colors = [...colors];
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .form-color {
    position: relative;
    padding-top: var(--spacing-xlarge);
    display: grid;
    align-items: end;
    color: var(--black);
    grid-gap: var(--spacing);
    margin-bottom: var(--spacing-xlarge);
  }

  [name="colorHue"] {
    flex-grow: 1;
    height: 29px;
  }

  @media only screen and (min-width: 360px) {
    .form-color {
      grid-template-columns: 1fr 1fr;
    }
  }

  [name="colorHue"],
  [name="colorValue"] {
    padding-left: var(--spacing-tiny);
    border-left-width: var(--spacing-tiny);
    border-left-style: solid;
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

  .colorSelector {
    display: flex;
    flex-direction: column;
  }
</style>

<fieldset class="grid__column--fullWidth">
  <legend>Colors</legend>
  <ul class="colors">
    {#each colors as color, index}
      <li class="color">
        <div class="form-color">

          <button
            class="removeButton"
            on:click={() => removeColorElement(index)}>
            Remove
          </button>
          <div>
            <label for="colorName" class="formField--required">
              <span class="formField--required">Name</span>
              <br />
              <small>
                Using
                <a
                  href="https://www.color-blindness.com/color-name-hue/"
                  target="blank">
                  this site
                </a>
                [desktop only]
              </small>
            </label>
            <input
              type="text"
              name="colorName"
              placeholder="violet blue"
              bind:value={color.name}
              required />
          </div>

          <div>
            <label for="colorId" class="formField--required">ID</label>
            <input
              type="text"
              name="colorId"
              placeholder="violet-blue"
              pattern="[a-zA-Z0-9-]+"
              bind:value={color.id}
              required />
          </div>

          <div>
            <label for="colorValue" class="formField--required">
              Value (Hex)
            </label>
            <input
              type="text"
              name="colorValue"
              placeholder="#9B4797"
              pattern="#[a-fA-F0-9]+"
              bind:value={color.value}
              style="border-left-color: {color.value}"
              required />
          </div>

          <div class="colorSelector">
            <label for="colorHue" class="formField--required">Hue</label>
            <select
              name="colorHue"
              size="1"
              style="border-left-color: {hueValue}"
              bind:value={color.hue}
              on:change={() => updateHuePreview(color)}
              required>
              <option value="" disabled selected>Please select</option>
              {#each filterColors as filterColor}
                <option>{filterColor.id}</option>
              {/each}
            </select>
          </div>
          <div class="grid__column--fullWidth">
            <label for="colorMeaning">Meaning of the color</label>
            <textarea
              name="colorMeaning"
              placeholder="Possible attraction to …"
              rows="2"
              bind:value={color.meaning} />
          </div>
        </div>
      </li>
    {/each}
  </ul>
  <div class="text--center">
    <button data-ql-add-color-button on:click={addColorElement}>
      Add color
    </button>
  </div>
</fieldset>

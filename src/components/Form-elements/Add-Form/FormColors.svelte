<script>
  import { filterColors } from "../../../data/_filter";
  import { colorAPI } from "../../../data/global";

  export let colors = [];

  let colorHueValue = [];

  function updateHuePreview(color) {
    let index = colors.indexOf(color);
    const matchingHue = filterColors.find(
      filterColor => filterColor.id === color.hue
    );
    colorHueValue[index] = matchingHue.color;
  }

  function getColorName(colorHexValue, indexOfElement) {
    colorHexValue = colorHexValue.replace("#", "");
    if (colorHexValue.length !== 6) {
      return;
    }
    const color_api_url = colorAPI + colorHexValue;
    +fetch(color_api_url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const name = json.colors[0].name;
        const colorId = name
          .toLowerCase()
          .split(" ")
          .join("-");
        const colorName = name.toLowerCase();
        colors[indexOfElement].id = colorId;
        colors[indexOfElement].name = colorName;
      })
      .catch(error => {
        console.error(
          "Error trying to get color name from hex value: " + error
        );
      });
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

<style lang="scss">
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
  }

  @media (--small-up) {
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

<fieldset style="grid-column: 1 / -1">
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
            <label for="colorValue-{index}" class="formField--required">
              Value (Hex)
            </label>
            <input
              type="text"
              id="colorValue-{index}"
              name="colorValue"
              placeholder="#9B4797"
              pattern="#[a-fA-F0-9]+"
              bind:value={color.value}
              on:input={() => getColorName(color.value, index)}
              style="border-left-color: {color.value}"
              required />
          </div>
          <div class="colorSelector">
            <label for="colorHue-{index}" class="formField--required">
              Hue
            </label>
            <select
              id="colorHue-{index}"
              name="colorHue"
              size="1"
              style="border-left-color: {colorHueValue[index] || 'transparent'}"
              on:change={() => updateHuePreview(color)}
              bind:value={color.hue}
              required
              data-cy-form-color-hue>
              <option value="" disabled selected>Please select</option>
              {#each filterColors as filterColor}
                <option>{filterColor.id}</option>
              {/each}
            </select>
          </div>

          <div>
            <label for="colorName-{index}" class="formField--required">
              <span class="formField--required">Name</span>
              <br />
              <small>
                Autofilled using
                <a href="https://github.com/meodai/color-names" target="blank">
                  api.color.pizza 🍕
                </a>
              </small>
            </label>
            <input
              type="text"
              id="colorName-{index}"
              name="colorName"
              placeholder="violet blue"
              bind:value={color.name}
              required />
          </div>

          <div>
            <label for="colorId-{index}" class="formField--required">ID</label>
            <input
              type="text"
              id="colorId-{index}"
              name="colorId"
              placeholder="violet-blue"
              pattern="[a-z0-9-]+"
              bind:value={color.id}
              required />
          </div>

          <div style="grid-column: 1 / -1">
            <label for="colorMeaning-{index}">Meaning of the color</label>
            <textarea
              id="colorMeaning-{index}"
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
    <button data-cy-add-color-button on:click={addColorElement}>
      Add color
    </button>
  </div>
</fieldset>

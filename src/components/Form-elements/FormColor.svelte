<script>
  import { filterColors } from "../../data/_filter";

  let color = {
    id: "",
    name: "",
    hue: "",
    meaning: "",
    value: ""
  };

  let hueValue = "transparent";

  function updateHuePreview() {
    const matchingHue = filterColors.find(
      filterColor => filterColor.id === color.hue
    );
    hueValue = matchingHue.color;
  }

  let hexValue = "transparent";
</script>

<style>
  .form-color {
    display: grid;
    color: var(--black);
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing-small);
    margin-bottom: var(--spacing-xlarge);
  }

  .meaning {
    grid-column: span 2;
  }

  [name="colorHue"],
  [name="colorValue"] {
    padding-left: var(--spacing-tiny);
    border-left-width: var(--spacing-tiny);
    border-left-style: solid;
  }
</style>

<div class="form-color">

  <div>
    <label for="colorName" class="formField--required">Name</label>
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
      placeholder="violet_blue"
      bind:value={color.id}
      required />
  </div>

  <div>
    <label for="colorValue" class="formField--required">Value (Hex)</label>
    <input
      type="text"
      name="colorValue"
      placeholder="#9B4797"
      pattern="#[a-fA-F0-9]+"
      bind:value={color.value}
      style="border-left-color: {color.value}"
      required />
  </div>

  <div>
    <label for="colorHue" class="formField--required">Hue</label>
    <select
      name="colorHue"
      size="1"
      style="border-left-color: {hueValue}"
      bind:value={color.hue}
      on:change={updateHuePreview}
      required>
      <option value="" disabled selected>Please select</option>
      {#each filterColors as filterColor}
        <option>{filterColor.id}</option>
      {/each}
    </select>
  </div>
  <div class="meaning">
    <label for="colorMeaning">Meaning of the color</label>
    <textarea
      name="colorMeaning"
      placeholder="Possible attraction to …"
      rows="2"
      bind:value={color.meaning} />
  </div>
</div>

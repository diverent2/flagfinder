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
</script>

<style>
  .form-color {
    display: grid;
    padding: var(--spacing);
    color: var(--white);
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing-small);
  }

  label[for="meaning"] {
    grid-column: span 2;
  }

  [name="hue"] {
    padding-left: var(--spacing-tiny);
    border-left-width: var(--spacing-tiny);
    border-left-style: solid;
  }
</style>

<div class="form-color">

  <label for="name">
    name
    <input
      type="text"
      name="name"
      placeholder="violet blue"
      bind:value={color.name}
      required />
  </label>

  <label for="id">
    ID:
    <input
      type="text"
      name="id"
      placeholder="violet_blue"
      bind:value={color.id}
      required />
  </label>

  <label for="value">
    hex-value
    <input
      type="text"
      name="value"
      placeholder="#9B4797"
      pattern="#[a-fA-F0-9]+"
      bind:value={color.value}
      required />
  </label>

  <label for="hue">
    hue
    <select
      name="hue"
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
  </label>

  <label for="meaning">
    meaning of the color
    <textarea
      name="meaning"
      placeholder="possible attraction to …"
      rows="2"
      bind:value={color.meaning} />
  </label>

</div>

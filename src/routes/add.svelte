<script>
  import Header from "./../components/Header.svelte";

  let colors = [
    {
      id: "",
      name: "",
      hue: "",
      meaning: "",
      value: ""
    }
  ];

  function addColor() {
    colors = colors.concat({
      id: "",
      name: "",
      hue: "",
      meaning: "",
      value: ""
    });
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input,
  textarea,
  select {
    display: block;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }

  #form--addFlag {
    margin: 0 auto;
    margin-top: var(--spacing-large);
    padding: 0 20px;
    max-width: 800px;
  }

  ul.colors {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li.color {
    display: grid;
    padding: var(--spacing);
    background: var(--blue);
    color: var(--white);
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing-small);
  }

  ul.colors label[for="meaning"] {
    grid-column: span 2;
  }
</style>

<Header>Add a flag</Header>

<form action="#" id="form--addFlag">
  <label for="id">
    ID:
    <input type="text" name="id" placeholder="gay" required />
  </label>

  <label for="name">
    name:
    <input type="text" name="name" placeholder="gay pride" required />
  </label>

  <label for="description">
    description:
    <textarea
      name="description"
      placeholder="Traditional symbol of the LGBTQ+ movement. It represents
      people who identify as homosexual as well as the queer community as a
      whole."
      rows="3" />
  </label>

  <fieldset>
    <legend>Origin</legend>
    <label for="firstAppearance">
      first appearance:
      <input
        type="text"
        name="firstAppearance"
        placeholder="Gilbert Baker in San Francisco" />
    </label>
    <label for="timeframe">
      timeframe:
      <input type="text" name="timeframe" placeholder="1979" />
    </label>
  </fieldset>

  <label>
    category
    <select name="category" size="1" required>
      <option>sexuality</option>
      <option>gender</option>
      <option>attraction</option>
      <option>kink</option>
    </select>
  </label>

  <label for="image">
    image-url:
    <input
      type="text"
      name="timeframe"
      placeholder="url to flag image"
      required />
  </label>

  <fieldset>
    <legend>Colors</legend>
    <ul class="colors">
      {#each colors as color}
        <li class="color">

          <label for="id">
            ID:
            <input
              type="text"
              name="id"
              placeholder="violet_blue"
              bind:value={color.id}
              required />
          </label>

          <label for="name">
            name
            <input
              type="text"
              name="name"
              placeholder="violet blue"
              bind:value={color.name}
              required />

          </label>
          <label for="hue">
            hue
            <input
              type="text"
              name="hue"
              placeholder="purple"
              bind:value={color.hue}
              required />
          </label>

          <label for="value">
            hex-value
            <input
              type="text"
              name="value"
              placeholder="#9B4797"
              bind:value={color.value}
              required />
          </label>
          <label for="meaning">
            meaning of the color
            <textarea
              name="meaning"
              placeholder="possible attraction to anywhere on the gender
              spectrum / blending in between both straight and gay communitites"
              rows="2"
              bind:value={color.meaning} />
          </label>
        </li>
      {/each}
    </ul>
    <button on:click={addColor}>Add color</button>
  </fieldset>
</form>

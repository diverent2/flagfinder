<script>
  import Header from "./../components/Header.svelte";
  import FormColor from "./../components/Form-elements/FormColor.svelte";

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

  p {
    text-align: center;
  }

  #form--addFlag {
    margin: 0 auto;
    margin-top: var(--spacing-large);
    padding: 0 20px;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--spacing);
    grid-template-areas:
      "name name"
      "id category"
      "description description"
      "origin origin"
      "imageurl imageurl"
      "colors colors";
  }

  .origin {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
  }

  ul.colors {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
  }
</style>

<Header>Add a flag</Header>

<p>
  👩‍💻 This form is intended to be used as a help to create new flags.
  <br />
  It's meant for
  <strong>[developement only]</strong>
</p>

<form action="#" id="form--addFlag">

  <label for="name" style="grid-area: name;">
    name:
    <input type="text" name="name" placeholder="gay pride" required />
  </label>

  <label for="id" style="grid-area: id;">
    ID:
    <input type="text" name="id" placeholder="gay" required />
  </label>

  <label for="category" style="grid-area: category;">
    category
    <select name="category" size="1" required>
      <option>sexuality</option>
      <option>gender</option>
      <option>attraction</option>
      <option>kink</option>
    </select>
  </label>

  <label for="description" style="grid-area: description;">
    description:
    <textarea
      name="description"
      placeholder="Traditional symbol of the LGBTQ+ movement…"
      rows="3" />
  </label>

  <fieldset class="origin" style="grid-area: origin;">
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

  <label for="image" style="grid-area: imageurl;">
    image-url:
    <input
      type="text"
      name="timeframe"
      placeholder="url to flag image"
      required />
  </label>

  <fieldset style="grid-area: colors;">
    <legend>Colors</legend>
    <ul class="colors">
      {#each colors as color}
        <li class="color">
          <FormColor {colors} />
        </li>
      {/each}
    </ul>
    <button on:click={addColor}>Add color</button>
  </fieldset>
</form>

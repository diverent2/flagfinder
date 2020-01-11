<script>
  import Header from "./../components/Header.svelte";
  import FormColor from "./../components/Form-elements/FormColor.svelte";
  import { filterCategories } from "./../data/_filter";

  let activeCategory = "sexuality";

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
  }

  .origin {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);

    padding: 0;
    border: 0;
  }

  /* categoryButtons */

  .categoryButtons {
    display: flex;
    justify-content: space-around;
  }

  .button__category input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .button__category {
    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    position: relative;
    background: var(--white);
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    box-shadow: var(--box-shadow);

    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-color 0.2s ease;
  }

  .ico-category {
    width: 1rem;
    height: 1rem;
  }

  .button__category:not(.selected) {
    border-color: var(--gry-light) !important;
  }

  .button__category:not(.selected) .ico-category {
    color: var(--gry-light) !important;
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

  <div>
    <label class="formField--required" for="name">Name</label>
    <input type="text" name="name" placeholder="gay pride" required />
  </div>

  <div>
    <label for="id" class="formField--required">ID</label>
    <input type="text" name="id" placeholder="gay" required />
  </div>

  <fieldset style="grid-column: span 2;">
    <legend class="formField--required">Category</legend>
    <div class="categoryButtons">
      {#each filterCategories as category}
        <div>
          <label
            class="button__category"
            title={category.id}
            class:selected={activeCategory === category.id}
            style="border-color: {category.color}">
            <input
              type="radio"
              bind:group={activeCategory}
              value={category.id}
              required />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="ico-category"
              style="color: {category.color}">
              <use href="icons/{category.id}.svg#{category.id}" />
            </svg>
          </label>
        </div>
      {/each}
    </div>
  </fieldset>

  <div style="grid-column: span 2;">
    <label for="image" class="formField--required">Image-URL</label>
    <input
      type="text"
      name="timeframe"
      placeholder="url to flag image"
      required />
  </div>

  <div style="grid-column: span 2;">
    <label for="description">Description</label>
    <textarea
      name="description"
      placeholder="Traditional symbol of the LGBTQ+ movement…"
      rows="3" />
  </div>

  <fieldset class="origin" style="grid-column: span 2;">
    <legend>Origin</legend>
    <div>
      <label for="firstAppearance">First Appearance</label>
      <input
        type="text"
        name="firstAppearance"
        placeholder="Gilbert Baker in San Francisco" />
    </div>
    <div>
      <label for="timeframe">Timeframe</label>
      <input type="text" name="timeframe" placeholder="1979" />
    </div>
  </fieldset>

  <fieldset style="grid-column: span 2;">
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

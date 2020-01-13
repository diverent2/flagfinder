<script>
  import Header from "./../components/Header.svelte";
  import FormColor from "./../components/Form-elements/FormColor.svelte";
  import FormSource from "./../components/Form-elements/FormSource.svelte";
  import { filterCategories } from "./../data/_filter";

  let flagData = setEmptyFlagData();

  function setEmptyFlagData() {
    return {
      id: "",
      name: "",
      description: "",
      origin: {
        firstAppearance: "",
        timeframe: ""
      },
      category: "",
      image: "",
      props: {
        colors: [
          {
            id: "",
            name: "",
            hue: "",
            meaning: "",
            value: ""
          }
        ],
        matches: [{}]
      },
      sources: [
        {
          link: "",
          name: "",
          researchDate: ""
        }
      ]
    };
  }

  function addColor() {
    let flagColorsData = flagData.props.colors;
    flagData.props.colors = flagColorsData.concat({
      id: "",
      name: "",
      hue: "",
      meaning: "",
      value: ""
    });
  }

  let sources = [
    {
      link: "",
      name: "",
      researchDate: ""
    }
  ];

  function addSource() {
    let flagSourcesData = flagData.sources;
    flagData.sources = flagSourcesData.concat({
      link: "",
      name: "",
      researchDate: ""
    });
  }

  function generateCode() {
    const prettyJsonOutput = JSON.stringify(flagData, null, 2);
    document.getElementById("output").value = prettyJsonOutput;
  }

  function copyOutput() {
    const copyText = document.getElementById("output");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

    alert("Text copied to clipboard!");
  }

  function resetForm() {
    var confirmation = confirm("Are you sure you want to reset the form?");
    if (confirmation) {
      document.getElementById("form--addFlag").reset();
      document.getElementById("output").value = "";

      flagData = setEmptyFlagData();
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
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

  .text--right {
    text-align: right;
  }
  .text--center {
    text-align: center;
  }

  .form__submit {
    grid-column: span 2;
    margin-bottom: var(--spacing-xlarge);
  }
  .form__submit button {
    background: var(--green-light);
  }

  .outputContainer {
    margin: 0 auto;
    margin-bottom: var(--spacing-large);
    max-width: 800px;
  }

  .outputContainer__buttons {
    margin-top: var(--spacing-small);
    display: flex;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>[👩‍💻 DEV] Add a flag | Prideflags.info</title>
</svelte:head>

<Header>Add a flag</Header>

<div class="container">
  <p>
  👩‍💻 This form is intended to be used as a help to create new flags.
    <br />
  It's meant for
  <strong>[developement only]</strong>
  </p>

  <form on:submit|preventDefault={generateCode} id="form--addFlag">

    <div>
      <label class="formField--required" for="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="gay pride"
        bind:value={flagData.name}
        required />
    </div>

    <div>
      <label for="id" class="formField--required">ID</label>
      <input
        type="text"
        name="id"
        placeholder="gay-bear"
        pattern="[a-zA-Z0-9-]+"
        bind:value={flagData.id}
        required />
    </div>

    <fieldset style="grid-column: span 2;">
      <legend class="formField--required">Category</legend>
      <div class="categoryButtons">
        {#each filterCategories as category}
          <div>
            <label
              class="button__category"
              title={category.id}
              class:selected={flagData.category === category.id}
              style="border-color: {category.color}">
              <input
                type="radio"
                name="category"
                bind:group={flagData.category}
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
        name="image"
        placeholder="url to flag image"
        bind:value={flagData.image}
        required />
    </div>

    <div style="grid-column: span 2;">
      <label for="description">Description</label>
      <textarea
        name="description"
        placeholder="Traditional symbol of the LGBTQ+ movement…"
        bind:value={flagData.description}
        rows="3" />
    </div>

    <fieldset class="origin" style="grid-column: span 2;">
      <legend>Origin</legend>
      <div>
        <label for="firstAppearance">First Appearance</label>
        <input
          type="text"
          name="firstAppearance"
          bind:value={flagData.origin.firstApperance}
          placeholder="Gilbert Baker in San Francisco" />
      </div>
      <div>
        <label for="timeframe">Timeframe</label>
        <input
          type="text"
          name="timeframe"
          bind:value={flagData.origin.timeframe}
          placeholder="1979" />
      </div>
    </fieldset>

    <fieldset style="grid-column: span 2;">
      <legend>Colors</legend>
      <ul class="colors">
        {#each flagData.props.colors as color}
          <li class="color">
            <FormColor {color} />
          </li>
        {/each}
      </ul>
      <div class="text--right">
        <button on:click={addColor}>Add color</button>
      </div>
    </fieldset>

    <fieldset style="grid-column: span 2;">
      <legend>Sources</legend>
      <ul class="sources">
        {#each flagData.sources as source}
          <li class="source">
            <FormSource {source} />
          </li>
        {/each}
      </ul>
      <div class="text--right">
        <button on:click={addSource}>Add source</button>
      </div>
    </fieldset>

    <div class="form__submit">
      <p>
        Click this button to generate the new flag in JSON. You can use this to
        open a
        <a href="#https://github.com/diverent2/flagfinder/issues/new/choose">
          content update request
        </a>
        on
        <a href="https://github.com/diverent2/flagfinder">github.</a>
        <br />
        Thank you for your help!
        <br />
        <small>!Note: Requesting a change won't guarantee its addition!</small>
      </p>
      <div class="text--center">
        <button type="submit">Generate Code</button>
      </div>
    </div>
  </form>

  <div class="outputContainer">
    <textarea id="output" readonly rows="10" />
    <div class="outputContainer__buttons">
      <button on:click={copyOutput}>Copy</button>
      <button on:click={resetForm} style="background: red">Reset</button>
    </div>
  </div>
</div>

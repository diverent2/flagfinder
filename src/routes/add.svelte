<script>
  import Header from "./../components/Header.svelte";
  import FormColors from "./../components/Form-elements/Add-Form/FormColors.svelte";
  import FormSources from "./../components/Form-elements/Add-Form/FormSources.svelte";
  import FormSymbols from "./../components/Form-elements/Add-Form/FormSymbols.svelte";
  import { filterCategories } from "./../data/_filter";

  let currentDate = getCurrentDate();

  function getCurrentDate() {
    const date = new Date();
    const dateString = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];

    return dateString;
  }

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
        symbols: [
          {
            id: "",
            name: "",
            meaning: "",
            icon: ""
          }
        ]
      },
      matches: {
        colors: [],
        symbols: []
      },
      keywords: [],
      sources: [
        {
          link: "",
          name: "",
          researchDate: currentDate
        }
      ]
    };
  }

  let keywords__string = "";

  function generateCode() {
    const keywords__seperated = Array.from(keywords__string.split(","));
    const keywords = keywords__seperated.map(keyword => {
      return keyword.trim().toLowerCase();
    });
    flagData.keywords = keywords;

    const flagColors = flagData.props.colors;
    const flagMatchesColors = [];
    flagColors.forEach(color => {
      flagMatchesColors.push(color.hue);
    });
    flagData.matches.colors = flagMatchesColors;

    const flagSymbols = flagData.props.symbols;
    const flagMatchesSymbols = [];
    flagSymbols.forEach(symbol => {
      flagMatchesSymbols.push(symbol.id);
    });
    flagData.matches.symbols = flagMatchesSymbols;

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
  p {
    text-align: center;
  }

  #form--addFlag {
    margin: 0 auto;
    margin-top: var(--spacing-large);
    max-width: 800px;
    display: grid;
    grid-gap: var(--spacing);
  }

  .origin {
    padding: 0;
    border: 0;
  }

  .origin__container {
    display: grid;
    grid-gap: var(--spacing);
  }

  @media only screen and (min-width: 360px) {
    #form--addFlag {
      grid-template-columns: repeat(2, 1fr);
    }

    .origin__container {
      grid-template-columns: 1fr 1fr;
    }
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

  .form__submit {
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
    This form is intended to be used as a help to create new flags.
    <br />
    <strong>[👩‍💻 for developement only]</strong>
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

    <fieldset class="grid__column--fullWidth">
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

    <div class="grid__column--fullWidth">
      <label for="image" class="formField--required">Image-URL</label>
      <input
        type="text"
        name="image"
        placeholder="url to flag image"
        bind:value={flagData.image}
        required />
    </div>

    <div class="grid__column--fullWidth">
      <label for="description">Description</label>
      <textarea
        name="description"
        placeholder="Traditional symbol of the LGBTQ+ movement…"
        bind:value={flagData.description}
        rows="3" />
    </div>

    <fieldset class="origin grid__column--fullWidth">
      <legend>Origin</legend>
      <div class="origin__container">
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
      </div>
    </fieldset>

    <div class="grid__column--fullWidth">
      <label for="keywords">Keywords (comma-separated)</label>
      <input
        type="text"
        name="keywords"
        placeholder="gay, masc, ..."
        bind:value={keywords__string} />
    </div>
    <div class="grid__column--fullWidth">
      <FormColors
        colors={flagData.props.colors}
        bind:colors={flagData.props.colors} />
    </div>

    <div class="grid__column--fullWidth">
      <FormSymbols
        symbols={flagData.props.symbols}
        bind:symbols={flagData.props.symbols} />
    </div>

    <div class="grid__column--fullWidth">
      <FormSources
        sources={flagData.sources}
        bind:sources={flagData.sources}
        {currentDate} />
    </div>

    <div class="form__submit grid__column--fullWidth">
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

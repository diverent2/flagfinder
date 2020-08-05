<script>
  import { app_name, app_baseUrl } from "../data/global.js";

  import Metainfos from "./../components/Helpers/Metainfos.svelte";
  import Header from "./../components/Header.svelte";
  import FormColors from "./../components/Form-elements/Add-Form/FormColors.svelte";
  import FormSources from "./../components/Form-elements/Add-Form/FormSources.svelte";
  import FormSymbols from "./../components/Form-elements/Add-Form/FormSymbols.svelte";
  import FormFlagAlterations from "./../components/Form-elements/Add-Form/FormFlagAlterations.svelte";
  import { filterCategories } from "./../data/_filter";

  const meta = {
    title: `Add a flag [👩‍💻 DEV] | ${app_name}`,
    desc: `he easiest Way to add Data to a new Flag to ${app_name}`,
    url: `${app_baseUrl}/add`,
    image: `${app_baseUrl}/socialcards/search.png`
  };

  let currentDate = getCurrentDate();

  function updateCategoriesRequired() {
    const categoryButtons = document.querySelectorAll(
      'input[name="category[]"]'
    );
    const categoryButtonsChecked = document.querySelectorAll(
      'input[name="category[]"]:checked'
    );
    if (categoryButtonsChecked.length) {
      categoryButtons.forEach(category => {
        category.removeAttribute("required");
      });
    } else {
      categoryButtons.forEach(category => {
        category.setAttribute("required", "required");
      });
    }
  }

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
        history: "",
        publicationDate: "",
        author: "",
        flagAlterations: [
          {
            title: "",
            imageAlt: "",
            imageUrl: "",
            description: ""
          }
        ]
      },
      categories: [],
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

<style lang="scss">
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

  .origin__container {
    display: grid;
    grid-gap: var(--spacing);
  }

  @media (--small-up) {
    #form--addFlag {
      grid-template-columns: repeat(2, 1fr);
    }

    .origin__container {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* categoryButtons */

  .categoryButtons {
    margin-top: var(--spacing-small);

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (--xsmall-only) {
      flex-direction: column;
      align-items: center;
    }
  }

  .categoryButton {
    height: 100%;
    max-width: 100px;
    padding: var(--spacing-tiny) var(--spacing-small);
    color: var(--black);
    background: var(--white);

    display: flex;
    flex-basis: 6rem;
    justify-content: space-between;

    margin-right: var(--spacing-tiny);
    margin-bottom: var(--spacing-small);

    &:focus-within {
      outline: var(--outline-dark);
    }

    @media (--small-up) {
      margin-right: var(--spacing-small);
    }

    @media (--xsmall-only) {
      width: 100%;
      display: block;
      flex-basis: 0;
      margin-right: 0;
    }

    border: var(--gry-light) 2px solid;
    border-radius: 35px;

    cursor: pointer;
    user-select: none;
    transition: all 0.15s ease-in-out;
    transition-property: background-color, color;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .categoryButton_inner {
      display: flex;
      align-items: center;

      margin: 0 auto;
      width: max-content;
    }

    .categoryButton_icon {
      width: 1rem;
      height: 1rem;
    }

    .categoryButton_text {
      margin-left: var(--spacing-small);
    }

    &.selected {
      color: var(--white);
      background: var(--color);
      border-color: transparent;
    }
  }

  .form_submit {
    margin-bottom: var(--spacing-xlarge);

    button {
      background: var(--green-light);
    }
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

<Metainfos {...meta} showInSearch="false" />

<Header>Add a flag</Header>

<div class="container container-padding-top">
  <p>
    This form is intended to be used as a help to create new flags.
    <br />
    <strong>
      <small>[👩‍💻 For developement only]</small>
    </strong>
  </p>

  <form on:submit|preventDefault={generateCode} id="form--addFlag">

    <div>
      <label class="formField--required" for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="gay bear pride"
        bind:value={flagData.name}
        required />
    </div>

    <div>
      <label for="id" class="formField--required">ID</label>
      <input
        type="text"
        id="id"
        name="id"
        placeholder="gay-bear"
        pattern="[a-z0-9-]+"
        bind:value={flagData.id}
        required />
    </div>

    <fieldset style="grid-column: 1 / -1">
      <legend class="formField--required">Categories</legend>
      <div class="categoryButtons">
        {#each filterCategories as filterCategory}
          <label
            title={filterCategory.id}
            class="categoryButton"
            style="--color: {filterCategory.color};"
            class:selected={filterCategory.checked}
            data-cy-form-category={filterCategory.id}>
            <div class="categoryButton_inner">
              <input
                name="category[]"
                type="checkbox"
                bind:checked={filterCategory.checked}
                bind:group={flagData.categories}
                value={filterCategory.id}
                on:change={updateCategoriesRequired}
                required />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="categoryButton_icon">
                <use href="icons/{filterCategory.id}.svg#{filterCategory.id}" />
              </svg>
              <span class="categoryButton_text">{filterCategory.id}</span>
            </div>
          </label>
        {/each}
      </div>
      <p class="categories_infoText">
        <small>Only select multiple if you really have to!</small>
      </p>
    </fieldset>

    <div style="grid-column: 1 / -1">
      <label for="image">
        <span class="formField--required">Image-Origin URL</span>
        <br />
        <small>
          Link to the URL where the image orignates from. Make sure the image is
          free to use!
        </small>
      </label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="url to flag image"
        bind:value={flagData.image}
        required />
    </div>

    <div style="grid-column: 1 / -1">
      <label for="description">Identity Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="A genderqueer person is someone who is…"
        bind:value={flagData.description}
        rows="3" />
    </div>

    <fieldset class="origin" style="grid-column: 1 / -1">
      <legend>Origin</legend>
      <div class="origin__container">
        <div>
          <label for="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            bind:value={flagData.origin.author}
            placeholder="Gilbert Baker in San Francisco" />
        </div>
        <div>
          <label for="publicationDate">Publication Date</label>
          <input
            type="text"
            id="publicationDate"
            name="publicationDate"
            bind:value={flagData.origin.publicationDate}
            placeholder="1979" />
        </div>
        <div style="grid-column: 1 / -1">
          <label for="history">Current Flag History</label>
          <textarea
            id="history"
            name="history"
            placeholder="This flag was originally designed to represent…"
            bind:value={flagData.origin.history}
            rows="3" />
        </div>
      </div>
      <div style="grid-column: 1 / -1">
        <FormFlagAlterations
          flagAlterations={flagData.origin.flagAlterations}
          bind:flagAlterations={flagData.origin.flagAlterations} />
      </div>
    </fieldset>

    <div style="grid-column: 1 / -1">
      <label for="keywords">Keywords (comma-separated)</label>
      <input
        type="text"
        id="keywords"
        name="keywords"
        placeholder="gay, masc, ..."
        bind:value={keywords__string} />
    </div>
    <div style="grid-column: 1 / -1">
      <FormColors
        colors={flagData.props.colors}
        bind:colors={flagData.props.colors} />
    </div>

    <div style="grid-column: 1 / -1">
      <FormSymbols
        symbols={flagData.props.symbols}
        bind:symbols={flagData.props.symbols} />
    </div>

    <div style="grid-column: 1 / -1">
      <FormSources
        sources={flagData.sources}
        bind:sources={flagData.sources}
        {currentDate} />
    </div>

    <div class="form_submit" style="grid-column: 1 / -1">
      <p>
        Click this button to generate the new flag in JSON.
        <br />
        You can use this to open a
        <a
          href="https://github.com/diverent2/flagfinder/issues/new?labels=content&template=---content-requests.md">
          content update request
        </a>
        on
        <a href="https://github.com/diverent2/flagfinder">github.</a>
        <br />
        <small>
          ☝️ Note: Requesting a change won't guarantee its addition!
        </small>
        <br />
        <small>
          Learn more about making
          <a href="http://localhost:3000/about/#contribute">
            content contributions.
          </a>
        </small>
        <br />
        <br />
        Thank you for your help!
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

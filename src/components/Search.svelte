<script>
  export let searchTerm;

  const searchInputField = document.querySelector(".searchbox__inputfield");

  function clearSearch() {
    searchTerm = "";
  }
</script>

<style>
  .searchbox {
    box-sizing: border-box;
    width: 100%;
    height: var(--spacing-xlarge);

    padding: var(--spacing-tiny);

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom-style: none;
    border-bottom-width: medium;
    border-bottom: 1px var(--white) solid;
  }
  .searchbox__inputfield {
    color: var(--white);
    padding: 0 8px;
    flex-grow: 1;

    font-size: 1rem;
    border: none;
    background: transparent;
  }

  .searchbox__delete {
    width: var(--spacing);
    height: var(--spacing);
    opacity: 0.8;
    border-radius: 50%;
    cursor: pointer;
  }
</style>

<div class="searchbox">
  <img
    class="searchbox__icon"
    src="icons/search.svg"
    alt
    aria-hidden="true"
    height="24" />
  <input
    class="searchbox__inputfield"
    bind:value={searchTerm}
    id="search"
    name="search"
    placeholder="Searchterm goes here" />
  <img
    class="searchbox__delete"
    title="clear searchterm"
    src="icons/cross.svg"
    on:click={clearSearch}
    alt />
</div>

<script>
  import Tabs from "./../../components/Elements/Tabs.svelte";

  export let flag;
  export let activeTab;
</script>

<style>
  header {
    display: grid;
    grid-template:
      "back ." max-content
      "title flag" 1fr
      "tabs tabs" auto
      / 1fr 1fr;
    width: 100vw;
    padding: var(--spacing);

    position: fixed;
    top: 0;

    color: var(--white);
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
    text-transform: capitalize;
    box-shadow: var(--box-shadow);
    background: var(--blue);
    z-index: 1;
  }

  .flagDetails__goBack {
    grid-area: back;

    width: max-content;
  }

  .flagDetails__title {
    grid-area: title;

    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .ico-arrowBack {
    width: 1rem;
    height: 1rem;
    transition: color 0.2s ease;
  }

  .ico-arrowBack:hover {
    color: var(--green-light);
  }

  .flagDetails__headerImage {
    grid-area: flag;
    width: auto;
    height: 60px;
    justify-self: end;

    border: var(--white) 2px solid;
  }

  .flagDetails__tabButtons {
    grid-area: tabs;
    width: 60vw;
    position: absolute;
    justify-self: center;
  }
</style>

<header>
  <a href="./search" class="flagDetails__goBack">
    <svg
      class="ico-arrowBack"
      aria-label="Go back to search"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <use href="icons/arrow-back.svg#arrow-back" />
    </svg>
  </a>
  <h1 class="flagDetails__title">{flag.name} flag</h1>
  <img
    class="flagDetails__headerImage"
    src="flags/{flag.image}"
    alt="{flag.name} flag" />
  <div class="flagDetails__tabButtons">
    <Tabs tab1="General" tab2="Details" bind:activeTab />
  </div>
</header>

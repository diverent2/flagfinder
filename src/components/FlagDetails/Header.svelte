<script>
  import Tabs from "./../../components/Elements/Tabs.svelte";

  export let flag;
  export let activeTab;
</script>

<style>
  header {
    display: grid;
    grid-template:
      "back flag" max-content
      "title ." 1fr
      / 1fr 1fr;
    width: 100vw;
    padding: var(--spacing-large) var(--spacing-xlarge);

    position: fixed;
    top: 0;

    color: var(--white);
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
    text-transform: capitalize;
    box-shadow: var(--box-shadow);
    background: var(--blue-dark-500);
    z-index: 1;
  }

  .flagDetails__goBack {
    grid-area: back;
    width: max-content;
  }

  .ico-arrowBack {
    width: 1.5rem;
    height: 1.5rem;
    transition: color 0.2s ease;
  }

  .flagDetails__title {
    grid-area: title;

    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .ico-arrowBack:hover {
    color: var(--green-light);
  }

  .flagDetails__headerImage {
    grid-area: flag;
    position: absolute;
    width: auto;
    height: 80px;
    justify-self: end;

    border: var(--white) 2px solid;
  }

  .flagDetails__tabButtons {
    position: absolute;
    bottom: -1rem;
    width: 60vw;
    justify-self: center;
  }

  @media only screen and (min-width: 650px) and (min-height: 450px) {
    header {
      width: calc(100vw - 150px);
      margin-left: 150px;

      padding-top: var(--spacing-large);
      padding-bottom: var(--spacing-large);
      padding-left: 4rem;
      padding-right: 3rem;
    }
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

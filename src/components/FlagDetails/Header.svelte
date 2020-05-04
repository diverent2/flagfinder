<script>
  import Icon from "./../Elements/Icon.svelte";
  import Tabs from "./../Elements/Tabs.svelte";

  export let flag;
  export let activeTab;
</script>

<style lang="scss">
  header {
    display: grid;
    grid-template:
      "back flag" max-content
      "title flag" 1fr
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
    background: var(--blue-dark-500);
    z-index: 1;
  }

  .goBack {
    grid-area: back;
    width: max-content;
  }

  .title {
    grid-area: title;

    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .headerImage {
    grid-area: flag;
    width: auto;
    height: 80px;
    justify-self: end;

    border: var(--white) 2px solid;
  }

  .tabButtons {
    position: absolute;
    bottom: -1rem;
    width: 60vw;
    justify-self: center;
  }

  @media (--medium-up) and (--min-height) {
    header {
      width: calc(100vw - 200px);
      margin-left: 200px;
      padding: var(--spacing-large) var(--spacing-xlarge);

      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 200px;
        height: 60%;
        top: 0;
        left: 0;
        background: var(--blue-dark-500);
        transform: translateX(-200px);
      }
    }

    .headerImage {
      height: 20vh;
      max-height: 300px;
    }
  }
</style>

<header>
  <a href="./search" class="goBack">
    <Icon
      icon="arrow-back"
      scale="var(--spacing-large)"
      aria="Go back to search"
      colorHover="var(--blue-light)" />
  </a>
  <h1 class="title">{flag.name} flag</h1>
  <img class="headerImage" src="flags/{flag.image}" alt="{flag.name} flag" />
  <div class="tabButtons">
    <Tabs tab1="General" tab2="Details" bind:activeTab />
  </div>
</header>

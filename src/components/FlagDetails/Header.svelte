<script>
  import Icon from "./../Elements/Icon.svelte";
  import Tabs from "./../Elements/Tabs.svelte";

  export let flag;
  export let activeTab;

  let scrollY = 0;
  let isCollapsed = false;

  $: if (scrollY) {
    toggleState(scrollY);
  }

  const threshold = 35;

  function toggleState(scrollY) {
    const scrollBelowFold = scrollY > threshold;

    if (scrollBelowFold) {
      isCollapsed = true;
    } else {
      isCollapsed = false;
    }
  }
</script>

<style lang="scss">
  header.collapsed {
    .flagImage {
      width: 100px;
      transition: width 0.3s ease-in-out;
    }
  }

  header {
    display: grid;
    grid-template:
      "back title" max-content
      "flag flag" 1fr
      / max-content 1fr;
    grid-gap: var(--spacing);

    position: fixed;
    top: 0;
    will-change: height;

    width: 100vw;
    padding: var(--spacing);
    padding-bottom: var(--spacing-large);
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
    align-self: center;
  }

  .title {
    grid-area: title;
    margin: 0;

    justify-self: center;
    margin-right: var(--spacing-xlarge);

    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .img_container {
    grid-area: flag;
    margin: 0 var(--spacing-xlarge);

    display: flex;
    justify-content: center;

    .flagImage {
      transition: width 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05);
      width: 100%;
      max-width: 250px;
      border: var(--white) 2px solid;
      // offset-x | offset-y | blur-radius | spread-radius | color
      box-shadow: 8px 8px 16px 4px rgba($color: #000000, $alpha: 0.2);
      will-change: width;
    }
  }

  .tabButtons {
    position: absolute;
    bottom: -1rem;
    width: 60vw;
    justify-self: center;
  }

  @media (--medium-up) and (--min-height) {
    header {
      width: calc(100vw - 190px);
      margin-left: 190px;
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

    header.collapsed {
      .flagImage {
        width: 200px;
      }
    }
  }
</style>

<svelte:window bind:scrollY />

<header class:collapsed={isCollapsed}>
  <a href="./search" class="goBack">
    <Icon
      icon="arrow-back"
      scale="var(--spacing-large)"
      aria="Go back to search"
      colorHover="var(--blue-light)" />
  </a>
  <h1 class="title">{flag.name} flag</h1>
  <div class="img_container">
    <img
      class="flagImage"
      src="flags/{flag.image}"
      alt="{flag.name} flag"
      data-cy-flag-header-image />
  </div>
  <div class="tabButtons">
    <Tabs tab1="General" tab2="Details" bind:activeTab />
  </div>
</header>

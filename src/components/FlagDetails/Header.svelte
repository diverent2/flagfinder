<script>
  import { afterUpdate } from "svelte";

  import MediaQuery from "svelte-media-query/src/MediaQuery.svelte";

  import { matchMedia } from "./../../data/global.js";

  import Icon from "./../Elements/Icon.svelte";
  import Tabs from "./../Elements/Tabs.svelte";

  export let flag;
  export let activeTab = 1;

  let scrollY;

  afterUpdate(() => {
    toggleState(scrollY);
  });

  let state = "full";
  const threshold = 20;

  function toggleState(scrollY) {
    const scrollBelowFold = scrollY >= threshold;
    if (scrollBelowFold) {
      state = "collapsed";
    } else {
      state = "full";
    }
  }
</script>

<style lang="scss">
  header {
    display: flex;
    justify-content: center;

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

    > .header_inner {
      width: 100%;
      display: grid;
      grid-template:
        "back title" max-content
        "flag flag" 1fr
        / max-content 1fr;
      grid-gap: var(--spacing);
    }
  }

  .goBack {
    grid-area: back;
    width: max-content;
    align-self: center;
  }

  .title_container {
    grid-area: title;
    text-align: center;

    > .title {
      margin: 0;

      //fix centering;
      margin-right: var(--spacing-xlarge);

      text-overflow: ellipsis;
      overflow: hidden;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      @media (--large-up) and (--min-height) {
        margin: 0;
        -webkit-line-clamp: 2;
      }
    }
  }

  .img_container {
    grid-area: flag;
    margin: 0 var(--spacing-xlarge);

    display: flex;
    justify-content: center;

    > .flagImage {
      transition: width 0.2s ease-in-out;
      width: 100%;
      height: 100%;
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

  header[data-state="collapsed"] {
    .flagImage {
      width: 100px;
    }
  }

  @media (--medium-up) and (--min-height) {
    header {
      min-height: 130px;
      .header_inner {
        max-width: 800px;
        margin-left: 190px;
      }
    }
  }

  @media (--large-up) and (--min-height) {
    header {
      padding: var(--spacing-large) var(--spacing-xlarge);

      > .header_inner {
        grid-template:
          "back title flag flag" 1fr
          / min-content 1fr 1fr;
      }
    }

    header .img_container {
      margin: 0;
      margin-right: var(--spacing);

      .flagImage {
        width: auto;
        height: 100%;
        position: absolute;
      }
    }

    .goBack {
      margin-top: var(--spacing-tiny);
      align-self: flex-start;
    }
  }
</style>

<svelte:window bind:scrollY />

<header data-cy-flag-header data-state={state}>
  <div class="header_inner">
    <a href="/" class="goBack" data-cy-back-button>
      <Icon
        icon="arrow-back"
        scale="var(--spacing-large)"
        aria="Go back to search"
        colorHover="var(--blue-light)" />
    </a>
    <div class="title_container">
      <h1 class="title">{flag.name}</h1>
    </div>
    <div class="img_container">
      <img
        class="flagImage"
        src="flags/{flag.image}"
        alt="{flag.name} flag"
        data-cy-flag-header-image />
    </div>
  </div>
  <MediaQuery query={matchMedia.medium_down} let:matches>
    {#if matches}
      <div class="tabButtons">
        <Tabs tab1="General" tab2="Details" bind:activeTab />
      </div>
    {/if}
  </MediaQuery>
</header>

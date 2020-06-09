<script>
  import { onMount } from "svelte";

  import MediaQuery from "svelte-media-query/src/MediaQuery.svelte";

  import { matchMedia } from "./../../data/global.js";

  import Icon from "./../Elements/Icon.svelte";
  import Tabs from "./../Elements/Tabs.svelte";

  export let flag;
  export let activeTab;

  let scrollY;

  onMount(() => {
    scrollY = 0;
  });

  let state = "full";
  const threshold = 50;

  $: if (scrollY) {
    toggleState(scrollY);
  }

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
  header[data-state="collapsed"] {
    .flagImage {
      width: 100px;
      transition: width 0.3s ease-in-out;
    }
  }

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

    .header_inner {
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

    .title {
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

      .header_inner {
        grid-template:
          "back title flag flag" 1fr
          / min-content 2fr minmax(150px, 2fr);
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 200px;
        height: 100%;
        top: 0;
        left: 0;
        background: var(--blue-dark-500);
        transform: translateX(-200px);
      }
    }

    .goBack {
      margin-top: var(--spacing-tiny);
      align-self: flex-start;
    }

    .img_container {
      margin: 0;
      margin-right: var(--spacing);
    }
  }
</style>

<svelte:window bind:scrollY />

<header data-cy-flag-header data-state={state}>
  <div class="header_inner">
    <a href="/" class="goBack">
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

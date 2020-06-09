<script>
  import Icon from "./Elements/Icon.svelte";

  export let backLink = "/";
</script>

<style lang="scss">
  header {
    position: fixed;
    width: 100vw;
    height: 120px;
    padding: 1rem;
    color: var(--white);
    text-align: center;
    z-index: 1;

    .header_inner {
      width: 100%;
      display: grid;
      grid-template:
        "back title" 1fr
        / max-content 1fr;
      grid-gap: var(--spacing);
      align-items: center;
    }
  }

  .background {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .goBack {
    grid-area: back;
    width: max-content;
  }

  h1 {
    grid-area: title;
    margin: 0;
    margin-right: 2rem;
  }

  @media (--medium-up) and (--min-height) {
    header {
      right: 0;
      width: calc(100vw - 150px);
    }

    h1 {
      margin: 0;
    }

    .goBack {
      transform: translateX(40px);
    }
  }
</style>

<header>
  <div class="header_inner">
    <svg class="background" aria-hidden="true">
      <use href="waves/wave-top.svg#wave-top" />
    </svg>
    <a href={backLink} class="goBack">
      <Icon
        icon="arrow-back"
        scale="var(--spacing-large)"
        aria="Go back to search"
        colorHover="var(--blue-light)" />
    </a>
    <h1>
      <slot />
    </h1>
  </div>
</header>

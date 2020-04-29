<script>
  import IconButton from "../Elements/IconButton.svelte";
  export let version;
  export let year;

  export let has_secondary_options;
  export let allow_share = true;
  export let allow_bookmarks = true;
</script>

<style lang="scss">
  .footernav {
    width: 100%;
    height: 8rem;
    position: fixed;
    bottom: 0;
    padding: 1rem;
    color: var(--white);
    z-index: 1000;

    .background {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100vw;
      pointer-events: none;
      z-index: -1;
    }
  }

  .main {
    position: relative;
    display: inline-block;

    .main-search {
      height: 8rem;
      width: 8rem;
      display: inline-block;
    }

    .main-home {
      position: absolute;
      right: 5px;
      transform: translateX(50px);
      bottom: 25px;
    }
  }

  .secondary {
    position: absolute;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: var(--spacing-small);
    grid-gap: var(--spacing);

    .button {
      display: none;

      &.active {
        display: block;
      }
    }
  }

  .info {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: var(--spacing-small);
    text-align: right;

    .info-extended {
      display: none;

      @media (min-width: 380px) {
        display: inline;
      }
    }
  }
</style>

<nav class="footernav">
  <img class="background" src="wave--darkblue.svg" alt aria-hidden="true" />
  <div class="main">
    <a class="main-search" href="/search">
      <IconButton
        icon="search"
        scale="4rem"
        backgroundColor="var(--blue-dark)"
        backgroundColorHover="var(--blue)"
        titleVisibility="false"
        layout="below"
        border="true"
        borderStyle="round">
        search
      </IconButton>
    </a>
    <a href="/" class="main-home">
      <IconButton
        icon="home"
        scale="1.7rem"
        backgroundColor="var(--blue-dark)"
        backgroundColorHover="var(--blue)"
        fontSize="0.8rem"
        layout="below-with-space"
        titleVisibility="false"
        borderStyle="round">
        home
      </IconButton>
    </a>
  </div>
  {#if has_secondary_options}
    <div class="secondary">
      <div
        class="button button-share {allow_bookmarks ? 'active' : ''}"
        data-cy-footernav-bookmark>
        <IconButton
          icon="bookmarks"
          scale="1.8rem"
          backgroundColor="var(--blue-dark-500)"
          backgroundColorHover="var(--blue-dark)"
          layout="below-with-space"
          titleVisibility="false"
          borderStyle="rounded">
          bookmark
        </IconButton>
      </div>
      <div
        class="button button-share {allow_share ? 'active' : ''}"
        data-cy-footernav-share>
        <IconButton
          icon="share"
          scale="1.8rem"
          backgroundColor="var(--blue-dark-500)"
          backgroundColorHover="var(--blue-dark)"
          layout="below-with-space"
          titleVisibility="false"
          borderStyle="rounded">
          share
        </IconButton>
      </div>

    </div>
  {:else}
    <footer class="info">
      <small>
        <a
          class="info-extended"
          href="https://github.com/diverent2/flagfinder/blob/master/CHANGELOG.md">
          {version}
        </a>
        ©{year}
      </small>
      <div>
        <span class="info-extended">Made with 💖</span>
        by
        <a href="https://twitter.com/diverent2">diverent2</a>
      </div>
    </footer>
  {/if}
</nav>

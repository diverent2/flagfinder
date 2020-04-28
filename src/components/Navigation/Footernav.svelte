<script>
  import IconButton from "../Elements/IconButton.svelte";
  export let version;
  export let year;
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

  .info {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: var(--spacing-small);
    text-align: right;

    .info-extended {
      display: none;

      @media (min-width: 400px) {
        display: inline;
      }
    }
  }
</style>

<div class="footernav">
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
  <footer class="info">
    <div>
      <span class="info-extended">Made with 💖</span>
      by
      <a href="https://twitter.com/diverent2">diverent2</a>
    </div>
    <small>
      <a
        class="info-extended"
        href="https://github.com/diverent2/flagfinder/blob/master/CHANGELOG.md">
        {version}
      </a>
      ©{year}
    </small>
  </footer>
</div>

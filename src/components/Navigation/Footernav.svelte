<script>
  import IconButton from "../Elements/IconButton.svelte";
  export let version = "";
  export let year = "";
</script>

<style>
  .footernav {
    width: 100%;
    height: 8rem;
    position: fixed;
    bottom: 0;
    padding: 1rem;
    color: var(--white);
    z-index: 1000;
  }

  .footernav__background {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100vw;
    pointer-events: none;
    z-index: -1;
  }

  .footernav__main {
    position: relative;
    display: inline-block;
  }

  .footernav__main-search {
    height: 8rem;
    width: 8rem;
    display: inline-block;
  }

  .footernav__main-home {
    position: absolute;
    right: 5px;
    transform: translateX(50px);
    bottom: 25px;
  }

  .footernav__info {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: var(--spacing-small);
    text-align: right;
  }

  .footernav__info--extended {
    display: none;
  }

  @media screen and (min-width: 380px) {
    .footernav__info--extended {
      display: inline;
    }
  }
</style>

<div class="footernav">
  <img
    class="footernav__background"
    src="wave--darkblue.svg"
    alt
    aria-hidden="true" />
  <div class="footernav__main">
    <a class="footernav__main-search" href="/search">
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
    <a href="/" class="footernav__main-home">
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
  <footer class="footernav__info">
    <div>
      <span class="footernav__info--extended">Made with 💖</span>
      by
      <a href="https://twitter.com/diverent2">diverent2</a>
    </div>
    <small>
      <span class="footernav__info--extended">{version}</span>
      ©{year}
    </small>
  </footer>
</div>

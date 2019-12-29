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
    height: 8rem;
    width: 8rem;
    display: inline-block;
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

  @media screen and (min-width: 320px) {
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

  <a class="footernav__main" href="/index">
    <IconButton
      icon="search"
      scale="4rem"
      titleVisibility="false"
      layout="below"
      borderStyle="round">
      search
    </IconButton>
  </a>
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

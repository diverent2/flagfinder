<script>
  import RoundButton from "./../Elements/Buttons/RoundButton.svelte";
  import Mainnav from "./Navcontext/Mainnav.svelte";

  export let version;
  export let year;

  export let segment;
</script>

<style lang="scss">
  @import "../../../styles/z-index";

  .footernav {
    width: 100%;
    height: 8rem;
    position: fixed;
    bottom: 0;
    padding: 1rem;
    color: var(--white);
    z-index: $z-index-footernav;

    .background {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
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

    .main-bookmark {
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

    animation: {
      name: reveal-footer-info;
      duration: 0.3s;
      fill-mode: forwards;
    }

    .info-extended {
      display: none;

      @media (min-width: 380px) {
        display: inline;
      }
    }
  }

  @keyframes reveal-footer-info {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<nav class="footernav" data-cy-navigation-footer>
  <svg class="background" aria-hidden="true">
    <use href="waves/wave-darkblue.svg#wave-darkblue" />
  </svg>
  <div class="main">
    <a class="main-search" href="/" data-cy-footernav-button="search">
      <RoundButton
        icon="search"
        scale="4rem"
        colorBackground="var(--blue-dark)"
        colorBackgroundHover="var(--blue)"
        showBorder="true">
        search
      </RoundButton>
    </a>
    <a
      href="/bookmarks"
      class="main-bookmark"
      data-cy-footernav-button="bookmarks">
      <RoundButton
        icon="bookmark"
        scale="1.7rem"
        colorBackground="var(--blue-dark)"
        colorBackgroundHover="var(--blue)">
        bookmarks
      </RoundButton>
    </a>
  </div>
  {#if segment === undefined}
    <!--search = "/"-->
    <Mainnav />
  {:else if segment === 'flag'}
    <!--keep empty-->
  {:else}
    <footer class="info" data-cy-footernav-option="footer">
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
        <a rel="external" href="https://twitter.com/diverent2" target="_blank">
          diverent2
        </a>
      </div>
    </footer>
  {/if}
</nav>

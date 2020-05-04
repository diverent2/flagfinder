<script>
  import RoundButton from "./../Elements/Buttons/RoundButton.svelte";
  import Mainnav from "./Navcontext/Mainnav.svelte";

  export let version;
  export let year;

  export let segment;
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

      @media (min-width: 380px) {
        display: inline;
      }
    }
  }
</style>

<nav class="footernav" data-cy-navigation-footer>
  <img class="background" src="wave--darkblue.svg" alt aria-hidden="true" />
  <div class="main">
    <a class="main-search" href="/search">
      <RoundButton
        icon="search"
        scale="4rem"
        colorBackground="var(--blue-dark)"
        colorBackgroundHover="var(--blue)"
        showBorder="true">
        search
      </RoundButton>
    </a>
    <a href="/" class="main-home">
      <RoundButton
        icon="home"
        scale="1.7rem"
        colorBackground="var(--blue-dark)"
        colorBackgroundHover="var(--blue)">
        home
      </RoundButton>
    </a>
  </div>
  {#if segment == 'search'}
    <Mainnav />
  {:else if segment == 'flag'}
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
        <a href="https://twitter.com/diverent2">diverent2</a>
      </div>
    </footer>
  {/if}
</nav>

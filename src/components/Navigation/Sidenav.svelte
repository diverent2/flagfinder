<script>
  import RoundButton from "./../Elements/Buttons/RoundButton.svelte";

  export let version;
  export let year;
</script>

<style lang="scss">
  @import "../../../styles/z-index";
  .sidenav {
    top: 0;
    position: fixed;
    width: 200px;
    height: 100vh;
    z-index: $z-index-sidenav;

    .background {
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      pointer-events: none;
      z-index: -1;
    }
  }

  .primary {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .primary-bookmark {
      position: absolute;
      right: 50px;
      top: 160px;
    }
  }

  .secondary {
    margin: var(--spacing-small);
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
  }

  .info {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 0.75rem;
    color: var(--white);
    width: 100%;
    padding: var(--spacing-small);
  }

  a {
    text-decoration: none;
  }

  footer a {
    text-decoration: underline;
  }

  a.main {
    display: inline-block;
    margin-top: 10%;
    height: 13rem;
    width: 13rem;
    transform: translateX(-3rem);
  }
</style>

<nav class="sidenav" data-cy-navigation-side>
  <svg class="background" aria-hidden="true">
    <use href="waves/wave-right.svg#wave-right" />
  </svg>
  <div class="primary">
    <a class="main" href="/" data-cy-sidenav-button="search">
      <RoundButton
        icon="search"
        scale="5rem"
        colorBackground="var(--blue-dark)"
        colorBackgroundHover="var(--blue-dark-500)"
        showBorder="true">
        search
      </RoundButton>
    </a>
    <a
      href="/bookmarks"
      class="primary-bookmark"
      data-cy-sidenav-button="bookmarks">
      <RoundButton
        icon="bookmark"
        scale="2rem"
        colorBackground="var(--blue-dark)"
        colorBackgroundHover="var(--blue-dark-500)">
        bookmarks
      </RoundButton>
    </a>
  </div>
  <div class="secondary">
    <a href="/about" data-cy-sidenav-button="about">
      <RoundButton
        icon="about"
        scale="1.4rem"
        colorBackground="var(--blue)"
        colorBackgroundHover="var(--blue-dark)"
        showLabel="true">
        about
      </RoundButton>
    </a>
    <a href="/settings" data-cy-sidenav-button="settings">
      <RoundButton
        icon="settings"
        scale="1.4rem"
        colorBackground="var(--blue)"
        colorBackgroundHover="var(--blue-dark)"
        showLabel="true">
        settings
      </RoundButton>
    </a>
  </div>
  <footer class="info" data-cy-navigation-footer>
    <div>
      <span>Made with 💖</span>
      by
      <a rel="external" href="https://twitter.com/diverent2" target="_blank">
        diverent2
      </a>
    </div>
    <small>
      <a
        rel="external"
        href="https://github.com/diverent2/flagfinder/blob/master/CHANGELOG.md"
        target="_blank">
        {version}
      </a>
      ©{year}
    </small>
  </footer>
</nav>

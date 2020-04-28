<script>
  import IconButton from "../Elements/IconButton.svelte";

  export let version;
  export let year;
</script>

<style lang="scss">
  .sidenav {
    top: 0;
    position: fixed;
    width: 200px;
    height: 100vh;
    z-index: 10;

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

    .primary-home {
      position: absolute;
      right: 40px;
      top: 210px;
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

<nav class="sidenav">
  <img class="background" src="wave--right.svg" alt aria-hidden="true" />
  <div class="primary">
    <a class="main" href="/search">
      <IconButton
        icon="search"
        scale="5rem"
        backgroundColor="var(--blue-dark)"
        backgroundColorHover="var(--blue-dark-500)"
        titleVisibility="false"
        layout="below"
        border="true"
        borderStyle="round">
        search
      </IconButton>
    </a>
    <a href="/" class="primary-home">
      <IconButton
        icon="home"
        scale="2rem"
        fontSize="0.8rem"
        backgroundColor="var(--blue)"
        backgroundColorHover="var(--blue-dark)"
        layout="below-with-space"
        borderStyle="round"
        titleVisibility="false">
        home
      </IconButton>
    </a>
  </div>
  <div class="secondary">
    <a href="/about">
      <IconButton
        icon="about"
        scale="1.4rem"
        fontSize="0.8rem"
        backgroundColor="var(--blue)"
        backgroundColorHover="var(--blue-dark)"
        layout="below-with-space"
        borderStyle="rounded">
        about
      </IconButton>
    </a>
    <a href="/settings">
      <IconButton
        icon="settings"
        scale="1.4rem"
        fontSize="0.8rem"
        backgroundColor="var(--blue)"
        backgroundColorHover="var(--blue-dark)"
        layout="below-with-space"
        borderStyle="rounded">
        settings
      </IconButton>
    </a>
  </div>

  <footer class="info">
    <div>
      <span>Made with 💖</span>
      by
      <a href="https://twitter.com/diverent2">diverent2</a>
    </div>
    <small>
      <a
        href="https://github.com/diverent2/flagfinder/blob/master/CHANGELOG.md">
        {version}
      </a>
      ©{year}
    </small>
  </footer>
</nav>

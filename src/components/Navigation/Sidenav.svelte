<script>
  import IconButton from "../Elements/IconButton.svelte";

  const versionNumber = "ALPHA VERSION 0.2 ©2019";
</script>

<style>
  .sidenav {
    top: 0;
    position: fixed;
    width: 200px;
    height: 100vh;
    z-index: 1;
  }

  .sidenav__background {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .sidenav__primary {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sidenav__secondary {
    margin: var(--spacing-small);
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
  }

  .sidenav__info {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 0.75rem;
    color: var(--white);
    width: 100%;
    padding: var(--spacing-small);
  }

  a[href*="search"],
  a[href*="about"],
  a[href*="settings"] {
    text-decoration: none;
  }

  a[href*="search"] {
    display: inline-block;
    margin-top: 10%;
    height: 13rem;
    width: 13rem;
    transform: translateX(-3rem);
  }
</style>

<nav class="sidenav">
  <img
    class="sidenav__background"
    src="wave--right.svg"
    alt
    aria-hidden="true" />
  <div class="sidenav__primary">
    <a href="/search">
      <IconButton
        icon="search"
        scale="5rem"
        titleVisibility="false"
        layout="below"
        borderStyle="round">
        search
      </IconButton>
    </a>
    <div class="sidenav__secondary">
      <a href="/about">
        <IconButton
          icon="about"
          backgroundColor="var(--blue)"
          fontSize="1rem"
          layout="below-with-space"
          borderStyle="rounded">
          about
        </IconButton>
      </a>
      <a href="/settings">
        <IconButton
          icon="settings"
          backgroundColor="var(--blue)"
          fontSize="1rem"
          layout="below-with-space"
          borderStyle="rounded">
          settings
        </IconButton>
      </a>
    </div>
  </div>

  <div class="sidenav__info">
    <div>
      Made with 💖 by
      <a href="https://twitter.com/diverent2">diverent2</a>
    </div>
    <div>{versionNumber}</div>
  </div>
</nav>

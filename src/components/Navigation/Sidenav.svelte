<script>
  import IconButton from "../Elements/IconButton.svelte";

  const versionNumber = "ALPHA VERSION 0.2 ©2019";
</script>

<style>
  .sidenav {
    top: 0;
    position: fixed;
    height: 100vh;
    padding: var(--spacing-large);
    background: var(--blue);
    z-index: 1;
  }

  .sidenav__primary {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sidenav__secondary {
    display: flex;
    justify-content: space-between;
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
    height: 150px;
    width: 150px;
    transform: translateX(-2.5rem);
  }
</style>

<nav class="sidenav">
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

<script>
  import IconButton from "../components/IconButton.svelte";

  const versionNumber = "v0.9 ©2019";
</script>

<style>
  nav {
    max-width: 230px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }
  .button {
    box-sizing: border-box;
    padding: var(--spacing-small);

    background: var(--blue-dark);
  }
  .button--round {
    border-radius: 50%;
  }

  .button__search {
    width: 128px;
    height: 128px;

    margin-bottom: 2rem;

    color: var(--white);

    align-self: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-decoration: none;
  }

  .buttton__bookmarks {
    margin-bottom: 1rem;
  }

  .navButtons--special {
    display: flex;
  }

  .navButtons--special .buttton__about {
    width: 100%;
    margin-right: 1rem;
  }

  .button__settings {
    display: block;
    width: 40px;
    height: 40px;
  }
  .button__settings img {
    height: var(--spacing-large);
  }

  footer {
    width: 100vw;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    padding: var(--spacing-large);
    color: var(--white);
  }

  .footer__background {
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 0;
  }

  .footer__background--back {
    transform: scaleX(-1);
  }

  .footer__links {
    display: flex;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>🏳️‍🌈Prideflags | Home</title>
</svelte:head>

<header>
  <h1>Welcome to Prideflags.info</h1>
  <img src="https://via.placeholder.com/128" alt="LOGO" />
</header>

<nav>
  <a href="search" class="button button__search button--round">
    <img src="search.svg" alt="search icon" aria-hidden height="64" />
    <span>Search</span>
  </a>

  <a href="/bookmarks" class="buttton__bookmarks">
    <IconButton
      color="var(--blue-dark)"
      icon="bookmarks"
      height="var(--spacing-xlarge)">
      Bookmarks
    </IconButton>
  </a>

  <div class="navButtons--special">
    <a href="/about" class="buttton__about">
      <IconButton
        color="var(--blue-dark)"
        icon="about"
        height="var(--spacing-large)">
        About
      </IconButton>
    </a>

    <a
      class="button button__settings button--round"
      href="/settings"
      aria-label="settings">
      <img src="icons/settings.svg" alt aria-hidden="true" />
    </a>
  </div>
</nav>

<footer>
  <img
    class="footer__background footer__background--front"
    src="wave--darkblue.svg"
    alt
    aria-hidden="true" />
  <img
    class="footer__background footer__background--back"
    src="wave.svg"
    alt
    aria-hidden="true" />
  <div class="footer__links">
    <span>Made by @diverent2</span>
    <span>{versionNumber}</span>
  </div>
</footer>

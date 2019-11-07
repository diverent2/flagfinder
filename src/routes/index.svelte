<script>
  import IconButton from "../components/Elements/IconButton.svelte";

  const versionNumber = "ALPHA VERSION 0.2 ©2019";
</script>

<style>
  header {
    padding: 1rem;

    display: flex;
    justify-content: space-between;
  }

  header .header-image__background {
    width: 128px;
    height: 128px;
    padding: var(--spacing-small);

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--blue);
    border-radius: 50%;
  }

  h1 {
    color: var(--white);
    width: min-content;
    margin-left: 3rem;
  }

  nav {
    max-width: 230px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }
  .button {
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

  .button__search h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  /*   .buttton__bookmarks {
    margin-bottom: 1rem;
  } */

  .navButtons--special {
    display: flex;
  }

  .navButtons--special .buttton__about {
    width: 100%;
    /*   margin-right: 1rem; */
  }

  /*   .button__settings {
    display: block;
    width: 40px;
    height: 40px;
  }
  .button__settings img {
    height: var(--spacing-large);
  } */

  footer {
    width: 100vw;
    position: absolute;
    bottom: 0;
    padding: var(--spacing-large);
    color: var(--white);
  }

  .header__background,
  .footer__background {
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 0;
  }

  .header__background {
    top: 0;
    transform: rotateX(180deg) rotateY(180deg);
  }

  .footer__background--back {
    transform: scaleX(-1);
  }

  .footer__links {
    display: flex;
    justify-content: space-between;
  }

  .banner__container {
    font-size: 0.8rem;
    position: absolute;
    left: -3rem;
    top: 2rem;
    opacity: 0.8;
    pointer-events: none;
  }

  .banner {
    padding: 0.3rem 3rem;
    background: var(--white);
    transform: rotateZ(-45deg);
    box-shadow: var(--box-shadow);
  }

  .buttton__about {
    display: flex;
    justify-content: center;
  }
  .buttton__about h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  .discaimer_desktop {
    text-align: center;
    color: var(--white);
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .discaimer_desktop {
      display: block;
    }
  }
</style>

<svelte:head>
  <title>Home | Prideflags.info</title>
</svelte:head>

<header>
  <img
    class="header__background"
    src="wave--darkblue.svg"
    alt
    aria-hidden="true" />
  <h1>Welcome to Prideflags.info</h1>
  <a href="/">
    <img
      class="header-image__background"
      src="flagfinder-logo.png"
      alt="LOGO"
      aria-hidden
      height="128" />
  </a>
</header>

<aside class="banner__container">
  <div class="banner">
    <span>ALPHA VERSION</span>
  </div>
</aside>

<nav>
  <a href="search" class="button button__search button--round">
    <img src="icons/search.svg" alt="search icon" aria-hidden height="64" />
    <h2>Search</h2>
  </a>

  <!--   <a href="/bookmarks" class="buttton__bookmarks">
    <IconButton
      color="var(--blue-dark)"
      icon="bookmarks"
      height="var(--spacing-xlarge)">
      Bookmarks
    </IconButton>
  </a> -->

  <div class="navButtons--special">
    <a href="/about" class="buttton__about">
      <IconButton
        color="var(--blue-dark)"
        icon="about"
        height="var(--spacing-large)">
        <h2>About</h2>
      </IconButton>
    </a>

    <!--     <a
      class="button button__settings button--round"
      href="/settings"
      aria-label="settings">
      <img src="icons/settings.svg" alt aria-hidden="true" />
    </a> -->
  </div>
</nav>

<aside class="discaimer_desktop">
  <p>Desktop version coming soon</p>
</aside>

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
    <span>
      Made with 💖 by
      <a href="https://twitter.com/diverent2">diverent2</a>
    </span>
    <span>{versionNumber}</span>
  </div>
</footer>

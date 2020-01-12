<script>
  import IconButton from "../components/Elements/IconButton.svelte";

  const versionNumber = "ALPHA VERSION 0.3.1 ©2019";
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

  .button__search {
    width: 128px;
    height: 128px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }

  .button__search h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  .navButtons--special {
    display: flex;
  }

  .navButtons--special .button__about {
    width: 100%;
  }

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

  .button__about {
    display: flex;
    justify-content: center;
  }
  .button__about h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  .superSecretLink {
    position: absolute;
    font-size: 0;
    top: 0;
    left: 0;
    width: 4px;
    height: 4px;
    cursor: default;
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

<a href="/add" class="superSecretLink">Add Flag</a>
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
  <a href="search" class="button button__search">
    <IconButton
      backgroundColor="var(--blue-dark)"
      icon="search"
      scale="64px"
      layout="below"
      borderStyle="round">
      <h2>Search</h2>
    </IconButton>
  </a>

  <div class="navButtons--special">
    <a href="/about" class="button__about">
      <IconButton
        backgroundColor="var(--blue-dark)"
        icon="about"
        scale="var(--spacing-large)">
        <h2>About</h2>
      </IconButton>
    </a>

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

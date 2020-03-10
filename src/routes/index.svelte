<script>
  import IconButton from "../components/Elements/IconButton.svelte";

  const versionNumber = "alpha v. 0.5";
  const copyright = "©2020";
</script>

<style lang="scss">
  h1 {
    color: var(--white);
    width: min-content;
    margin-left: 3rem;
  }

  header {
    padding: 1rem;

    display: flex;
    justify-content: space-between;

    .header_background {
      top: 0;
      transform: rotateX(180deg) rotateY(180deg);
    }

    .header-image_background {
      width: 128px;
      height: 128px;
      padding: var(--spacing-small);

      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--blue);
      border-radius: 50%;
    }
  }

  nav {
    max-width: 230px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }

  .searchButton {
    width: 128px;
    height: 128px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    text-decoration: none;

    h2 {
      margin: 0;
      font-size: 1.5rem;
    }
  }

  .secondaryButtons {
    display: flex;
    .aboutButton {
      width: 100%;
      display: flex;
      justify-content: center;
      text-decoration: none;
      h2 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }

  .header_background,
  .footer_background {
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 0;
  }

  footer {
    width: 100vw;
    position: absolute;
    bottom: 0;
    padding: var(--spacing-large);
    color: var(--white);

    .footer_background-back {
      transform: scaleX(-1);
    }
  }

  .footer_links {
    display: flex;
    justify-content: space-between;
  }

  .versionBanner_container {
    font-size: 0.8rem;
    position: absolute;
    left: -3rem;
    top: 2rem;
    opacity: 0.8;
    pointer-events: none;

    .versionBanner {
      padding: 0.3rem 3rem;
      background: var(--white);
      transform: rotateZ(-45deg);
      box-shadow: var(--box-shadow);
    }
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
    @media (--medium-up) {
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
    class="header_background"
    src="wave--darkblue.svg"
    alt
    aria-hidden="true" />
  <h1>Welcome to Prideflags.info</h1>
  <a href="/">
    <img
      class="header-image_background"
      src="flagfinder-logo.png"
      alt="LOGO"
      aria-hidden
      height="128" />
  </a>
</header>

<aside class="versionBanner_container">
  <div class="versionBanner">
    <span>ALPHA VERSION</span>
  </div>
</aside>

<nav>
  <a href="search" class="searchButton" data-cy-button-search>
    <IconButton
      backgroundColor="var(--blue-dark)"
      icon="search"
      scale="64px"
      layout="below"
      borderStyle="round">
      <h2>Search</h2>
    </IconButton>
  </a>

  <div class="secondaryButtons">
    <a href="/about" class="aboutButton" data-cy-button-about>
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
    class="footer_background footer_background-front"
    src="wave--darkblue.svg"
    alt
    aria-hidden="true" />
  <img
    class="footer_background footer_background-back"
    src="wave.svg"
    alt
    aria-hidden="true" />
  <div class="footer_links">
    <span>
      Made with 💖 by
      <a href="https://twitter.com/diverent2">diverent2</a>
    </span>
    <div>
      <a
        href="https://github.com/diverent2/flagfinder/blob/master/CHANGELOG.md">
        {versionNumber}
      </a>
      <span>{copyright}</span>
    </div>
  </div>
</footer>

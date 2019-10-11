<script>
  const versionNumber = "ALPHA VERSION 0.2 ©2019";
</script>

<style>
  footer {
    height: 10rem;

    position: sticky;
    bottom: 0;

    padding: 1rem;
    color: var(--white);

    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    background-image: url("../wave--darkblue.svg");
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 30px;
    background-size: cover;

    z-index: 1000;
  }

  .footer__home {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 65%;
    bottom: 0;
  }

  .footer__links {
    width: 100%;
    text-align: end;
  }

  .logo {
    width: 100px;
    height: 100px;
    padding: var(--spacing-small);

    background: var(--blue);
    border-radius: 50%;
    box-sizing: border-box;
  }
</style>

<footer>
  <a href="/" class="footer__home">
    <span>Home</span>
    <img
      class="logo"
      src="flagfinder-logo.png"
      alt="LOGO"
      aria-hidden
      height="128" />
  </a>
  <div class="footer__links">
    <span>
      Made with 💖 by
      <a href="https://twitter.com/diverent2">diverent2</a>
    </span>
    <div>
      <smalL>{versionNumber}</smalL>
    </div>
  </div>
</footer>

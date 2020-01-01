<script>
  export let backLink = "/";
</script>

<style>
  header {
    position: fixed;
    width: 100vw;
    height: 120px;
    padding: 1rem;
    color: var(--white);
    text-align: center;
    z-index: 1;

    display: grid;
    grid-template:
      "back ." max-content
      "title title" 1fr
      / 1fr 1fr;
  }

  @media only screen and (min-width: 650px) and (min-height: 450px) {
    header {
      right: 0;
      width: calc(100vw - 150px);
    }
    .header__goBack {
      transform: translateX(40px);
    }
  }

  .header__background {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .header__goBack {
    grid-area: back;
    width: max-content;
  }

  .ico-arrowBack {
    width: 1.5rem;
    height: 1.5rem;
    transition: color 0.2s ease;
  }

  .ico-arrowBack:hover {
    color: var(--blue-light);
  }

  h1 {
    grid-area: title;
    display: block;
    position: relative;
    top: -10px;
  }
</style>

<header>
  <img class="header__background" src="wave--top.svg" alt aria-hidden="true" />
  <a href={backLink} class="header__goBack">
    <svg
      class="ico-arrowBack"
      aria-label="Go back to search"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <use href="icons/arrow-back.svg#arrow-back" />
    </svg>
  </a>
  <h1>
    <slot />
  </h1>
</header>

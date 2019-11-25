<script>
  export let backLink = "/";
</script>

<style>
  header {
    position: sticky;
    top: 0;
    width: 100vw;
    padding: 1rem;
    color: var(--white);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background: var(--blue);
    text-align: center;
    z-index: 1;

    display: grid;
    grid-template:
      "back ." max-content
      "title title" 1fr
      / 1fr 1fr;
  }

  h1 {
    grid-area: title;
  }

  .header__goBack {
    grid-area: back;
    width: max-content;
  }

  .ico-arrowBack {
    width: 1rem;
    height: 1rem;
    transition: color 0.2s ease;
  }

  .ico-arrowBack:hover {
    color: var(--green-light);
  }
</style>

<header>
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

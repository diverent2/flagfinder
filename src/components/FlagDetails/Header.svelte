<script>
  export let flag;
</script>

<style>
  h1 {
    text-transform: capitalize;
  }
  .flagDetails__header {
    width: 100vw;
    height: 25vh;
    padding: var(--spacing);

    top: 0;
    position: sticky;

    display: flex;
    justify-content: space-around;

    color: var(--white);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background: var(--blue);
    transition: height 0.3s ease;
  }

  .flagDetails__headerImage {
    width: 125px;
    height: auto;

    align-self: flex-start;

    border: var(--white) 2px solid;
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

<header class="flagDetails__header">
  <div>
    <a href="./search">
      <svg
        class="ico-arrowBack"
        aria-label="Go back to search"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <use href="icons/arrow-back.svg#arrow-back" />
      </svg>
    </a>

    <h1>{flag.name} flag</h1>
  </div>
  <img
    class="flagDetails__headerImage"
    src="flags/{flag.image}"
    alt="{flag.name} flag" />
</header>

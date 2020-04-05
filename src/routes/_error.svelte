<script>
  import Footer from "./../components/Footer.svelte";
  import Header from "./../components/Header.svelte";

  import IconButton from "../components/Elements/IconButton.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  .button--back {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    color: var(--white);
    text-decoration: none;
  }

  .button--back a {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>{status} {error.message} | Prideflags.info</title>
</svelte:head>

<Header>
  Error {status}
  <hr />
  {error.message}
</Header>

<div class="container">

  {#if status === 404}
    <p>
      Whoops! The page you were looking for doesn't seem to exist...😳
      <br />
      That's kind of awkward...
      <br />
      <br />
      Ok how about this: You
      <a a href="./">go back to the frontpage</a>
      and pretend this never happened, ok?
      <br />
      <br />
      Deal? 🙈
    </p>
    <br />
  {:else}
    <p>Oh no! Something went wrong here 😳</p>
  {/if}

  <div class="button--back" data-cy-error-button-back>
    👉
    <a href="./">
      <IconButton scale="var(--spacing)" icon="arrow-back">
        back to main page
      </IconButton>
    </a>
    👈
  </div>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}

</div>

<Footer />

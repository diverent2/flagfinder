<script>
  import Header from "./../components/Header.svelte";
  import Navigation from "./../components/Navigation/Navigation.svelte";

  import IconButton from "../components/Elements/IconButton.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  .container {
    padding: 2rem;
    margin-bottom: 8rem;
    padding-top: 120px;
  }

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
  <meta
    name="description"
    content="Normally you would see fantastic prideflags of queer folx here...
    But something went wrong. Lets try this again, ok?" />
</svelte:head>

<Header backLink="/">{status} | {error.message}</Header>
<Navigation />

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
      <IconButton scale="var(--spacing)" icon="arrow-back-white">
        back to main page
      </IconButton>
    </a>
    👈
  </div>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}

</div>

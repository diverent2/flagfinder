<script>
  import { app_name } from "../data/global.js";

  import Header from "./../components/Header.svelte";

  import LabelButton from "../components/Elements/Buttons/LabelButton.svelte";

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
  <title>{status} {error.message} | {app_name}</title>
  <meta
    name="description"
    content="Normally you would see fantastic prideflags of queer folx here...
    But something went wrong. Lets try this again, ok?" />
</svelte:head>

<Header backLink="/">{status} | {error.message}</Header>

<div class="container container-padding-top">

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
      <LabelButton scale="var(--spacing)" icon="arrow-back">
        back to main page
      </LabelButton>
    </a>
    👈
  </div>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}

</div>

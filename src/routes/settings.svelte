<script>
  import { app_name, app_baseUrl } from "../data/global.js";

  import Metainfos from "./../components/Helpers/Metainfos.svelte";
  import Header from "./../components/Header.svelte";

  const meta = {
    title: `Settings | ${app_name}`,
    desc: `Customize your ${app_name} experience here.`,
    url: `${app_baseUrl}/settings`,
    image: `${app_baseUrl}/socialcards/search.png`
  };
</script>

<style>
  .anchor {
    scroll-margin-top: 120px;
  }

  h2,
  h3 {
    margin-top: 0.5rem;
    text-decoration-line: underline;
    text-transform: capitalize;
  }

  h2 {
    text-decoration-thickness: 3px;
  }

  h3 {
    text-decoration-thickness: 1px;
  }

  section {
    margin-bottom: 3rem;
  }

  section:last-of-type {
    margin-bottom: 0;
  }
</style>

<Metainfos {...meta} />

<Header backLink="/">Settings</Header>

<div class="container container-padding-top">
  <h2 class="text--center">Coming soon</h2>
</div>

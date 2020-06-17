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
  h2 {
    margin-top: 0.5rem;
  }
</style>

<Metainfos {...meta} showInSearch="false" />

<Header backLink="/">Settings</Header>

<div class="container container-padding-top">
  <section>
    <h2 class="text--center">Coming soon</h2>
    <p>
      Soon you will find settings to control your cookie consent, saved flags
      and much more here.
    </p>
    <p>
      But for now, you'll have to wait a little longer, or, if you are feeling
      adventurous, consider
      <a href="/about/#contribute">contributing here</a>
    </p>
  </section>
</div>

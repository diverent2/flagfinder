<script>
  import { app_name, app_baseUrl } from "../data/global.js";

  import Metainfos from "./../components/Helpers/Metainfos.svelte";
  import Header from "./../components/Header.svelte";

  const meta = {
    title: `Bookmarks | ${app_name}`,
    desc: `See all of your favortite prideflags in one place!`,
    url: `${app_baseUrl}/bookmarks`,
    image: `${app_baseUrl}/socialcards/search.png`
  };
</script>

<style>
  h2 {
    margin-top: 0.5rem;
  }
</style>

<Metainfos {...meta} showInSearch="false" />

<Header backLink="/">Bookmarks</Header>

<div class="container container-padding-top">
  <section>
    <h2 class="text--center">Coming soon</h2>
    <p>
      You've found your favortite flag and don't want to forget what it was
      called again? Soon you'll have to look no further than this very page
      where all your beloved (or the ones you just keep forgetting the name of)
      flags can be found.
    </p>
    <p>
      But sadly for now, you'll have to wait a little longer, or, if you are
      feeling adventurous, you can speed up this process by
      <a href="/about/#contribute">contributing</a>
    </p>
  </section>
</div>

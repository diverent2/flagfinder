<script context="module">
  // (optional) preload function takes
  //`{ path, params, query }` object and turns it into
  // page reder data
  export async function preload(page, session) {
    // created from file name [id].svelte
    const { id } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // to make credentialled requests on both
    // server and client
    const res = await this.fetch(`flag/${id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { flag: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import _startCase from "lodash/startCase";
  import MediaQuery from "svelte-media-query/src/MediaQuery.svelte";

  import { app_name, app_baseUrl, matchMedia } from "../../data/global.js";

  import Metainfos from "./../../components/Helpers/Metainfos.svelte";
  import Header from "./../../components/FlagDetails/Header.svelte";
  import General from "./../../components/FlagDetails/General.svelte";
  import Details from "./../../components/FlagDetails/Details.svelte";

  export let flag;

  const flagName = `${flag.name}`;
  const meta = {
    title: _startCase(flagName) + ` Flag | ${app_name}`,
    desc: `Find out what the ${flag.name} flag and its colors stands for, who created it and much, much more!`,
    url: `${app_baseUrl}/flag/${flag.id}`,
    image: `${app_baseUrl}/flags/${flag.image}`
  };

  // add valid keyword
  flag.keywords.push("valid");

  let activeTab;
</script>

<style>
  main.container {
    margin-top: 250px;
  }

  @media (--medium-up) {
    main.container {
      width: calc(100% - 200px);
    }
  }

  .subcontainer {
    margin: 0 auto;
    max-width: 800px;
  }
</style>

<Metainfos {...meta} />

<Header {flag} bind:activeTab />

<main class="container">
  <div class="subcontainer">
    <MediaQuery query={matchMedia.medium_down} let:matches>
      {#if matches}
        {#if activeTab === 1}
          <General {flag} />
        {:else}
          <Details {flag} />
        {/if}
      {:else}
        <General {flag} />
        <Details {flag} />
      {/if}
    </MediaQuery>
  </div>
</main>

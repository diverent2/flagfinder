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
    image: generateOGImagePath()
  };

  function generateOGImagePath() {
    let imageSrc = flag.image;
    const isSVG = /.svg$/;
    if(imageSrc.match(isSVG)) {
      imageSrc = imageSrc.replace(".svg",".png");
    } else {
    }
    return `${app_baseUrl}/flags/${imageSrc}`
  }

  // add valid keyword
  flag.keywords.push("valid");

  let activeTab;
</script>

<style>
  main.container {
    margin-top: 300px;
  }

  @media (--medium-up) {
    main.container {
      width: calc(100% - 200px);
    }
  }

  @media (--large-up) {
    main.container {
      width: calc(100% - 200px);
    }
    main.container {
      margin-top: 150px;
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
  <div class="subcontainer" aria-live="polite">
    <div class="hide-for-medium_up">
      {#if activeTab === 1}
        <General {flag} />
      {:else}
        <Details {flag} />
      {/if}
    </div>
    <div class="show-for-medium_up">
      <General {flag} />
      <Details {flag} />
    </div>
  </div>
</main>

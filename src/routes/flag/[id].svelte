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
  import { app_name, app_baseUrl } from "../../components/global.js";

  import Header from "./../../components/FlagDetails/Header.svelte";
  import General from "./../../components/FlagDetails/General.svelte";
  import Details from "./../../components/FlagDetails/Details.svelte";

  import Footer from "./../../components/Footer.svelte";

  export let flag;

  const flagName = `${flag.name}`;

  const meta = {
    title: _startCase(flagName) + ` Flag | ${app_name}`,
    desc: `Find out the meaning of the colors, the origin and much more about the ${flag.name} flag here on ${app_name}!`,
    url: `${app_baseUrl}/flag/${flag.id}`,
    image: `${app_baseUrl}/flags/${flag.image}`
  };

  // add valid keyword
  flag.keywords.push("valid");

  let activeTab = 1;
</script>

<style lang="scss">
  main {
    margin-top: 25vh;
  }

  @media (--medium-up) {
    main {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.desc} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={meta.url} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.desc} />
  <meta property="og:image" content={meta.image} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={meta.url} />
  <meta property="twitter:title" content={meta.title} />
  <meta property="twitter:description" content={meta.desc} />
  <meta property="twitter:image" content={meta.image} />
</svelte:head>

<Header {flag} bind:activeTab />

<main>
  {#if activeTab === 1}
    <General {flag} />
  {:else}
    <Details {flag} />
  {/if}
</main>

<Footer />

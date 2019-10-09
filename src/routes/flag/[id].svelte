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
  import Header from "./../../components/FlagDetails/Header.svelte";
  import General from "./../../components/FlagDetails/General.svelte";
  import Details from "./../../components/FlagDetails/Details.svelte";

  export let flag;
</script>

<style>
  main {
    padding: 1rem;
  }
</style>

<svelte:head>
  <title>{flag.name} flag • details | Prideflags.info</title>
</svelte:head>

<Header {flag} />

<main>
  <General {flag} />
  <Details {flag} />
</main>

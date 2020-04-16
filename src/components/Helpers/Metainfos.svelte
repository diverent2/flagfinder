<script>
  import { app_name, app_baseUrl } from "../../data/global.js";

  export let title = `${app_name}`;
  export let desc = `Learn everything about the diversity of queer identities and their symbols in this large collection here on ${app_name}.`;
  export let url = `${app_baseUrl}`;
  export let image = `${app_baseUrl}/socialcards/search.png`;
  export let showInSearch = "true";
</script>

<!--HEADINFO-->
<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  {#if showInSearch === 'true'}
    <meta name="robots" content="index, follow" />
  {:else}
    <meta name="robots" content="noindex, nofollow" />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={desc} />
  <meta property="twitter:image" content={image} />

</svelte:head>

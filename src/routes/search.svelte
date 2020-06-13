<script>
  import { app_name, app_baseUrl } from "../data/global.js";
  import Metainfos from "./../components/Helpers/Metainfos.svelte";

  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  onMount(() => goto("/"));

  const meta = {
    title: `Search | ${app_name}`,
    desc:
      "Search for a variety of LGBTQ*+ Prideflags 🌈 using its Colors, Categories or a Searchterm.",
    url: `${app_baseUrl}/`,
    image: `${app_baseUrl}/socialcards/search.png`
  };
</script>

<Metainfos {...meta} />

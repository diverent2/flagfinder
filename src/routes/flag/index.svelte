<script context="module">
  export async function preload(page, session) {
    return this.redirect(308, "/");
  }
</script>

<script>
  import { app_name } from "../../data/global.js";
</script>

<svelte:head>
  <title>Redirecting | {app_name}</title>
</svelte:head>

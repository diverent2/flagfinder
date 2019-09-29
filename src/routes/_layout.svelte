<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    height: 100vh;
  }
</style>

<!--
<Nav {segment}/>
-->

<main>
  <slot />
</main>

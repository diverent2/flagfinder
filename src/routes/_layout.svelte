<script>
  import Navigation from "./../components/Navigation/Navigation.svelte";

  //standard way for layouts to export their page context
  export let segment;
</script>

<style lang="scss" global>
  /*⚠️ Imported files aren't watched and require a reload select
  * see https://github.com/kaisermann/svelte-preprocess/issues/8#issuecomment-423644816
  */
  @import "./styles/main.scss";

  main {
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
  }
</style>

<main>
  <Navigation {segment} />
  <slot />
</main>

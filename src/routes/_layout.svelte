<style lang="scss" global>
  /*⚠️ Imported files aren't watched and require a reload select
  * see https://github.com/kaisermann/svelte-preprocess/issues/8#issuecomment-423644816
  */
  @import "./styles/breakpoints.scss";

  main {
    width: 100vw;
    height: auto;
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
  }
</style>

<main>
  <slot />
</main>

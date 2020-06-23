<script>
  import FlagAlteration from "./FlagAlteration.svelte";

  export let flags;
</script>

<style>
  .flagAlterations {
    display: grid;
    grid-gap: var(--spacing-large);
  }
</style>

<div class="flagAlterations">
  {#each flags as flag}
    <FlagAlteration {flag} />
  {/each}
</div>

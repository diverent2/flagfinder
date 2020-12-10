<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  import _debounce from "lodash/debounce";

  import FlagCard from "./FlagCard.svelte";

  export let flags = [];

  onMount(() => {
    flags.forEach(flag => {
      flag.titleVisibility = true;
    });

    getCategoryVisibility();

    window.addEventListener(
      "resize",
      _debounce(() => {
        getCategoryVisibility();
      }, 250)
    );
  });

  // Check overflow for flag card categories to dynamically hide/show labels.
  function getCategoryVisibility() {
    const flagDetailsContainer = document.querySelectorAll(
      ".flagCard__details"
    );
    for (let i = 0; i < flags.length; i++) {
      let details = flagDetailsContainer[i];
      const categories = details.querySelector(".flagCard__categories");
      flags[i].titleVisibility = true;

      // make sure the prop titleVisibility is actually updated
      setTimeout(() => {
        if (categories.offsetWidth > details.offsetWidth) {
          flags[i].titleVisibility = false;
        }
      }, 1);
    }
  }
</script>

<style lang="scss">
  .flag-results {
    display: grid;
    grid-gap: var(--spacing);
    grid-template-columns: 100%; /*fix overflow*/
    justify-content: center;

    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (--small-up) {
    .flag-results {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
</style>

<div
  class="flag-results"
  aria-live="polite"
  aria-relevant="additions removals">
  {#if flags.length}
    {#each flags as flag, index (flag)}
      <div
        in:fly={{ duration: 200, x: 100 }}
        animate:flip={{ duration: 200, easing: quintOut }}
        out:fade={{ duration: 200 }}>
        <FlagCard {flag} titleVisibility={flag.titleVisibility} />
      </div>
    {/each}
  {:else}
    <p>No matching flags</p>
  {/if}
</div>

<script>
  export let withBorder = false;
  export let color;
</script>

<style>
  .ico-colorSpot {
    width: 1rem;
    height: 1.1rem;
  }
</style>

{#if !withBorder}
  <svg
    style="color: {color}"
    class="ico-colorSpot"
    viewBox="0 0 12 13"
    xmlns="http://www.w3.org/2000/svg">
    <use href="icons/color-spot.svg#color-spot" />
  </svg>
{:else}
  <svg
    style="color: {color}"
    class="ico-colorSpot"
    viewBox="0 0 12 13"
    xmlns="http://www.w3.org/2000/svg">
    <use href="icons/color-spot-with-frame.svg#color-spot" />
  </svg>
{/if}

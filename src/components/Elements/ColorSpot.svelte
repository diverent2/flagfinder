<script>
  export let withBorder = false;
  export let color;
</script>

<style>
  .colorSpot {
    width: 1rem;
    height: 1.1rem;
  }
</style>

<div class="colorSpot" style="color: {color}" data-cy-colorspot-color={color}>
  <svg
    viewBox="0 0 12 13"
    class="ico-colorSpot"
    xmlns="http://www.w3.org/2000/svg">
    {#if !withBorder}
      <use href="icons/color-spot.svg#color-spot" />
    {:else}
      <use href="icons/color-spot-with-frame.svg#color-spot" />
    {/if}
  </svg>
</div>

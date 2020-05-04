<script>
  export let icon = "search";
  export let color = "var(--white)";
  export let colorHover = color;
  export let scale = "1rem";
  export let aria = "";
</script>

<style>
  .icon {
    width: var(--scale);
    height: var(--scale);

    transition: color 0.2s ease;
  }

  .icon:hover,
  .icon:focus {
    color: var(--color-hover) !important;
  }
</style>

<svg
  class="icon ico-{icon}"
  style="color: {color}; --scale: {scale}; --color-hover: {colorHover};"
  aria-label={aria}
  aria-hidden={aria ? 'false' : 'true'}>
  <use href="icons/{icon}.svg#{icon}" />
</svg>

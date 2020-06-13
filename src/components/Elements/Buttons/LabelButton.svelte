<script>
  export let icon = "search";
  export let color = "var(--white)";
  export let colorHover = color;
  export let colorBackground = "var(--blue-dark)";
  export let colorBackgroundHover = colorBackground;
  export let showLabel = true;
  export let scale = "1rem";
</script>

<style lang="scss">
  .button-label {
    display: flex;
    align-items: center;
    padding: var(--spacing-tiny) var(--spacing-small);
    color: var(--color);
    background: var(--background);
    border-radius: 35px;
    transition: all 0.2s ease;
    transition-property: background-color, color;
    overflow: hidden;
    font-size: var(--scale);
    line-height: 1;

    &:hover,
    &:focus {
      color: var(--color-hover);
      background: var(--background-hover);
    }
  }

  .icon {
    width: var(--scale);
    height: var(--scale);
  }

  .text {
    margin-left: var(--spacing-small);
    transition: all 0.2s ease-in-out;
    transform-origin: center;

    &[data-display="false"] {
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0 !important;
      transform: scale(0);
    }
  }
</style>

<div
  class="button-label"
  style="--scale: {scale}; --color: {color}; --color-hover: {colorHover};
  --background: {colorBackground}; --background-hover: {colorBackgroundHover}">
  <svg
    class="icon ico-{icon}"
    style="color: {color}"
    aria-hidden="true"
    viewBox="0 0 512 512">
    <use href="icons/{icon}.svg#{icon}" />
  </svg>
  <span class="text" data-display={showLabel} data-cy-button-text>
    <slot />
  </span>
</div>

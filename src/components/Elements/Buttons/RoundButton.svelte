<script>
  export let icon = "search";
  export let scale = "1rem";
  export let color = "var(--white)";
  export let colorHover = color;
  export let colorBackground = "var(--blue-dark)";
  export let colorBackgroundHover = colorBackground;
  export let showLabel = false;
  export let showBorder = false;
</script>

<style lang="scss">
  .button-round {
    color: var(--color);
    text-align: center;
    line-height: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .frame {
    display: inline-flex;
    padding: calc(var(--scale) / 3);
    background: var(--background);
    border-radius: 100%;

    transition: all 0.2s ease;
    transition-property: background-color, color;

    &:hover,
    &:focus {
      color: var(--color-hover);
      background: var(--background-hover);
    }

    &.with-border {
      border: 3px solid var(--white);
    }
  }

  .icon {
    width: var(--scale);
    height: var(--scale);
  }

  .text[data-display="false"] {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0 !important;
    transform: scale(0);
  }
</style>

<div
  class="button-round"
  style="--scale: {scale}; --color: {color}; --color-hover: {colorHover};
  --background: {colorBackground}; --background-hover: {colorBackgroundHover}">
  <div class="frame {showBorder ? 'with-border' : ''}">
    <svg
      class="icon ico-{icon}"
      style="color: {color}"
      aria-hidden="true"
      viewBox="0 0 512 512">
      <use href="icons/{icon}.svg#{icon}" />
    </svg>
  </div>
  <span class="text" data-display={showLabel} data-cy-button-round-text>
    <slot />
  </span>
</div>

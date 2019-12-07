<script>
  export let backgroundColor = "var(--black)";
  export let scale = "1.2rem;";
  export let fontSize = "1rem;";
  export let icon = "search";
  export let titleVisibility = true;
  export let layout = "aside"; // aside | below | below-with-space
  export let borderStyle = "rounded"; // rounded | round
</script>

<style>
  .iconButton {
    padding: var(--spacing-tiny) var(--spacing-small);
    border-radius: 35px;
    text-align: center;
    line-height: 1;
    cursor: pointer;
  }

  .iconButton__icon {
    width: var(--scale);
    height: 100%;
  }

  .iconButton__text {
    color: var(--white);
  }

  .iconButton__text[data-visible="false"] {
    width: 0;
    height: 0;
    padding: 0;
    opacity: 0;
  }

  /*button layouts */
  .iconButton--aside {
    display: flex;
    align-items: center;
    background: var(--background);
  }

  .iconButton--aside .iconButton__text {
    margin-left: var(--spacing-small);
  }

  .iconButton--below {
    background: var(--background);
  }

  .iconButton--below-with-space {
    padding: 0;
  }

  .iconButton--below-with-space .iconButton__iconFrame {
    background: var(--background);
    padding: var(--spacing-tiny);
    border-radius: 35px;
  }

  /* type */
  .iconButton--rounded,
  .iconButton--rounded .iconButton__iconFrame {
    border-radius: 25px;
  }

  .iconButton--round,
  .iconButton--round .iconButton__iconFrame {
    border-radius: 100%;
  }
</style>

<div
  class="iconButton iconButton--{layout} iconButton--{borderStyle}"
  style="--scale: {scale}; --background: {backgroundColor};">
  <div class="iconButton__iconFrame">
    <img
      class="iconButton__icon"
      src="icons/{icon}.svg"
      alt
      aria-hidden="true" />
  </div>
  <span
    class="iconButton__text"
    data-visible={titleVisibility}
    style="font-size: {fontSize}">
    <slot />
  </span>
</div>

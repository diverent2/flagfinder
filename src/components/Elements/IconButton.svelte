<script>
  export let color = "var(--black)";
  export let height = "1.2rem;";
  export let icon = "search";
  export let titleVisibility = true;
</script>

<style>
  .iconButton {
    padding: var(--spacing-tiny) var(--spacing-small);
    display: flex;
    align-items: center;
    border-radius: 35px;
  }

  .iconButton__text {
    padding-left: var(--spacing-small);
    color: var(--white);
  }
  .iconButton__text[data-visible="false"] {
    width: 0;
    height: 0;
    padding: 0;
    opacity: 0;
  }
</style>

<div class="iconButton" style="background: {color};">
  <img
    class="iconButton__icon"
    src="icons/{icon}.svg"
    alt
    aria-hidden="true"
    style="height: {height}" />
  <span class="iconButton__text" data-visible={titleVisibility}>
    <slot />
  </span>
</div>

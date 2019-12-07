<script>
  export let color = "var(--black)";
  export let icon = "search";
  export let height = "1.2rem;";
</script>

<style>
  .iconButton {
    padding: var(--spacing-tiny) var(--spacing-small);
    display: flex;
    align-items: center;
    border-radius: 35px;
  }
  .iconButton__icon {
    padding-right: var(--spacing-small);
  }
  .iconButton__text {
    color: var(--white);
  }
</style>

<div class="iconButton" style="background: {color};">
  <img
    class="iconButton__icon"
    src="icons/{icon}.svg"
    alt
    aria-hidden="true"
    style="height: {height}" />
  <span class="iconButton__text">
    <slot />
  </span>
</div>

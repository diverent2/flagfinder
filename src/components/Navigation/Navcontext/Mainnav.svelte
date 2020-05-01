<script>
  import IconButton from "./../../Elements/IconButton.svelte";
</script>

<style>
  .options-main {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: var(--spacing-small);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
  }
</style>

<div class="options-main">
  <div class="button active" data-cy-footernav-option="about">
    <a href="/about">
      <IconButton
        icon="about"
        scale="1.8rem"
        backgroundColor="var(--blue-dark-500)"
        backgroundColorHover="var(--blue-dark)"
        layout="below-with-space"
        titleVisibility="false"
        borderStyle="rounded">
        about
      </IconButton>
    </a>
  </div>
  <div class="button active" data-cy-footernav-option="settings">
    <a href="/settings">
      <IconButton
        icon="settings"
        scale="1.8rem"
        backgroundColor="var(--blue-dark-500)"
        backgroundColorHover="var(--blue-dark)"
        layout="below-with-space"
        titleVisibility="false"
        borderStyle="rounded">
        settings
      </IconButton>
    </a>
  </div>
</div>

<script>
  import IconButton from "../../Elements/IconButton.svelte";
</script>

<style lang="scss">
  .options-flag {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: var(--spacing-small);
    grid-gap: var(--spacing);

    .button {
      display: none;

      &.active {
        display: block;
      }
    }
  }
</style>

<div class="options-flag">
  <div class="button active" data-cy-footernav-option="bookmark">
    <IconButton
      icon="bookmarks"
      scale="1.8rem"
      backgroundColor="var(--blue-dark-500)"
      backgroundColorHover="var(--blue-dark)"
      layout="below-with-space"
      titleVisibility="false"
      borderStyle="rounded">
      bookmark
    </IconButton>
  </div>
  <div class="button active" data-cy-footernav-option="share">
    <IconButton
      icon="share"
      scale="1.8rem"
      backgroundColor="var(--blue-dark-500)"
      backgroundColorHover="var(--blue-dark)"
      layout="below-with-space"
      titleVisibility="false"
      borderStyle="rounded">
      share
    </IconButton>
  </div>
</div>

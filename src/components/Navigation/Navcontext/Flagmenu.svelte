<script>
  import RoundButton from "../../Elements/Buttons/RoundButton.svelte";
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
    <RoundButton
      icon="bookmark"
      scale="1.8rem"
      colorBackground="var(--blue-dark-500)"
      colorBackgroundHover="var(--blue-dark)">
      bookmark
    </RoundButton>
  </div>
  <div class="button active" data-cy-footernav-option="share">
    <RoundButton
      icon="share"
      scale="1.8rem"
      colorBackground="var(--blue-dark-500)"
      colorBackgroundHover="var(--blue-dark)">
      share
    </RoundButton>
  </div>
</div>

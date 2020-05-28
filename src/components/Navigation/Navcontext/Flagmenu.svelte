<script>
  import RoundButton from "../../Elements/Buttons/RoundButton.svelte";
</script>

<style lang="scss">
  @import "./styles/footer.scss";

  .options-flag {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
    */
    margin: var(--spacing-small);

    @media(--medium-up) {
      margin: var(--spacing);
    }
  }
</style>

<div class="options-flag">
  <div class="button" data-cy-footernav-option="bookmark">
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

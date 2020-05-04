<script>
  import RoundButton from "./../../Elements/Buttons/RoundButton.svelte";
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
      <RoundButton
        icon="about"
        scale="1.8rem"
        colorBackground="var(--blue-dark-500)"
        colorBackgroundHover="var(--blue-dark)">
        about
      </RoundButton>
    </a>
  </div>
  <div class="button active" data-cy-footernav-option="settings">
    <a href="/settings">
      <RoundButton
        icon="settings"
        scale="1.8rem"
        colorBackground="var(--blue-dark-500)"
        colorBackgroundHover="var(--blue-dark)">
        settings
      </RoundButton>
    </a>
  </div>
</div>

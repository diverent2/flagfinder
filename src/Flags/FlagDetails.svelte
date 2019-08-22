<script>
  export let activeFlag;
</script>

<style>
  .flagDetails {
    max-width: 640px;
    padding: var(--spacing) var(--spacing-small);
    background: var(--gry-light);
  }

  .flagDetails__title {
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: var(--spacing-small);
  }

  .flagDetails__image {
    width: 100%;
  }

  .flagDetails__colors {
    width: 100%;
  }

  .colorButton {
    display: block;
    box-sizing: border-box;
    width: var(--spacing-large);
    height: var(--spacing-large);
    background: yellow;
    border-radius: 50%;
    border-color: var(--gry);
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
  }

  .colorExplanations {
    width: 100%;
  }

  .colorExplanation {
    display: flex;
    align-items: center;
    margin: var(--spacing-small) 0;
  }

  .colorExplanation__line {
    width: var(--spacing-tiny);
    height: var(--spacing-large);
    display: block;
    margin-right: var(--spacing-tiny);
    box-sizing: border-box;
  }
</style>

<div class="flagDetails">
  <img class="flagDetails__image" src={activeFlag.image} alt />
  <h2 class="flagDetails__title">{activeFlag.name}</h2>
  <p class="flagDetails__description">{activeFlag.description}</p>
  <h3>Color Meaning</h3>
  <div class="colorExplanations">
    {#each activeFlag.props.colors as color}
      <div class="colorExplanation">
        <span
          class="colorExplanation__line"
          style="background: {color.value}" />
        <span>{color.meaning}</span>
      </div>
    {/each}
  </div>
</div>

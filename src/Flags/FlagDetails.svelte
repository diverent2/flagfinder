<script>
  export let activeFlag;
</script>

<style>
  .flagDetails {
    height: 100%;
    padding: var(--spacing) var(--spacing-small);
    background: var(--gry-light);
    box-sizing: border-box;
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

  .colorExplanations {
    width: 100%;
    padding: 0;
    text-transform: capitalize;
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
  <ul class="colorExplanations">
    {#each activeFlag.props.colors as color}
      <li class="colorExplanation">
        <span
          class="colorExplanation__line"
          style="background: {color.value}" />
        <span>{color.meaning}</span>
      </li>
    {/each}
  </ul>
</div>

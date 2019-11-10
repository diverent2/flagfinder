<script>
  import IconButton from "../Elements/IconButton.svelte";

  export let flag;
</script>

<style>
  section {
    padding: 1rem;

    margin-bottom: 4rem;
  }

  h2 {
    visibility: hidden;
    height: 0;
    margin: 0;
  }

  h3 {
    font-size: 0.8rem;
    line-height: 1;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
  }

  p {
    margin-top: 0;
  }

  .general__origin {
    display: flex;
    justify-content: space-between;
  }

  ul.colors {
    margin: -0.25rem;
    margin-bottom: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    list-style: none;
  }

  .color {
    margin-top: 0.25rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;

    flex-grow: 1;
  }

  .color__field {
    height: 2rem;
  }

  .color__text {
    display: block;
    text-align: center;
  }

  .general__category {
    width: max-content;
  }
</style>

<section title="general">
  <h2>General</h2>
  <h3>📝Description</h3>
  <p>{flag.description || 'unknown'}</p>

  <div class="general__origin">
    <div>
      <h3>🖌️First known appearance</h3>
      <span>{flag.origin.firstAppearance || 'unknown'}</span>
    </div>
    <div>
      <h3>📅Timeframe</h3>
      <span>{flag.origin.timeframe || 'unknown'}</span>
    </div>
  </div>

  <h3>🏷️Category</h3>

  <div class="general__category">
    {#if flag.category === 'sexuality'}
      <IconButton
        color="#F271DE"
        icon="sexuality-white"
        height="var(--spacing)">
        sexuality
      </IconButton>
    {:else if flag.category === 'attraction'}
      <IconButton
        color="#FF0000"
        icon="attraction-white"
        height="var(--spacing)">
        attraction
      </IconButton>
    {:else if flag.category === 'kink'}
      <IconButton color="#7f8cff" icon="kink-white" height="var(--spacing)">
        kink
      </IconButton>
    {:else if flag.category === 'gender'}
      <IconButton color="#FFAF2F" icon="gender-white" height="var(--spacing)">
        gender
      </IconButton>
    {/if}
  </div>

  <h3>🎨Color palate</h3>

  <ul class="colors">
    {#each flag.props.colors as color}
      <li class="color">
        <div class="color__field" style="background: {color.value}" />
        <span class="color__text">{color.value}</span>
      </li>
    {/each}
  </ul>

</section>

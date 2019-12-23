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
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
  }

  .color {
    flex-grow: 1;
  }

  .color__field {
    height: 2rem;
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
        backgroundColor="#F271DE"
        icon="sexuality-white"
        scale="var(--spacing)">
        sexuality
      </IconButton>
    {:else if flag.category === 'attraction'}
      <IconButton
        backgroundColor="#FF0000"
        icon="attraction-white"
        scale="var(--spacing)">
        attraction
      </IconButton>
    {:else if flag.category === 'kink'}
      <IconButton
        backgroundColor="#7f8cff"
        icon="kink-white"
        scale="var(--spacing)">
        kink
      </IconButton>
    {:else if flag.category === 'gender'}
      <IconButton
        backgroundColor="#FFAF2F"
        icon="gender-white"
        scale="var(--spacing)">
        gender
      </IconButton>
    {/if}
  </div>

  <h3>🎨Color palette</h3>

  <ul class="colors">
    {#each flag.props.colors as color}
      <li class="color">
        <div
          class="color__field"
          title={color.name}
          style="background: {color.value}" />
      </li>
    {/each}
  </ul>

</section>

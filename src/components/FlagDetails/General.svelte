<script>
  export let flag;
</script>

<style>
  section {
    padding: 1rem;

    margin-bottom: 4rem;
  }

  h2 {
    text-align: center;
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
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
</style>

<section title="general">
  <h2>Genderal</h2>
  <h3>Description</h3>
  <p>{flag.description || 'unknown'}</p>

  <div class="general__origin">
    <div>
      <h3>First known appearance</h3>
      <span>{flag.origin.firstAppearance || 'unknown'}</span>
    </div>
    <div>
      <h3>Timeframe</h3>
      <span>{flag.origin.timeframe || 'unknown'}</span>
    </div>
  </div>

  <h3>Color palate</h3>

  <ul class="colors">
    {#each flag.props.colors as color}
      <li class="color">
        <div class="color__field" style="background: {color.value}" />
        <span class="color__text">{color.value}</span>
      </li>
    {/each}
  </ul>
</section>

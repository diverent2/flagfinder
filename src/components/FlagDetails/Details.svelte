<script>
  import ColorSpot from "./../Elements/ColorSpot.svelte";

  export let flag;
</script>

<style>
  section {
    padding: 1rem;
  }

  h2 {
    text-align: center;
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
  }

  ul.colorExplanations {
    margin-bottom: 0;
    padding: 0;

    list-style: none;
  }

  .colorExplanations hr:last-of-type {
    display: none;
  }

  .colorExplanation {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .colorExplanation__colorSpot {
    box-sizing: border-box;
    width: var(--spacing-xlarge);
    height: var(--spacing-xlarge);
    background: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;

    border-color: var(--gry-light);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    transition: border-color 0.2s ease;
  }

  .colorExplanation__field {
    margin-right: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 5rem;
  }

  .colorExplanation__meaning > p {
    margin-top: 0;
  }

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }

  ul.sources {
    padding-left: 1rem;
  }
</style>

<h2>Details</h2>
<section title="details">
  <h3>Color meanings</h3>

  {#if flag.props.colors.length}
    <ul class="colorExplanations">
      {#each flag.props.colors as color, i}
        <li class="colorExplanation">
          <div class="colorExplanation__field">
            <div class="colorExplanation__colorSpot">
              <ColorSpot color={color.value} />
            </div>
            <span class="colorExplanation__text">{color.value}</span>
          </div>
          <div class="colorExplanation__meaning">
            <p>{color.meaning || 'no explanation provided'}</p>
          </div>
        </li>
        <hr />
      {/each}
    </ul>
  {:else}
    <p>No descriptions found</p>
  {/if}

  <h3>Sources</h3>

  {#if flag.sources.length}
    <ul class="sources">
      {#each flag.sources as source}
        <li class="source">
          <a href={source.link} target="blank">{source.name}</a>
          <span>| {source.researchDate || 'date unknown'}</span>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No sources provided</p>
  {/if}
</section>

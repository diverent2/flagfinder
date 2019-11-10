<script>
  import ColorSpot from "./../Elements/ColorSpot.svelte";

  export let flag;
</script>

<style>
  section {
    padding: 1rem;
  }

  h2 {
    visibility: hidden;
    height: 0;
    margin: 0;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
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
    margin-top: 0;
  }
</style>

<section title="details">
  <h2>Details</h2>

  <h3>🎨Color meanings</h3>

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

  <h3>🔎Sources</h3>

  {#if flag.sources.length}
    <ul class="sources">
      {#each flag.sources as source}
        <li class="source">
          <span>📅 {source.researchDate || 'YYYY.MM.DD'} |</span>
          <a href={source.link} target="blank">{source.name}</a>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No sources provided</p>
  {/if}
</section>

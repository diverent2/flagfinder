<script>
  import ColorSpot from "./../Elements/ColorSpot.svelte";
  import ColorField from "./../Elements/ColorField.svelte";

  export let flag;
</script>

<style>
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
    display: grid;
    grid-template-columns: minmax(4rem, 8rem) 2fr;
  }

  .colorExplanation__field {
    margin-right: 1rem;
  }

  .colorExplanation__meaning > p {
    margin-top: 0;
  }

  .colorExplanation__meaning > p:first-letter {
    text-transform: uppercase;
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

  <h3>🎨 Color meanings</h3>

  {#if flag.props.colors.length}
    <ul class="colorExplanations">
      {#each flag.props.colors as color, i}
        <li class="colorExplanation">
          <div class="colorExplanation__field">
            <ColorField name={color.name} hue={color.hue} color={color.value} />
          </div>
          <div class="colorExplanation__meaning">
            {#if color.meaning}
              <p>{color.meaning}</p>
            {:else}
              <p class="field--empty">no explanation provided</p>
            {/if}
            <p />
          </div>
        </li>
        <hr />
      {/each}
    </ul>
  {:else}
    <p class="field--empty">No descriptions found</p>
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

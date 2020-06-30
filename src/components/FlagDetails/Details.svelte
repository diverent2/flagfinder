<script>
  import ColorSpot from "./../Elements/ColorSpot.svelte";
  import ColorField from "./../Elements/ColorField.svelte";

  export let flag;
</script>

<style lang="scss">
  h3 {
    line-height: 1.2;
    font-size: 1.5em;
    margin-bottom: var(--spacing);
  }

  .icon {
    margin-right: var(--spacing-tiny);
  }

  ul.colorExplanations {
    margin-bottom: 0;
    padding: 0;

    list-style: none;

    hr:last-of-type {
      display: none;
    }
  }

  .colorExplanation {
    display: grid;
    grid-template-columns: minmax(4rem, 8rem) 2fr;

    .colorExplanation_field {
      margin-right: 1rem;
    }

    .colorExplanation_meaning > p {
      margin-top: 0;

      &:first-letter {
        text-transform: uppercase;
      }
    }
  }

  hr.list {
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
    padding: 0;
    margin: 0;
    list-style: none;

    .source {
      margin-bottom: var(--spacing-small);
    }
  }
</style>

<section>
  <h2 data-section-title>Details</h2>

  <h3>
    <span class="icon">🎨</span>
    Color meanings
  </h3>

  {#if flag.props.colors.length}
    <ul class="colorExplanations">
      {#each flag.props.colors as color, i}
        <li class="colorExplanation">
          <div class="colorExplanation_field">
            <ColorField name={color.name} hue={color.hue} color={color.value} />
          </div>
          <div class="colorExplanation_meaning">
            <p>
              {#if color.meaning}
                {@html color.meaning}
              {:else}
                <p class="field--empty">no explanation provided.</p>
              {/if}
            </p>
            <p />
          </div>
        </li>
        <hr class="list" />
      {/each}
    </ul>
  {:else}
    <p class="field--empty">No color descriptions found.</p>
  {/if}
  <hr class="rainbow" />

  <h3>
    <span class="icon">🔎</span>
    Sources
  </h3>

  {#if flag.sources.length}
    <ul class="sources">
      {#each flag.sources as source}
        <li class="source">
          <span>
            <span class="icon">📅</span>
            {source.researchDate || 'YYYY.MM.DD'} |
          </span>
          <a href={source.link} target="blank">{source.name}</a>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="field--empty">No sources provided.</p>
  {/if}
</section>

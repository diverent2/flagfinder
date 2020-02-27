<script>
  import IconButton from "../Elements/IconButton.svelte";

  export let flag;

  function getCategoryColor(category) {
    let color;
    switch (category) {
      case "attraction":
        color = "#FF0000";
        break;
      case "gender":
        color = "#FFAF2F";
        break;
      case "kink":
        color = "#7f8cff";
        break;
      //sexuality
      default:
        color = "#F271DE";
        break;
    }
    return color;
  }
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

  .keywords {
    list-style: none;
    margin-top: 0;
    padding: 0;
  }

  .keyword {
    display: inline-block;
    margin: var(--spacing-tiny);
    padding: 3px;
    color: var(--black);
    background-image: linear-gradient(
      40deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 100%
    );
    line-height: 1;
    text-transform: capitalize;
    border-radius: 5px;
  }

  .keyword_inner {
    display: inline-block;
    padding: var(--spacing-tiny) var(--spacing-small);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.9);
  }

  .general__categories {
    display: flex;
    flex-wrap: wrap;
  }

  .category {
    padding-right: var(--spacing);
  }

  .category:last-child {
    padding-right: 0;
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

  <h3>🏷️Categories</h3>

  <div class="general__categories">
    {#each flag.categories as category}
      <div class="category">
        <IconButton
          backgroundColor={getCategoryColor(category)}
          icon="{category}-white"
          scale="var(--spacing)">
          {category}
        </IconButton>
      </div>
    {/each}
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

  <h3>📌Keywords</h3>

  {#if flag.keywords.length}
    <ul class="keywords">
      {#each flag.keywords as keyword}
        <li class="keyword">
          <span class="keyword_inner">{keyword}</span>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="field--empty">No keywords found.</p>
  {/if}

</section>

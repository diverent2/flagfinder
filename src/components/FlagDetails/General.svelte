<script>
  import LabelButton from "../Elements/Buttons/LabelButton.svelte";
  import FlagAlterations from "./FlagAlterations/FlagAlterations.svelte";

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
    margin-bottom: 4rem;
  }

  h3,
  h4 {
    font-size: 0.9rem;
    line-height: 1;
    margin-top: 1.5rem;
    margin-bottom: var(--spacing-small);
  }

  .icon {
    margin-right: var(--spacing-tiny);
  }

  .origin h3 {
    margin-bottom: var(--spacing);
    line-height: 1.2;
    font-size: 1.5em;
  }

  p {
    margin-top: 0;
    font-size: 1.1rem;
    margin-bottom: var(--spacing);
  }

  .name {
    text-transform: capitalize;
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
    padding-bottom: var(--spacing);
  }

  .category:last-child {
    padding-right: 0;
  }
</style>

<section data-cy-flag-details-section="general">
  <h2 data-section-title>General</h2>

  <h3>
    <span class="icon">📛</span>
    Flag name
  </h3>
  <p class="name">{flag.name} flag</p>

  <h3>
    <span class="icon">📝</span>
    Identity Description
  </h3>
  <p>
    {#if flag.description}
      {@html flag.description}
    {:else}
      <span class="field--empty">No flag description found.</span>
    {/if}
  </p>
  <hr class="rainbow" />

  <div class="origin">
    <h3>
      <span class="icon">🔙</span>
      Origin
    </h3>
    <h4>
      <span class="icon">📜</span>
      Flag History
    </h4>
    <p>
      {#if flag.origin.history}
        {@html flag.origin.history}
      {:else}
        <span class="field--empty">No flag history found.</span>
      {/if}
    </p>
    <h4>
      <span class="icon">🎨</span>
      Flag History and Alterations
    </h4>
    <p>
      {#if flag.origin.flagAlterations.length}
        <FlagAlterations flags={flag.origin.flagAlterations} />
      {:else}
        <span class="field--empty">No alterations found.</span>
      {/if}
    </p>
    <div>
      <h4>
        <span class="icon">🖌️</span>
        Creator
      </h4>
      <p>
        {#if flag.origin.author}
          {flag.origin.author}
        {:else}
          <span class="field--empty">unknown</span>
        {/if}
      </p>
    </div>
    <div>
      <h4>
        <span class="icon">📅</span>
        Creation date
      </h4>
      <p>
        {#if flag.origin.publicationDate}
          {flag.origin.publicationDate}
        {:else}
          <span class="field--empty">unknown</span>
        {/if}
      </p>
    </div>
  </div>
  <hr class="rainbow" />

  <h3>
    <span class="icon">🎨</span>
    Color palette
  </h3>

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

  <h3>
    <span class="icon">🏷️</span>
    Categories
  </h3>
  <div class="general__categories">
    {#each flag.categories as category}
      <div class="category">
        <LabelButton
          icon={category}
          colorBackground={getCategoryColor(category)}
          scale="var(--spacing)">
          {category}
        </LabelButton>
      </div>
    {/each}
  </div>

  <h3>
    <span class="icon">📌</span>
    Keywords
  </h3>

  {#if flag.keywords}
    <ul class="keywords">
      {#each flag.keywords as keyword}
        <li class="keyword">
          <span class="keyword_inner">{keyword}</span>
        </li>
      {/each}
    </ul>
  {:else}
    <span class="field--empty">No keywords found.</span>
  {/if}

</section>

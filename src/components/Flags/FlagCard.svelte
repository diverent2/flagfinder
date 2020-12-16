<script>
  import LabelButton from "../Elements/Buttons/LabelButton.svelte";
  import Icon from "../Elements/Icon.svelte";

  export let flag;
  export let titleVisibility = true;

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

<style lang="scss">
  a {
    text-decoration: none;
  }

  .flagCard:hover {
    transform: scale(1.05);
  }

  .flagCard__image {
    border-radius: inherit;
    min-width: 150px;
  }

  .flagCard__header {
    width: 100%;
    color: var(--gry-dark);
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .flagCard__categories {
    width: max-content;
  }

  .flagCard__arrow {
    position: absolute;
    bottom: var(--spacing-small);
    right: var(--spacing-small);
  }

  .flagCard__categories {
    display: flex;
    flex-wrap: wrap;
  }
  .category {
    padding-right: var(--spacing-small);
    padding-bottom: var(--spacing-small);
  }

  .category:last-child {
    padding-right: 0;
  }

  /*mobile*/
  .flagCard {
    padding: 0.5rem;
    position: relative;
    display: flex;
    background: var(--white);
    border-radius: 6px;
    box-shadow: var(--box-shadow);
    transition: transform 0.2s ease-in-out;
  }

  .flagCard__header {
    margin-top: 0;
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
  }

  .flagCard__details {
    margin-left: 1rem;
    overflow: hidden;
  }

  @media (--xsmall-only), (--medium-up) {
    .flagCard {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    .flagCard__image {
      width: 100%;
      min-width: auto;
      height: auto;
      flex-grow: 1;
      object-fit: cover;
    }

    .flagCard__details {
      display: flex;
      flex-direction: column;
      margin-left: 0;
    }

    .flagCard__header {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  @media (--xsmall-only) {
    .flagCard__arrow {
      display: none;
    }
  }
</style>

<svelte:options immutable />

<a rel="prefetch" href="/flag/{flag.id}" title="{flag.name} flag">
  <div class="flagCard" data-cy-flagcard>
    <img
      width="150"
      height="90"
      class="flagCard__image"
      src="flags/{flag.image}"
      alt="{flag.name} flag"
      loading="lazy" />
    <div class="flagCard__details">
      <h3 class="flagCard__header">{flag.name}</h3>
      <div class="flagCard__categories" data-cy-flagcard-categories>
        {#each flag.categories as category}
          <div class="category">
            <LabelButton
              colorBackground={getCategoryColor(category)}
              icon={category}
              scale="var(--spacing)"
              showLabel={titleVisibility}>
              {category}
            </LabelButton>
          </div>
        {/each}
      </div>
      <div class="flagCard__arrow">
        <Icon
          icon="arrow-right"
          color="var(--blue)"
          scale="var(--spacing)"
          aria="Go back to search" />
      </div>
    </div>
  </div>
</a>

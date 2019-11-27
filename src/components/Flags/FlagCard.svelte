<script>
  import IconButton from "../../components/Elements/IconButton.svelte";
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
  a {
    text-decoration: none;
  }

  .flagCard {
    padding: 0.5rem;
    max-width: 350px;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 6px;
    box-shadow: var(--box-shadow);
    transition: transform 0.2s ease-in-out;
  }

  .flagCard:hover {
    transform: scale(1.05);
  }

  .flagCard__image {
    width: 100%;
    height: auto;
    border-radius: inherit;
  }

  .flagCard__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flagCard__header {
    width: 100%;
    margin-bottom: 0.5rem;
    margin-top: var(--spacing-small);
    color: var(--gry-dark);
    text-transform: capitalize;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .flagCard__category {
    width: max-content;
  }
</style>

<a rel="prefetch" href="/flag/{flag.id}" title="{flag.name} flag">
  <div class="flagCard">
    <img
      class="flagCard__image"
      src="flags/{flag.image}"
      alt="{flag.name} flag" />

    <h3 class="flagCard__header">{flag.name}</h3>
    <div class="flagCard__details">
      <div class="flagCard__category">
        <IconButton
          backgroundColor={getCategoryColor(flag.category)}
          icon="{flag.category}-white"
          scale="var(--spacing)">
          {flag.category}
        </IconButton>
      </div>
      <img
        class="flagCard__arrow"
        height="24"
        area-hidden="true"
        src="icons/arrow-right.svg"
        alt="go to flag" />
    </div>
  </div>
</a>

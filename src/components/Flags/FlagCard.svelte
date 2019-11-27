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
    position: relative;
    display: flex;
    background: var(--white);
    border-radius: 6px;
    box-shadow: var(--box-shadow);
    transition: transform 0.2s ease-in-out;
  }

  .flagCard:hover {
    transform: scale(1.05);
  }

  .flagCard__image {
    width: 150px;
    height: 100%;
    border-radius: inherit;
  }

  .flagCard__category {
    width: min-content;
  }

  .flagCard__header {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: var(--gry-dark);
    text-transform: capitalize;
  }

  .flagCard__arrow {
    position: absolute;
    bottom: var(--spacing);
    right: var(--spacing);
  }

  .flagCard__details {
    margin-left: 1rem;
  }
</style>

<a rel="prefetch" href="/flag/{flag.id}" title="{flag.name} flag">
  <div class="flagCard">
    <img
      class="flagCard__image"
      src="flags/{flag.image}"
      alt="{flag.name} flag" />

    <div class="flagCard__details">
      <h3 class="flagCard__header">{flag.name}</h3>
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
        height="16px"
        area-hidden="true"
        src="icons/arrow-right.svg"
        alt="go to flag" />
    </div>
  </div>
</a>

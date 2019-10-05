<script>
  import IconButton from "../../components/IconButton.svelte";
  export let flag;
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

<a href={flag.id} title="{flag.name} flag">
  <div class="flagCard">
    <img class="flagCard__image" src={flag.image} alt />

    <div class="flagCard__details">
      <div class="flagCard__category">
        <IconButton
          color="var(--blue-dark)"
          icon="about"
          height="var(--spacing)">
          {flag.category}
        </IconButton>
      </div>
      <h3 class="flagCard__header">{flag.name}</h3>
    </div>
    <img
      class="flagCard__arrow"
      height="16px"
      area-hidden="true"
      src="icons/arrow-right.svg"
      alt="go to flag" />
  </div>
</a>

<script>
  export let flag;
</script>

<style>
  .flagCard {
    width: 200px;
    height: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /*
  .flagCard:hover .flagCard__text,
  .flagCard:focus .flagCard__text {
    bottom: 0;
  }
  */

  .flagCard__image {
    width: 100%;
    flex-grow: 1;
  }

  .flagCard__info {
    width: 100%;
    color: var(--white);
    padding: var(--spacing-small);
    background: var(--black);
    border-top: 1px solid var(--white);
    box-sizing: border-box;
  }

  /*
  .flagCard__text {
    position: absolute;
    width: 100%;
    bottom: -22px;
    padding: var(--spacing-small);
    color: var(--white);
    background: var(--black);
    line-height: 1;
    box-sizing: border-box;
    transition: 0.25s bottom ease;
  }
  */

  .flagCard__header {
    margin: 0;
    text-align: center;
  }

  .flagCard__category {
    position: absolute;
    right: 0;

    margin-top: var(--spacing-small);
    margin-right: var(--spacing-small);

    padding: var(--spacing-tiny) var(--spacing-small);

    background: var(--green-light);
    border-radius: 25px;
    border: 2px solid var(--green);
  }
</style>

<div class="flagCard">
  <img class="flagCard__image" src={flag.image} alt />
  <span class="flagCard__category">{flag.category}</span>
  <div class="flagCard__info">
    <h3 class="flagCard__header">{flag.name}</h3>
  </div>
  <!--
  <div class="flagCard__text">
    <h3 class="flagCard__header">{flag.name}</h3>
    <div class="flagCard__description">{flag.description}</div>
  </div>
  -->
</div>

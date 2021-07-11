<script>
  export let flag = {
    title: "Title",
    imageUrl: "genderqueer/genderqueer.png",
    imageAlt: "The stripes had a brighter color in the original version",
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur`
  };
</script>

<style>
  .flagAlteration {
    display: grid;
    justify-items: center;
    grid-gap: var(--spacing);
    border-radius: 10px;
    padding: var(--spacing);
    background: var(--blue-dark-500);
    color: var(--white);
    box-shadow: var(--box-shadow);
    border: var(--white) solid 2px;
  }

  @media (--small-up) {
    .flagAlteration {
      grid-template: auto 1fr / 1fr 2fr;
    }
  }

  h5 {
    margin: 0;
    font-size: 1.2rem;
    grid-column: 1 / -1;

    border-bottom: var(--white) solid 1px;
    width: 100%;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  p {
    margin-top: 0;
  }

  img {
    box-sizing: content-box;
    border: var(--white) 2px solid;
    width: 100%;
    max-width: 200px;
    height: auto;
  }
</style>

<div class="flagAlteration">
  <h5 title={flag.title}>{flag.title}</h5>
  <img src="flags/{flag.imageUrl}" alt={flag.imageAlt} height="90" />
  {#if flag.description}
    <p>
      {@html flag.description}
    </p>
  {:else}
    <span class="field--empty">No definition found.</span>
  {/if}
</div>

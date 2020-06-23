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
    max-height: 100px;
  }
</style>

<div class="flagAlteration">
  <h5>{flag.title}</h5>
  <img src="flags/{flag.imageUrl}" alt={flag.imageAlt} />
  <p>{flag.description}</p>
</div>

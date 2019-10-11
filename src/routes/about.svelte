<script>
  import Footer from "./../components/Footer.svelte";
</script>

<style>
  .container {
    padding: 2rem;
  }

  h1 {
    text-align: center;
  }

  section {
    margin-bottom: 3rem;
  }
</style>

<svelte:head>
  <title>About | Prideflags.info</title>
</svelte:head>

<div class="container">

  <h1>About "Prideflags.info"</h1>

  <section title="FAQ">

    <h2>FAQ</h2>
    <p>
      Hello there 👋
      <br />
      nice to see you here!
    </p>
    <p>
      As
      <a href="www.twitter.com/diverent2" target="blank">I´m</a>
      working on this app, I would like to address some likely commonly asked
      questions
    </p>

    <h3>What is this about?</h3>
    <p>
      The idea of this site is to collactivly provide information on queer (and
      non queer) identities in one place. It covers different fields and is
      supposed to work as a starting point to talk about these complicated
      topics.
      <br />
      In my opition having a common foundation in our everyday language is key
      to improve how we treat one another in a society, now and in the future.
    </p>

    <h3>XY is wrong / missing some infomation.</h3>
    <p>
      Hey sounds like you´ve found something I´ve missed. Hit me up
      <a href="mailto:diverent2@gmail.com">per mail</a>
      Or on twitter
      <a href="www.twitter.com/diverent2" target="blank">@diverent2</a>
      , or open a PR in
      <a href="https://github.com/diverent2/flagfinder" target="blank">
        github/diverent2/flagfinder
      </a>
      <br />
      Thank you for contributing!
    </p>

    <h3>What language do you use?</h3>
    <p>
      I try to keep everything gender neutral or at least gender inclusive. For
      some description this is pretty hard. So please feel free to
      <a href="#contribute">improve</a>
      the content.
      <br />
      To achieve gender neutral/inclusive language, I´ve decided to use singluar
      "they". If this sounds strange to you, that´s ok. However please be
      respectful and accept my choice. If you want to find out more about
      singluar "they" here´s
      <a href="https://iheartsingularthey.com/">
        a good and entertaining resource
      </a>
      .
      <br />
      In some occations I also rely on using the asterisks (*) to indicate
      people who aren´t automatically associated with certain terms.
    </p>

    <h3>Is this project politically motivated?</h3>
    <p>
      Yes, and no. While I follow my own ideals and concepts, I see this site
      mainly as an information platform that is not supposed to be opiononated.
    </p>

    <h3 id="contribute">Can I contribute?</h3>
    <p>
      YES! You can give provide feedback or content improvements
      <a href="mailto:diverent2@gmail.com">by mail</a>
      Or hit me up per PN on twitter
      <a href="www.twitter.com/diverent2" target="blank">@diverent2</a>
      <br />
      The whole project also is open source on
      <a href="https://github.com/diverent2/flagfinder" target="blank">
        github/diverent2/flagfinder
      </a>
      so feel free to contribute.
    </p>

    <h3>Who decides what makes it into the listings</h3>
    <p>
      For now, that´s
      <a href="www.twitter.com/diverent2" target="blank">me</a>
      . To do so, I research the content and try not to be too opionated while
      also trying my hardest to keep the list organised and clean.
    </p>

    <h3>What´s comming next?</h3>
    <p>
      First of: More content. Then there is the full release (release: tba),
      including bookmarks and settings and a proper footer interaction. There
      will also be many UI/UX improvements over time.
      <br />
      Other then that, we will see.
      <br />
      Pst: Multilanague will hopefully become a thing soon!
    </p>

  </section>

  <section title="sources">
    <h2>Sources</h2>

    <h3>Icons</h3>
    Icon made by
    <a href="https://www.flaticon.com/authors/freepik">Freepik</a>
    from
    <a href="www.">www.flaticon.com</a>
  </section>

  <section title="imprint">

    <h2>Imprint</h2>
    <h3>Legal notice according to § 5 TMG is</h3>
    <address>[TBA]</address>
    <h3>Content responsibility</h3>
    <address>
      Maximilian Becher
      <br />
      <a href="https://www.twitter.com/diverent2">twitter/@diverent2</a>
    </address>
  </section>
</div>

<Footer />

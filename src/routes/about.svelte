<script>
  import Footer from "./../components/Footer.svelte";
  import Header from "./../components/Header.svelte";
</script>

<style>
  .anchor {
    scroll-margin-top: 120px;
  }
  h2,
  h3 {
    margin-top: 0.5rem;
    text-decoration-line: underline;
    text-transform: capitalize;
  }

  h2 {
    text-decoration-thickness: 3px;
  }

  h3 {
    text-decoration-thickness: 1px;
  }

  section {
    margin-bottom: 3rem;
  }

  section:last-of-type {
    margin-bottom: 0;
  }

  .credits {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
</style>

<svelte:head>
  <title>About | Prideflags.info</title>
</svelte:head>

<Header>About</Header>

<div class="container">

  <p>
    Hello there 👋
    <br />
    nice to see you here!
  </p>

  <p>
    As
    <a
      href="https://www.twitter.com/diverent2"
      target="_blank"
      title="@diverent2 on twitter">
      I'm
    </a>
    working on this app, I would like to address some likely to be asked
    questions
  </p>

  <section>

    <h2>FAQ 🤔</h2>

    <h3>What is this project about?</h3>
    <p>
      The idea of this site is to collactivly provide information on queer (and
      non queer) identities in one place. It covers different fields and is
      supposed to work as a starting point to talk about these complicated
      topics.
      <br />
      In my opinion having a common foundation in our everyday language is key
      to improve how we treat one another in a society, now and in the future.
      Having a place to quickly check up definitions could help us to achieve
      just that.
    </p>

    <h3>Is this project politically motivated?</h3>
    <p>
      Yes, and no. While I follow my own ideals and concepts, I see this site
      mainly as an information platform that is not supposed to be opiononated.
      <br />
      That being said, the content of this page is moderated to keep the content
      credible and trolls out.
      <br />
      Rule of thumb: Be nice. 🤗💙
    </p>

    <h3>What kind of language do you use?</h3>
    <p>
      I try to keep everything gender neutral or at least gender inclusive. For
      some descriptions this is pretty hard. So please feel free to
      <a href="/about/#contribute">improve</a>
      the wording and content.
      <br />
      To achieve gender neutral/inclusive language, I've decided to use singluar
      "they". If this sounds strange to you, that's ok. However please be
      respectful and accept my choice. If you want to find out more about
      singluar "they" here's
      <a href="https://iheartsingularthey.com/" target="blank">
        a good and entertaining resource
      </a>
      for that.
      <br />
      In some occations I also rely on using the asterisks (*) to indicate
      people who aren't automatically associated with certain terms or who sort
      of fall inbetween categories.
      <br />
      This is often known as the gender star.
    </p>

    <h3>Who decides what makes it into the listings?</h3>
    <p>
      For now, that's
      <a
        href="https://www.twitter.com/diverent2"
        target="blank"
        title="@diverent2 on twitter">
        me.
      </a>
      To do so, I research the content and try not to be too opionated while
      also trying my hardest to keep the list organised and clean.
      <br />
      You can also
      <a href="/about/#contribute">contribute</a>
      .
    </p>

    <h3 id="contribute" class="anchor">Can I contribute?</h3>
    <p>
      YES! You can provide feedback or content improvements suggestions by
      hitting me up per PN on twitter
      <a href="https://www.twitter.com/diverent2" target="blank">@diverent2</a>
      <br />
      or directly contribute to the project on github at
      <a href="https://github.com/diverent2/flagfinder" target="blank">
        github/diverent2/flagfinder
      </a>
      <br />
      For more on that, continue reading.
    </p>

    <h3>XY is wrong / XY is missing some information.</h3>
    <p>
      Hey sounds like you've found something I've missed.
      <br />
      The best place to contribute is by opening a an
      <a
        href="https://github.com/diverent2/flagfinder/issues/new/choose"
        target="blank">
        Issue
      </a>
      or even better a Pull Request in the
      <a href="https://github.com/diverent2/flagfinder" target="blank">
        github repo
      </a>
      of this open source project.
      <a
        href="https://github.com/diverent2/flagfinder/issues/new?labels=enhancement&template=---content-requests.md"
        target="blank">
        Here you can also
        <i>suggest</i>
        content additons.
      </a>
      (This is by no means a guarantee this will actually get added).
      <br />
      You can find a form for new flags
      <a href="/add">here.</a>
      This page is meant for content support and will return you a text that you
      can copy paste in one of the contribution locations.
      <br />
      If you don't have github, you may also contact me on twitter
      <a href="https://www.twitter.com/diverent2" target="blank">@diverent2</a>
      or via
      <a href="mailto:diverent2@gmail.com">mail</a>
      <br />
      I currently work on this project all by myself in my freetime besides
      having a fulltime job. So please understand if I don't answer emidiatly.
      <br />
      Thank you for contributing! 🙏🏻🙏🏻🙏🏻
    </p>

    <h3>What's comming next?</h3>
    <p>
      First of: More content.
      <br />
      Then there is the full release [TBA]. There will be many UI/UX
      improvements over time.
      <br />
      Other then that, we will see.
      <br />
      I also hope to eventually support multiple languages as well. But this
      will not be a topic for now.
    </p>

  </section>

  <section>
    <h2>Sources 🔎</h2>

    <h3>🎨 Color names</h3>
    <p>
      The names of the colors originate from
      <a href="https://www.color-blindness.com/color-name-hue/" target="blank">
        color-blindness.com/color-name-hue
      </a>
    </p>

    <h3>👁️‍🗨️ Icons</h3>
    <p>
      Icons are all made by
      <a href="https://www.flaticon.com/authors/freepik" target="blank">
        Freepik
      </a>
      from
      <a href="https://www.flaticon.com" target="blank">flaticon</a>
    </p>
    <h3>📚 Literature sources</h3>
    <p>Indiviual sources are named at the corresponding detail page.</p>

    <h3>Found a mistake?</h3>
    <p>
      Feel free to report and your findings
      <a href="/about/#contribute">here.</a>
    </p>
  </section>

  <section>
    <h2>Imprint 🦉</h2>
    <h3>Legal notice</h3>
    <p>
      according to §5
      <abbr title="Telemediengesetz in Germany" target="blank">TMG</abbr>
    </p>
    <address>
      Maxi Becher
      <br />
      Postfach 41 01 05
      <br />
      68309 Mannheim
      <br />
      Germany
    </address>
    <h3>Content responsibility</h3>
    <address>
      Maxi Becher
      <br />
      <a href="https://www.twitter.com/diverent2" target="blank">
        twitter/@diverent2
      </a>
    </address>
  </section>

  <section>
    <h2>Credits</h2>
    made with 🌈🦄, ☕ and 💕 by
    <a href="https://github.com/diverent2" target="blank">diverent2</a>
    <br />
    <br />
    <h3>Special thanks to</h3>
    <ul class="credits">
      <li>
        <a href="https://github.com/DanielRuf" target="blank">DanielRuf</a>
      </li>
      <li>
        <a href="https://github.com/JohpoJohannes" target="blank">
          JohpoJohannes
        </a>
      </li>
      <li>
        <a href="https://github.com/chomchom02" target="blank">chomchom02</a>
      </li>
    </ul>
    <p>
      Thank you all for being
      <strong>AWESOME! ❤️</strong>
    </p>
  </section>
</div>

<Footer />

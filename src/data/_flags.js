const flags = [
  {
    id: 'progressive',
    name: 'progressive pride',
    description:
      'A redesigned pride flag to be more inclusive and represent all aspects of the LGBTQ*+ community.<br><br>It also shall remind us that „We still have movement forward to make. There still is work to be done.“ - Daniel Quasar.',
    origin: {
      history:
        'When the prideflag got edited to represent more identities, Daniel Quasar set out to create a more well thoughtout flag design to represent the queer movement as a whole.',
      publicationDate: '2018',
      author: 'Daniel Quasar',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality', 'attraction', 'gender', 'kink'],
    image: 'progressive.png',
    props: {
      colors: [
        {
          id: 'maya-blue',
          name: 'maya blue',
          hue: 'lightblue',
          meaning:
            'Reference to the <a href="/flag/transgender">trans* pride</a> (traditionally color for boys)',
          value: '#60CFFA',
        },
        {
          id: 'cupid',
          name: 'cupid',
          hue: 'lightpink',
          meaning:
            'Reference to the <a href="/flag/transgender">trans* pride</a> (traditionally color for girls)',
          value: '#F4A8BA',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            'Reference to the <a href="/flag/transgender">trans* pride</a> flag (those who are transitioning; those with a neutral gender,  <a href="/flag/agender">no gender</a>, and those who are <a href="/flag/intersex">intersex</a>.)',
          value: '#FFFFFF',
        },
        {
          id: 'brown',
          name: 'brown',
          hue: 'brown',
          meaning:
            'Representing marginalized People of Color (POC) communities',
          value: '#603813',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning:
            'Representing marginalized People of Color (POC) communities; Also representing those who have to fight and live with AIDS, have died and all the stigma surrounding them.',
          value: '#000000',
        },
        {
          id: 'red',
          name: 'red',
          hue: 'red',
          meaning:
            'Reference to <a href="/flag/gay">the original LGBTQ*+ flag</a> (life)',
          value: '#d41d06',
        },
        {
          id: 'orange',
          name: 'orange',
          hue: 'orange',
          meaning:
            'Reference to <a href="/flag/gay">the original LGBTQ*+ flag</a> (healing)',
          value: '#ee9c00',
        },
        {
          id: 'yellow',
          name: 'yellow',
          hue: 'yellow',
          meaning:
            'Reference to <a href="/flag/gay">the original LGBTQ*+ flag</a> (sunlight)',
          value: '#FFFF0B',
        },
        {
          id: 'green',
          name: 'green',
          hue: 'green',
          meaning:
            'Reference to <a href="/flag/gay">the original LGBTQ*+ flag</a> (nature)',
          value: '#05bf00',
        },
        {
          id: 'blue',
          name: 'blue',
          hue: 'blue',
          meaning:
            'Reference to <a href="/flag/gay">the original LGBTQ*+ flag</a> (harmony)',
          value: '#011a98',
        },
        {
          id: 'purple',
          name: 'purple',
          hue: 'purple',
          meaning:
            'Reference to <a href="/flag/gay">the original LGBTQ*+ flag</a> (spirit)',
          value: '#761c89',
        },
      ],
      symbols: [
        {
          id: 'arrow',
          name: 'arrow',
          meaning:
            'The arrow represents the movement progressing, constantly pushing forward.',
          icon: '',
        },
      ],
    },
    matches: {
      colors: [
        'lightblue',
        'lightpink',
        'white',
        'brown',
        'black',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
      ],
      symbols: ['arrow'],
    },
    keywords: [
      'progressive',
      'movement',
      'reboot',
      'trans',
      'poc',
      'inclusive',
    ],
    sources: [
      {
        link:
          'https://www.kickstarter.com/projects/danielquasar/progress-a-pride-flag-reboot',
        name: 'Kickstarter.com | Progressive Pride Flag Reboot',
        researchDate: '2020-04-03',
      },
    ],
  },
  {
    id: 'gay',
    name: 'rainbow/gay pride',
    description:
      'Traditional symbol of the LGBTQ+ movement. It represents people who identify as gay as well as the queer community as a whole.<br> The term <i>"gay"</i> describes the attraction to the same (or a similar) gender. While it originally was used by <a href="flag/mlm">gay men</a> and <a href="/flags/lesbian">lesbians</a> it nowadays is also commonly used by <a href="/flag/nonbinary">non-binary</a>, GNC and <a href="/flags/agender">agender</a> people.',
    origin: {
      history:
        'The rainbow pride flag was created in 1978 by the artist Gilbert Baker and debuted at the San Francisco Gay Freedom Day Parade. The flag also is the traditional symbol of the LGBTQ+ movement and now represents the queer community as a whole.',
      author: 'Gilbert Baker in San Francisco',
      publicationDate: '1979',
      flagAlterations: [
        {
          title: 'Original Gay Pride Flag (1978)',
          imageUrl: 'gay/gay_v1.svg',
          imageAlt: 'First Pride Flag Design',
          description:
            'The original version of the flag included two aditional stripes for <i>sexuality</i> (pink) and <i>magic and art</i> (turqoise). They got removed because of fabric availability which lead to the nowadays well known and recognized form.',
        },
        {
          title: 'Philadelphia Pride Flag (2017)',
          imageUrl: 'gay/gay_philadelphia.svg',
          imageAlt: 'Philadelphia Pride Flag with two aditional stripes',
          description:
            'In 2017 the City of Philadelphia decided to use a varient of the rainbow flag to namingly include BIPOC (Black, Indigenous and People of Color) in an attempt to make the flag more inclusive.',
        },
      ],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'gay/gay.png',
    props: {
      colors: [
        {
          id: 'red',
          name: 'red',
          hue: 'red',
          meaning: 'life',
          value: '#FC0006',
        },
        {
          id: 'orange',
          name: 'orange',
          hue: 'orange',
          meaning: 'healing',
          value: '#FDA507',
        },
        {
          id: 'yellow',
          name: 'yellow',
          hue: 'yellow',
          meaning: 'sunlight',
          value: '#FFFF0B',
        },
        {
          id: 'green',
          name: 'green',
          hue: 'green',
          meaning: 'nature',
          value: '#118301',
        },
        {
          id: 'blue',
          name: 'blue',
          hue: 'blue',
          meaning: 'harmony',
          value: '#0000FF',
        },
        {
          id: 'purple',
          name: 'purple',
          hue: 'purple',
          meaning: 'spirit',
          value: '#7E0080',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      symbols: [],
    },
    keywords: [
      'gay',
      'queer',
      'rainbow',
      'pride',
      'CSD',
      '🏳️‍🌈',
      '🌈',
      '⚣',
      'queer',
      'reason for rainbow capatalism',
      'LGBTQ*+',
      'Stonewall',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019-10-09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-4',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019-10-09',
      },
      {
        link: 'https://medium.com/matthews-place/lgbtq-symbols-7d925b396ebe',
        name: 'Matthews place on Medium - lgtbq symbols',
        researchDate: '2019-10-09',
      },
      {
        link:
          'https://www.phillymag.com/news/2017/06/08/philly-pride-flag-black-brown/',
        name: 'phillymag.com - Philadelphia Pride Flag',
        researchDate: '2020-06-28',
      },
      {
        link:
          'https://lgbta.wikia.org/wiki/Gay',
        name: 'LGBTA Wikia.org - Gay',
        researchDate: '2021-07-11',
      },
    ],
  },
  {
    id: 'mlm',
    name: 'MLM pride (gay men*)',
    description:
      'Vincian is a term used to describe homosexual men* who love other men* (mlm, MLM). It can describe all kind of gay men, including (but not exclusive to) <a href="flag/aromantic">aro</a>, <a href="flag/asexual">ace</a>, questioning, <a href="flag/nonbinary">NB</a> and gender-non-conforming men.',
    origin: {
      history:
        'The creator Triton used the original proposed design by Hermy as inspiration and refined the <i>gay man flag colors<i> and added meaning to the different stripes. The meaning was inspired by Triton own reasearch on queer history, his (and others) own experiences as gay men and <a href="/flag/gay">the original rainbow flag</a>, <q>which [he] love[s] dearly and hold[s] close to [his] heart, this flag is not meant to replace or erase it in any way! [He] would love for them to be used in tandem.</q>',
      publicationDate: 'July 2019',
      author: 'Triton [he/him]; <a href="https://gayflagblog.tumblr.com/">@gayflagblog</a> on tumblr',
      flagAlterations: [
        {
          title: 'Alteration of the flag with only 5 stripes',
          imageUrl: '/MLM/MLM_alternative.png',
          imageAlt: 'The MLM current flag but with different amount of stripes',
          description:
            'Similar to the original design but with less stripes to make it easier to reuse and reproduce.<br>There are many alterations and variations but the meaning of the stripes always remains the same.For more alterations see the different versions <a href="https://imgur.com/a/kfPndcP" target="_blank">listed here</a>.',
        },
        {
          title: 'Originally proposed Flag',
          imageUrl: '/MLM/MLM_original_proposal.png',
          imageAlt:
            'The first known proposal for an MLM flag with 7 stripes and a green and blue color schema.',
          description:
            'As a response to a anonymous user on tumblr, the  Moderator Hermy from <a href="https://ask-pride-color-schemes.tumblr.com/post/149449006549/relating-to-the-old-discussion-on-a-separate-flag">@ask-pride-color-schemes</a> proposed this design using a blue and green [orignally asked for blue and purple, but was changed to green, to be different from the butch lesbian flag] color schema derivation of the <a href="/flag//lesbian-lipstick">lipstick lesbian flag<a> as the anonymous request suggested.',
        },
        {
          title: 'First gay man Flag',
          imageUrl: '/MLM/MLM_first_version.png',
          imageAlt:
            'A flag similar to the current mlm flag, but based on the shades of azure and blue.',
          description:
            'This is the first well-known flag design covering mlm as its motive. It got creaded by Valentin Belyaev in mid-2010s to combat gayphobia and later spread throughout the internet.',
        },
      ],
    },
    facts: ["The term vincian is based on the famous artist and polymath Leonardo da Vinci, who seemed to have been involved in various homosexual relationships."],
    categories: ['sexuality', 'attraction'],
    image: '/MLM/MLM.png',
    props: {
      colors: [
        {
          id: 'free-speech-aquamarine',
          name: 'free speech aquamarine',
          hue: 'green',
          meaning:
            'Community;<br> Also represent <i>Nature</i>, as love between men often still gets seen as "<i>unnatural</i>" to society and in many religions.<br>Green flowers/plants like the carnation also were historically used by gay men to symbolize their love and connection to nature.',
          value: '#078D70',
        },
        {
          id: 'shamrock',
          name: 'shamrock',
          hue: 'lightgreen',
          meaning: 'Healing',
          value: '#26CEAA',
        },
        {
          id: 'teal',
          name: 'teal',
          hue: 'green',
          meaning:
            'Joy;<br> Also represent <i>Nature</i>, as love between men often still gets seen as "<i>unnatural</i>" to society and in many religions.<br>Green flowers/plants like the carnation also were historically used by gay men to symbolize their love and connection to nature.',
          value: '#98E8C1',
        },
        {
          id: 'ghost-white',
          name: 'ghost white',
          hue: 'white',
          meaning:
            'GNC (Gender Non Conforming) & Trans Men;<br> The stripe is inspired by the <a href="flag/transgender">trans pride flag</a> as many trans, nb and GNC men are often excluded and deserve more representation in the (gay men) community.',
          value: '#F1EFFF',
        },
        {
          id: 'jordy-blue',
          name: 'jordy blue',
          hue: 'lightblue',
          meaning:
            'Pure Love;<br>The transition from lightblue to purple, which is a mix of red and blue, is used to show how some mlm might be stereotypical while other might not be. Some are also in-between or fluid in their identity. <br>But all deserve the same respect.',
          value: '#7BADE2',
        },
        {
          id: 'free-speech-blue',
          name: 'free speech blue',
          hue: 'purple',
          meaning:
            'Fortitude;<br>Purple representing the true diversity of men being in love with other men <q>in presentation, relationships, & life experience</q> and goes against the stereotyping and fetishizing often put upon gay men.',
          value: '#5049CC',
        },
        {
          id: 'persian-indigo',
          name: 'persian indigo',
          hue: 'purple',
          meaning:
            'Diversity;<br>Purple representing the true diversity of men being in love with other men <q>in presentation, relationships, & life experience</q> and goes against the stereotyping and fetishizing often put upon gay men.',
          value: '#3D1A78',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: [
        'green',
        'lightgreen',
        'green',
        'white',
        'lightblue',
        'purple',
      ],
      symbols: [],
    },
    keywords: [
      'gay',
      'man',
      'masc',
      'men',
      'MLM',
      'vincian',
      'achillean',
      'men loving men',
      'gay men',
    ],
    sources: [
      {
        link:
          'https://gayflagblog.tumblr.com/post/186181118619/gay-man-flag-russian-%D1%80%D0%BE%D1%81%D1%81%D0%B8-%D1%8F-portuguese',
        name: 'gayflagblog.tumblr.com | gay man flag',
        researchDate: '2020-08-03',
      },
      {
        link:
          'https://ask-pride-color-schemes.tumblr.com/post/149449006549/relating-to-the-old-discussion-on-a-separate-flag',
        name:
          'ask-pride-color-schemes.tumblr.com | Original Proposal for the MLM flag',
        researchDate: '2020-08-20',
      },
      {
        link:
          'https://archivalflags.tumblr.com/post/619083546572849152/image-transcription-a-flag-with-seven',
        name: 'archivalflags.tumblr.com | The history of the MLM flag',
        researchDate: '2020-08-20',
      },
      {
        link:
          'https://pride-color-schemes.tumblr.com/post/162294430961/gay-man-some-proposed-flags-to-represent',
        name: 'pride-color-schemes.tumblr.com | Gay man proposed flag',
        researchDate: '2020-09-29',
      },
      {
        link:
          'https://lgbta.wikia.org/wiki/Vincian',
        name: 'lgbta.wikia.org | Vincian',
        researchDate: '2021-07-01',
      },
    ],
  },
  {
    id: 'gay-bear',
    name: 'gay bear brotherhood',
    description:
      'A <a href="/flag/gay">gay</a> subculture formed from the interest of more sturdier and hairy men*, which are also called "bears".',
    origin: {
      history:
        'The flag was created by Craig Byrnes for the International Bear Brotherhood group',
      author: 'Craig Byrnes',
      publicationDate: '1995',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'gay-bear.png',
    props: {
      colors: [
        {
          id: 'maroon',
          name: 'maroon',
          hue: 'brown',
          meaning: 'the colors represent different fur types of bears',
          value: '#613401',
        },
        {
          id: 'tenne',
          name: 'tenne',
          hue: 'orange',
          meaning: 'the colors represent different fur types of bears',
          value: '#D46004',
        },
        {
          id: 'dandelion',
          name: 'dandelion',
          hue: 'yellow',
          meaning: 'the colors represent different fur types of bears',
          value: '#FEDD63',
        },
        {
          id: 'moccasin',
          name: 'moccasin',
          hue: 'yellow',
          meaning: 'the colors represent different fur types of bears',
          value: '#FEE8BA',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: 'the colors represent different fur types of bears',
          value: '#FFFFFF',
        },
        {
          id: 'mortar',
          name: 'mortar',
          hue: 'gray',
          meaning: 'the colors represent different fur types of bears',
          value: '#545454',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: 'the colors represent different fur types of bears',
          value: '#000000',
        },
      ],
      symbols: [
        {
          id: 'paw',
          name: 'paw',
          meaning: '🐻🐾',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['brown', 'orange', 'yellow', 'white', 'gray', 'black'],
      symbols: ['paw'],
    },
    keywords: ['gay', 'subculture', 'hairy', 'big', 'male*', '⚣', '🐻'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-18',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'gay-twink',
    name: 'twink pride',
    description:
      'A <a href="/flag/gay">gay</a> subculture formed by the interest in twinks. A twink is a young man* (teen to early 20s) who likely looks younger then they are, they appear more feminine, have little to no body and facial hair and are most often rather slim.',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'gay-twink.png',
    props: {
      colors: [
        {
          id: 'mauve',
          name: 'mauve',
          hue: 'lightpink',
          meaning: 'feminine nature',
          value: '#FDACFF',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: '',
          value: '#FFFFFF',
        },
        {
          id: 'canary',
          name: 'canary',
          hue: 'yellow',
          meaning: '',
          value: '#FFFF82',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: '',
          value: '#000000',
        },
      ],
      symbols: [
        {
          id: 'double-mars',
          name: 'double mars',
          meaning: 'male* sexuality',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['lightpink', 'white', 'yellow', 'black'],
      symbols: ['mars'],
    },
    keywords: ['slim', 'gay', 'young', 'hairfree', 'no hair', '♂', '20s', '⚣'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'asexual',
    name: 'asexual pride',
    description:
      'An asexual person is someone, who has little or no interest in sexual activity.<br><br>Put simply: They lack what´s commonly refered to as sex drive. That being said, this term does not tell you anything on wheater or not they enjoy sexual activity or completely avoid it. It can also be used as an umbrella term.',
    origin: {
      history: '',
      author: '',
      publicationDate: '2010',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'asexual.png',
    props: {
      colors: [
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: 'asexuality',
          value: '#000000',
        },
        {
          id: 'dark-gray',
          name: 'dark gray',
          hue: 'gray',
          meaning:
            'gray-asexuality, <a href="/flag/demisexual">demi-sexuality</a>',
          value: '#a5a5a5',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: 'sexuality',
          value: '#FFFFFF',
        },
        {
          id: 'indigo',
          name: 'indigo',
          hue: 'purple',
          meaning: 'community',
          value: '#7F0081',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['black', 'gray', 'white', 'purple'],
      symbols: [],
    },
    keywords: [
      'ace',
      'relationship',
      'lack of interest in sex',
      'no or little libido',
      'uninterested',
      'umbrella term',
      '☂️',
      'spectrum',
      '♠️',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-17',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'bisexual',
    name: 'bisexual pride',
    description:
      'Sexual attraction to the own as well as to one (or more) other genders.',
    origin: {
      history: '',
      author: 'Michael Page',
      publicationDate: 'December 5, 1998',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'bisexual.png',
    props: {
      colors: [
        {
          id: 'razzmatazz',
          name: 'razzmatazz',
          hue: 'pink',
          meaning: 'same sex/gender attraction / sterotypical for girl*',
          value: '#D50071',
        },
        {
          id: 'violet-blue',
          name: 'violet blue',
          hue: 'purple',
          meaning:
            'possible attraction to anywhere on the gender spectrum / blending in between both <a href="/flag/heterosexual">straight</a> and <a href="/flag/gay">gay</a> communitites',
          value: '#9B4797',
        },
        {
          id: 'international-klein-blue',
          name: 'international klein blue',
          hue: 'blue',
          meaning: 'different sex/gender attraction  / sterotypical for boy*',
          value: '#002BA9',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['pink', 'purple', 'blue'],
      symbols: [],
    },
    keywords: ['bi', 'both', 'two or more', 'attraction', 'love'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/bisexual/2015/5/15/6-facts-you-never-knew-about-bisexual-flag-yes-there-one',
        name: 'Pride.com - facts about the bisexual flag',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-17',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'demisexual',
    name: 'demisexual / graysexual pride',
    description:
      'A person who <a href="flag/asexual">doesn´t experience sexual attraction</a> unless they have a deep emotional connection to someone.',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'demisexual.png',
    props: {
      colors: [
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: '<a href="flag/asexual">asexuality</a>',
          value: '#000000',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: 'sexuality',
          value: '#FFFFFF',
        },
        {
          id: 'indigo',
          name: 'indigo',
          hue: 'purple',
          meaning: 'community',
          value: '#7F0081',
        },
        {
          id: 'light-gray',
          name: 'light gray',
          hue: 'gray',
          meaning: 'gray-ace and demisexuality',
          value: '#D3D3D3',
        },
      ],
      symbols: [
        {
          id: 'triangle',
          name: 'triangle',
          meaning: '',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['black', 'white', 'purple', 'gray'],
      symbols: ['triangle'],
    },
    keywords: [
      'strong bond',
      'relationship',
      'emotional',
      'takes time',
      'grey',
      'greysexual',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-17',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'heterosexual',
    name: 'heterosexual / straight',
    description:
      'People who are sexually attracted to the opposite binary gender.',
    origin: {
      history:
        'Note: There is no offical heterosexual flag. <br> However the three colored stripes version is becoming more and more popular.',
      author: '',
      publicationDate: '',
      flagAlterations: [
        {
          title: 'Older design',
          imageUrl: 'heterosexual/heterosexual_v1.svg',
          imageAlt: 'Black and white heterosexual flag',
          description:
            'The original heterosexual flag consists of black and white stripes. <br> However the amount of stripes seems to be inconsistent and is not defined.',
        },
      ],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'heterosexual/heterosexual.png',
    props: {
      colors: [
        {
          id: 'royal-blue',
          name: 'royal blue',
          hue: 'lightblue',
          meaning: 'male sex',
          value: '#4687e6',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: 'sexuality',
          value: '#FFFFFF',
        },
        {
          id: 'dark-pink',
          name: 'dark pink',
          hue: 'pink',
          meaning: 'female sex',
          value: '#ED5B9E',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['lightblue', 'white', 'pink'],
      symbols: [],
    },
    keywords: ['straight', 'hetero', 'love', 'relationship'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'lesbian',
    name: 'lesbian pride',
    description:
      'Lesbians are woman* romantically and/or sexually attracted to other woman*.<br><br>This community flag puts empathsies on the diversity of this idenity.',
    origin: {
      history:
        'A while ago many different flags existed for people who identify as lesbians. <br>A user on tumblr by the name <a href="https://official-lesbian-flag.tumblr.com/" target="_blank">@official-lesbian-flag</a> set out for the quest to settle the community for one flag to represent them. After many suggestions and votes a winner was declared: The lesbian community flag was born.',
      publicationDate: '2018',
      author: 'by taqwomen (Tumblr)',
      flagAlterations: [
        {
          title: 'Original winning lebian flag (June 2018)',
          imageUrl: 'lesbian/lesbian_v1.png',
          imageAlt:
            'The same as the current flag, but with 7 stripes instead of 5',
          description:
            'June 2018, original winning flag by @lesbianherstorian with 7 instead of the know 5 stripes. This change was done to simplify the reuse of the flag.',
        },
      ],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'lesbian/lesbian.png',
    props: {
      colors: [
        {
          id: 'darkened-red',
          name: 'darkened red',
          hue: 'red',
          meaning: 'Gender non-conformity',
          value: '#d52d00',
        },
        {
          id: 'atomic-tangerine',
          name: 'atomic tangerine',
          hue: 'orange',
          meaning:
            'Community; Independence (especially from men*) meaning the ability to take care of oneself and each other.',
          value: '#ff9a56',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            'Unique relationship to womanhood; Describes a connection to womanhood to different degrees for different lesbian groups incl. <a href="flag/transgender">trans<a/>, <a href="flag/non binary">non binary</a> lesbians, butch and femme persons. The big difference to gender non conforming folx is that lesbians in some way have a relation to womanhood, while GNC do not.',
          value: '#FFFFFF',
        },
        {
          id: 'pale-violet-red',
          name: 'pale violet red',
          hue: 'pink',
          meaning: 'Serenity and Peace; Love and Sex',
          value: '#d362a4',
        },
        {
          id: 'dark-purple',
          name: 'dark purple',
          hue: 'purple',
          meaning: 'Femininity',
          value: '#a31b62',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['red', 'orange', 'white', 'pink', 'purple'],
      symbols: [],
    },
    keywords: [
      'girls*',
      'female',
      'femme',
      'woman',
      'womanhood',
      'community',
      '👭',
      'love',
      'relationship',
      '♀',
      '⚢',
      '👩‍❤️‍💋‍👩',
      'the L word',
      'the other L word',
    ],
    sources: [
      {
        link:
          'https://sadlesbeandisaster.tumblr.com/post/174618152601/can-people-please-acknowledge-this-version-of-the',
        name:
          'sadlesbeandisaster.tumblr.com | Color Meaning of the new lesbian flag',
        researchDate: '2020-04-02',
      },
      {
        link: 'https://official-lesbian-flag.tumblr.com/',
        name: 'Official-lesbian-flag Tumblr',
        researchDate: '2020-04-02',
      },
    ],
  },
  {
    id: 'lesbian-labry',
    name: 'lesbian labrys pride',
    description:
      'A <a href="/flag/lesbian">lesbian pride flag</a> that puts emphasis on "female* empowerment".',
    origin: {
      history: '',
      author: ' Sean Campbell',
      publicationDate: '1999',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'lesbian-labry.png',
    props: {
      colors: [
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: '',
          value: '#FFFFFF',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: '',
          value: '#000000',
        },
        {
          id: 'indigo',
          name: 'indigo',
          hue: 'purple',
          meaning: '',
          value: '#7E0080',
        },
      ],
      symbols: [
        {
          id: 'labrys',
          name: 'labrys',
          meaning: '',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['purple', 'black', 'white'],
      symbols: ['labrys'],
    },
    keywords: [
      'empowerment',
      'strong',
      'female*',
      'woman*',
      'fight back',
      'fighter',
      '♀',
      '⚢',
      'emancipation',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-10',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'lesbian-lipstick',
    name: 'lipstick lesbian pride',
    description:
      'A <a href="/flag/lesbian">lesbian pride flag</a> that puts emphasis on "femininity / being femme".',
    origin: {
      history:
        'Nowadays this flag is getting less and less common due to controversial claims by its author.',
      author: 'Natalie',
      publicationDate: 'july 28, 2010',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'lesbian-lipstick.png',
    props: {
      colors: [
        {
          id: 'eggplant',
          name: 'eggplant',
          hue: 'purple',
          meaning: '',
          value: '#A60061',
        },
        {
          id: 'mulberry',
          name: 'mulberry',
          hue: 'purple',
          meaning: '',
          value: '#B94A94',
        },
        {
          id: 'mulberry',
          name: 'mulberry',
          hue: 'pink',
          meaning: '',
          value: '#D157A8',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: '',
          value: '#FFFFFF',
        },
        {
          id: 'plum',
          name: 'plum',
          hue: 'lightpink',
          meaning: '',
          value: '#E4AAD1',
        },
        {
          id: 'sunset',
          name: 'sunset',
          hue: 'red',
          meaning: '',
          value: '#C64651',
        },
        {
          id: 'dark-red',
          name: 'dark red',
          hue: 'red',
          meaning: '',
          value: '#8C0B02',
        },
      ],
      symbols: [
        {
          id: 'lips',
          name: 'lips',
          meaning: 'extremely feminine character',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['pink', 'purple', 'white', 'lightpink', 'red'],
      symbols: ['lips'],
    },
    keywords: [
      'girly',
      'femme',
      'pretty',
      'cute',
      'girls*',
      'female*',
      'woman*',
      'lady-like',
      '♀',
      '⚢',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://thislesbianlife.wordpress.com/2010/07/28/lipstick-lesbian-pride/',
        name: 'this lesbian life - lipstick lesbian pride',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'pansexual',
    name: 'pansexual pride',
    description:
      'Pansexuality describes sexual attraction towards all gender (identities) and regardless of gender and sex characteristics.',
    origin: {
      history: '',
      author: '',
      publicationDate: '2010',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'pansexual.png',
    props: {
      colors: [
        {
          id: 'hollywood-cerise',
          name: 'hollywood cerise',
          hue: 'pink',
          meaning: 'female* gendered persons (regardless of biological sex)',
          value: '#FC008D',
        },
        {
          id: 'school-bus-yellow',
          name: 'school bus yellow',
          hue: 'yellow',
          meaning:
            'mixed gendered, <a href="flag/agender">genderless</a>, third-gendered people',
          value: '#FEDB09',
        },
        {
          id: 'dodger-blue',
          name: 'dodger blue',
          hue: 'lightblue',
          meaning: 'male* gendered persons (regardless of biological sex)',
          value: '#27B1FF',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['pink', 'yellow', 'lightblue'],
      symbols: [],
    },
    keywords: [
      'pan',
      'all',
      'everything',
      'gender?',
      'omnisexual',
      'omni',
      'love',
      'whatever',
      '🍳',
      'regardless',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-10',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.deviantart.com/savvyred/journal/Pride-Flags-Colors-explained-379547414',
        name: 'deviantart savvyred - pride flag colors explained',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'omnisexual',
    name: 'omnisexual pride',
    description:
      'A omnisexual person (<i>omni</i> from lat. "all") is attracted to people of all genders as well as genderless identities.<br><br>It often gets confused or used as a synonym to <a href="flags/pansexual">pansexuality</a>, however there is one very important difference between the two:<br>Someone who\'s pansexual is thought of as <i>"gender-blind"</i>, pretty much seeing through the gender towards the heart inside, thous meaning they are attracted to anyone regardless of their gender.<br>An omnisexual persons attraction is gender-inclusive, so they like people of every gender and people who are <a href="flag/agender>genderless.</a>',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'omnisexual/omnisexual.svg',
    props: {
      colors: [
        {
          id: 'carnation-pink',
          name: 'carnation pink',
          hue: 'pink',
          meaning: 'Representing attraction to <i>feminine*</i> people.',
          value: '#ff9bcd',
        },
        {
          id: 'brilliant-rose',
          name: 'nrilliant rose',
          hue: 'pink',
          meaning: 'Representing attraction to <i>feminine*</i> people.',
          value: '#ff53be',
        },
        {
          id: 'persian-indigo',
          name: 'persian indigo',
          hue: 'purple',
          meaning: 'other genders, <a href="flag/agender">lack of gender</a',
          value: '#270846',
        },
        {
          id: 'neon-blue',
          name: 'neon blue',
          hue: 'blue',
          meaning: 'Representing attraction to <i>masculine*</i> people.',
          value: '#665eff',
        },
        {
          id: 'maya-blue',
          name: 'maya blue',
          hue: 'lightblue',
          meaning: 'Representing attraction to <i>masculine*</i> people.',
          value: '#8ca6ff',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['pink', 'purple', 'blue', 'lightblue'],
      symbols: [],
    },
    keywords: ['all', 'gender-inclusive', 'everyone'],
    sources: [
      {
        link: 'https://www.dictionary.com/e/gender-sexuality/omnisexual/',
        name: 'Dictionary.com - omnisexual',
        researchDate: '2020-06-15',
      },
      {
        link: 'https://www.merriam-webster.com/dictionary/omnisexual',
        name: 'Merriam-Webster.com - Omnisexual',
        researchDate: '2020-06-15',
      },
      {
        link:
          'https://www.gaystarnews.com/article/pride-flags-the-biggest-guide-to-lgbt-rainbow-flags-and-what-they-all-mean/#:~:text=Omnisexual%20Pride%20Flag',
        name: 'gaystarnews.com - prideflags Omnisexual',
        researchDate: '2020-06-15',
      },
      {
        link:
          'https://commons.wikimedia.org/wiki/File:Omnisexual_Pride-Flag.svg',
        name: 'Wiki Commons - omnisexual flag',
        researchDate: '2020-07-22',
      },
    ],
  },
  {
    id: 'polysexual',
    name: 'polysexual pride',
    description:
      'Similar to <a href="/flag/pansexual">pansexuality</a>, with an important difference: <br>A polysexual person is attracted to multiple, yet not all genders.',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'polysexual.png',
    props: {
      colors: [
        {
          id: 'hot-magenta',
          name: 'hot magenta',
          hue: 'pink',
          meaning: 'attraction to females*',
          value: '#F300BA',
        },
        {
          id: 'mountain-meadow',
          name: 'mountain meadow',
          hue: 'lightgreen',
          meaning: 'attraction to people of other genders',
          value: '#25DA69',
        },
        {
          id: 'dodger-blue',
          name: 'dodger blue',
          hue: 'blue',
          meaning: 'attraction to males*',
          value: '#1E90F6',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['pink', 'lightgreen', 'blue'],
      symbols: [],
    },
    keywords: ['poly', 'multiple', 'love'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-20',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'straight-ally',
    name: 'straight ally',
    description:
      'People who identify as <a href="/flag/heterosexual">straight</a> but support LGBTQ*+ people in their identities.',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['sexuality'],
    image: 'straight-ally.png',
    props: {
      colors: [
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning:
            'part of the old <a href="/flag/heterosexual">heterosexual</a> flag',
          value: '#000000',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            'part of the old <a href="/flag/heterosexual">heterosexual</a> flag',
          value: '#FFFFFF',
        },
        {
          id: 'red',
          name: 'red',
          hue: 'red',
          meaning: 'life',
          value: '#FC0006',
        },
        {
          id: 'orange',
          name: 'orange',
          hue: 'orange',
          meaning: 'healing',
          value: '#FDA507',
        },
        {
          value: 'yellow',
          namelue: 'yellow',
          hue: 'yellow',
          meaning: 'sunlight',
          value: '#FFFF0B',
        },
        {
          id: 'green',
          name: 'green',
          hue: 'green',
          meaning: 'nature',
          value: '#118301',
        },
        {
          id: 'blue',
          name: 'blue',
          hue: 'blue',
          meaning: 'Serenity',
          value: '#0000FF',
        },
        {
          id: 'indigo',
          name: 'indigo',
          hue: 'purple',
          meaning: 'Spirit',
          value: '#7E0080',
        },
      ],
      symbols: [
        {
          id: 'A',
          name: 'A',
          meaning: '"A" as in "ally"',
          icon: '',
        },
      ],
    },
    matches: {
      colors: [
        'back',
        'white',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
      ],
      symbols: ['A'],
    },
    keywords: [
      'hetero',
      'a decent human being, congrats!',
      'common sense',
      'respectful',
      'supporting',
      'ally',
      'potential friend',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'agender',
    name: 'agender pride',
    description:
      'A person who is without a gender and/or rejects the idea of having a gender completely.',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'agender.png',
    props: {
      colors: [
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: 'absence of gender',
          value: '#000000',
        },
        {
          id: 'silver',
          name: 'silver',
          hue: 'gray',
          meaning: '',
          value: '#B6B6B6',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: 'absence of gender',
          value: '#FFFFFF',
        },
        {
          id: 'pale-green',
          name: 'pale green',
          hue: 'lightgreen',
          meaning:
            '<a href="flag/nonbinary">non-binary</a>; as the opposite of the highly gendered purple',
          value: '#BBF884',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['black', 'gray', 'white', 'lightgreen'],
      symbols: [],
    },
    keywords: [
      'concept',
      "what's a gender? Can you eat that?",
      'rejecting the concept of having a gender',
      'social construct',
      'no gender',
      'genderless',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-21',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'androgyne',
    name: 'androgyne pride',
    description:
      'A person whos gender identity is androgyne (greek. <i>andrós</i>: male/masculinity; <i>gynḗ</i>: female/femininity) is someone whos gender falls between <i>male*</i> and <i>female*</i>.<br><br>It can also be a combination of both. <br>Not everyone who commonly gets refered to as <i>"androgyous looking"</i> has a androgyne gender identity and vise versa. <br><br>It\'s part of the <a href="flag/nonbinary">non-binary</a> spectrum, however it is <strong>not the same as being non-binary.</strong>',
    origin: {
      history: '',
      author: 'saveferris on tumblr (not confirmed)',
      publicationDate: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'androgyne.png',
    props: {
      colors: [
        {
          id: 'wild-strawberry',
          name: 'wild strawberry',
          hue: 'pink',
          meaning: 'femininity (translated from Greek: <i>gynḗ</i>)',
          value: '#fe2d7f',
        },
        {
          id: 'light-slate-blue',
          name: 'light slate blue',
          hue: 'purple',
          meaning: 'masculinity (translated from Greek: <i>andrós</i>)',
          value: '#9837ff',
        },
        {
          id: 'deep-sky-blue',
          name: 'deep sky blue',
          hue: 'lightblue',
          meaning:
            'represents the combining of <i>femininity</i> and <i>masculinity</i>',
          value: '#00b7e8',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['pink', 'purple', 'lightblue'],
      symbols: [],
    },
    keywords: ['androgyne', 'androgyn', 'between', 'male*', 'female*'],
    sources: [
      {
        link: 'https://deconforming.com/gender-pride-flags/#androgyne',
        name: 'Deconforming.com | gender pride flags - androgyne',
        researchDate: '2020-05-27',
      },
      {
        link: 'https://gender.wikia.org/wiki/Androgyne',
        name: 'Gender Wiki - Androgyne',
        researchDate: '2020-05-27',
      },
      {
        link:
          'https://pridearchive.tumblr.com/post/92744874921/androgyne-pride',
        name: 'pridearchive tumblr | androgyne pride',
        researchDate: '2020-05-27',
      },
      {
        link:
          'https://www.deviantart.com/pride-flags/art/Androgyne-3-556657262',
        name: 'DeviantArt.com/pride-flags - Androgyne Flag',
        researchDate: '2020-05-27',
      },
      {
        link:
          'https://commons.wikimedia.org/wiki/File:Androgyne_3_by_pride_flags-d97f3hq.png',
        name: 'Wiki Commons - Androgyne Flag',
        researchDate: '2020-07-22',
      },
    ],
  },
  {
    id: 'genderfluid',
    name: 'genderfluid / genderflex pride',
    description:
      'As the name suggests, genderfluid/genderflex aren´t locked in one gender identity.<br> Their identity can shift and vary over time.',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'genderfluid.png',
    props: {
      colors: [
        {
          id: 'hot-pink',
          name: 'hot pink',
          hue: 'pink',
          meaning: 'femininity',
          value: '#FD6EA4',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: 'a lack of gender',
          value: '#FFFFFF',
        },
        {
          id: 'dark-violet',
          name: 'dark violet',
          hue: 'purple',
          meaning: 'masculinity; femininity',
          value: '#BD00D7',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: 'all genders',
          value: '#000000',
        },
        {
          id: 'cerulean-blue',
          name: 'cerulean blue',
          hue: 'blue',
          meaning: 'masculinity',
          value: '#2F2FBE',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['pink', 'white', 'purple', 'black', 'blue'],
      symbols: [],
    },
    keywords: ['switching', 'fluid', 'changing', 'inconsistent'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-14',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'genderqueer',
    name: 'genderqueer pride',
    description:
      'Genderqueer is an umbrella term for <a href="flag/nonbinary">non-binary</a> people, who don´t really fit the provided categories, especially the binary.',
    origin: {
      history:
        'After some iterations the now commonly known color palette was created in 2011.',
      author: 'Marilyn Roxie',
      publicationDate: 'June 2011',
      flagAlterations: [
        {
          title: 'Original Design (June 2010)',
          imageUrl: 'genderqueer/genderqueer_v1.png',
          imageAlt:
            'The original version of the flag featuring the letters "GQ" as well as a cross-like design',
          description:
            'Original Design from June 2010 including the shorthand "GQ"',
        },
        {
          title: 'Second Version (September 2010)',
          imageUrl: 'genderqueer/genderqueer_v2.png',
          imageAlt: 'The colors green and purple are swaped.',
          description:
            'In the second version from September 2010, the order of the stripes was different to the now common one.',
        },
      ],
    },
    facts: [],
    categories: ['gender'],
    image: 'genderqueer/genderqueer.png',
    props: {
      colors: [
        {
          id: 'lavender',
          name: 'lavender',
          hue: 'purple',
          meaning:
            'androgynous; representing the "queer" in genderqueer; It\'s a mixture of the blue (men) and pink (women) of the <a href="flag/transgender">transgender pride flag</a>.',
          value: '#b57edc',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            'agender; simular to the gender neutral part of the <a href="flag/transgender">transgender pride flag</a>.',
          value: '#FFFFFF',
        },
        {
          id: 'dark-chartreuse-green ',
          name: 'limeade',
          hue: 'green',
          meaning:
            '<a href="flag/nonbinary">non-binary</a>; the lavender color inversed to indicate the outside a binary.',
          value: '#4B851E',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['purple', 'white', 'green'],
      symbols: [],
    },
    keywords: [
      'umbrella term',
      '☂️',
      'spectrum',
      'queer',
      'identity',
      'outside the box',
      'gender non conforming',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-15',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09',
      },
      {
        link: 'https://genderqueerid.com/about-flag',
        name: 'genderqueerid.com - about the flag',
        researchDate: '2020.03.15',
      },
      {
        link:
          'https://genderqueerid.com/post/48778828472/on-the-genderqueer-and-non-binary-flag-and',
        name: 'genderqueerid.com - flag history',
        researchDate: '2020.03.15',
      },
    ],
  },
  {
    id: 'nonbinary',
    name: 'nonbinary pride',
    description:
      'Often used as an umbrella term, nonbinary (also called enby, NB) don´t fit into male* and female* categories.',
    origin: {
      history: '',
      author: 'Kye Rowan',
      publicationDate: '2014',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'nonbinary.png',
    props: {
      colors: [
        {
          id: 'gorse',
          name: 'gorse',
          hue: 'yellow',
          meaning: 'gender seperate from the binary',
          value: '#FFF82F',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: 'for those with multiple genders',
          value: '#FFFFFF',
        },
        {
          id: 'medium-orchid',
          name: 'medium orchid',
          hue: 'purple',
          meaning: 'mix of male* and female*',
          value: '#9C4DD2',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning:
            'people without a gender (<a href="flag/agender">agender</a>)',
          value: '#000000',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['yellow', 'white', 'purple', 'black'],
      symbols: [],
    },
    keywords: [
      'nb',
      'non binary',
      'enby',
      'identity',
      'umbrella term',
      '☂️',
      'spectrum',
      'trans*',
      'non-binary',
      'identity',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.10',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-15',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.10',
      },
    ],
  },
  {
    id: 'transgender',
    name: 'transgender pride',
    description:
      'Transgender people are people who´s gender identity doesn´t match their gender assigned at birth.',
    origin: {
      history: '',
      author: 'Monica Helms',
      publicationDate: '1999',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'transgender.png',
    props: {
      colors: [
        {
          id: 'maya-blue',
          name: 'maya blue',
          hue: 'lightblue',
          meaning: 'traditionally color for boys',
          value: '#60CFFA',
        },
        {
          id: 'cupid',
          name: 'cupid',
          hue: 'lightpink',
          meaning: 'traditionally color for girls',
          value: '#F4A8BA',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            'those who are transitioning; those with a neutral gender, <a href="flag/agender">no gender</a>, and those who are <a href="flag/intersex">intersex</a>.',
          value: '#FFFFFF',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['lightblue', 'lightpink', 'white'],
      symbols: [],
    },
    keywords: [
      'trans*',
      'transident',
      'umbrella term',
      '☂️',
      'gender euphoria',
      'not cis',
      'transsexual',
      'non cis',
      '⚧️',
      '🏳️‍⚧️',
      'gender dysphoria',
      '🥚',
      'EGG',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.10',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-13',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.10',
      },
    ],
  },
  {
    id: 'demigirl',
    name: 'demigirl pride',
    description:
      'A demigirl (also known as demiwoman or demifemale person) is someone who partly (<a href="flag/demigender">demi</a> meaning half), but not completely identifies as a girl*, female* or feminine. <br><br>They may also identify as another gender or even as <a href="flag/agender">agender</a> (genderless), but they don\'t have to.<br>If they are afab (assigned female at birth) it is likely that they feel somewhat disconnected from their assigned gender, but its most likely not enough to cause actual discomfort or even dysphoria.',
    origin: {
      history: '',
      author: 'by Transrants (Tumblr)',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'demigirl.png',
    props: {
      colors: [
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            'Represents gender neutrality, <a href="flag/agender">agender</a> or nonbinary identity.<br> It can be compared to the center of the <a href="flag/transgender">trans* pride flag</a>. ',
          value: '#fff',
        },
        {
          id: 'carnation-pink',
          name: 'carnation pink',
          hue: 'lightpink',
          meaning: 'female* / femme* , represents femininity',
          value: '#ffaec9',
        },
        {
          id: 'silver',
          name: 'silver',
          hue: 'gray',
          meaning:
            'Describes the identity as <a href="flag/demigender">demi</a> (half-) meaning it\'s only partially fitting.',
          value: '#c4c4c4',
        },
        {
          id: 'gray',
          name: 'gray',
          hue: 'gray',
          meaning: '',
          value: '#7f7f7f',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['white', 'lightpink', 'gray', 'gray'],
      symbols: [],
    },
    keywords: ['demigirl', 'demiwoman', 'demifemale person'],
    sources: [
      {
        link: 'https://gender.wikia.org/wiki/Demigirl',
        name: 'Gender Wiki - Demigirl',
        researchDate: '2020-02-18',
      },
      {
        link: 'https://nonbinary.wiki/wiki/Demigender',
        name: 'non-binary Wiki - Demigender',
        researchDate: '2020-02-18',
      },
      {
        link: 'https://deconforming.com/gender-pride-flags/',
        name: 'Deconforming.com - gender pride flags',
        researchDate: '2020-02-18',
      },
    ],
  },
  {
    id: 'demiboy',
    name: 'demiboy pride',
    description:
      'A demiboy (also known as demiguy or demiman person) is someone who partly (<a href="flag/demigender">demi</a> meaning half), but not completely identies as a boy* or male*.<br><br>They may also identify as another gender or even as <a href="flag/ agender">agender</a> (genderless), but they don\'t have to.<br>If they are amab (assigned male at birth) it is likely that they feel somewhat disconnected from their assigned gender, but it most likely is not bad enough to cause actual discomfort or even dysphoria.',
    origin: {
      history: '',
      author: 'by Transrants (Tumblr)',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'demiboy.png',
    props: {
      colors: [
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            '<a href="flag/agender">Agender</a> or <a href="flag/nonbinary">nonbinary</a> gender identity',
          value: '#fff',
        },
        {
          id: 'aqua',
          name: 'aqua',
          hue: 'lightblue',
          meaning: 'male* / masc*',
          value: '#9ad9eb',
        },
        {
          id: 'silver',
          name: 'Silver',
          hue: 'gray',
          meaning:
            'Describes the identity as <a href="flag/demigender">demi</a> (half-) meaning it\'s only partially fitting.',
          value: '#c4c4c4',
        },
        {
          id: 'gray',
          name: 'gray',
          hue: 'gray',
          meaning: '',
          value: '#7f7f7f',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['white', 'lightblue', 'gray', 'gray'],
      symbols: [],
    },
    keywords: ['demiguy', 'demiboy', 'demiman', 'demimale person'],
    sources: [
      {
        link: 'https://gender.wikia.org/wiki/Demiguy',
        name: 'Gender Wiki - Demiguy',
        researchDate: '2020-02-18',
      },
      {
        link: 'https://nonbinary.wiki/wiki/Demigender',
        name: 'non-binary Wiki - Demigender',
        researchDate: '2020-02-18',
      },
    ],
  },
  {
    id: 'bigender',
    name: 'bigender pride',
    description:
      'A person who has not one, but two genders. These can be binary male and female but could also include other gender indentitites (eg. <a href="nonnbinary">nonbinary</a>, <a href="agender">agender</a>, etc). <br>Their current gender identities can and may vary over time or be simultaneous.',
    origin: {
      history:
        'The flag originally often been used as both bigender and <a href="flag/intersex">intersex flag</a>. Nowadays most of the community settled for it as the bigender flag. <br><br>📝 Note: However the original author claimed that it was meant to refer to sex instead of gender.',
      author: 'Natalie Phox (@NittrusFox)',
      publicationDate: '2009 (adjusted version)',
      flagAlterations: [
        {
          title: 'Bigender original version',
          imageUrl: 'bigender/bigender_v1.png',
          imageAlt: '',
          description:
            'The original flag featured a color gradient. However this was removed due to printing issues.',
        },
      ],
    },
    facts: [],
    categories: ['gender'],
    image: 'bigender/bigender.png',
    props: {
      colors: [
        {
          id: 'puce',
          name: 'puce',
          hue: 'pink',
          meaning: 'femininity',
          value: '#c478a2',
        },
        {
          id: 'shocking-violet',
          name: 'shocking-violet',
          hue: 'lightpink',
          meaning: 'femininity',
          value: '#eda5cd',
        },
        {
          id: 'lavender',
          name: 'lavender',
          hue: 'purple',
          meaning: 'no gender',
          value: '#d5c7e8',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: '<a href="flag/transgender">trans*</a> identity',
          value: '#FFFFFF',
        },
        {
          id: 'cornflower',
          name: 'cornflower',
          hue: 'lightblue',
          meaning: 'masculinity',
          value: '#99c7e8',
        },
        {
          id: 'havelock-blue',
          name: 'havelock blue',
          hue: 'blue',
          meaning: 'masculinity',
          value: '#6d82d1',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['purple', 'white', 'lightblue', 'blue', 'lightpink', 'pink'],
      symbols: [],
    },
    keywords: ['identity', 'multiple genders', 'two', 'double the trouble'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://majesticmess.com/encyclopedia/intersex-flag-natalie-phox/',
        name: 'majesticmess.com | intersex flag',
        researchDate: '2020.04.16',
      },
      {
        link:
          'https://www.reddit.com/r/lgbt/comments/e16txd/this_is_the_intersexbigender_flag_created_by/',
        name: 'reddit.com/r/rlgbt | intersex/bigender flag',
        researchDate: '2020.04.16',
      },
      {
        link: 'https://transpride.tumblr.com/post/1531378118',
        name: 'transpride.tumblr.com | source of intersex flag',
        researchDate: '2020.04.16',
      },
      {
        link: 'https://www.dictionary.com/e/gender-sexuality/bigender',
        name: 'dictionary.com | bigender',
        researchDate: '2020.04.16',
      },
      {
        link: 'https://www.deviantart.com/pride-flags/art/Bigender-1-543925382',
        name: 'deviantart.com/pride-flags | bigender(1)',
        researchDate: '2020.04.16',
      },
    ],
  },
  {
    id: 'cis',
    name: 'cisgender',
    description:
      'Someone whose gender identity aligns with their "gender assigned at birth". <br>Info: The flag was originally intended as an alternative version for the <a href="/flag/heterosexual">heterosexual flag</a> but later turned into the cisgender flag.  It\'s an alteration based on the <a href="/flag/bi">bisexual flag</>.',
    origin: {
      history: '',
      author: 'Arianod on Deviantart',
      publicationDate: 'June 2014',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'cisgender.png',
    props: {
      colors: [
        {
          id: 'razzmatazz',
          name: 'razzmatazz',
          hue: 'pink',
          meaning: 'color representing female sex',
          value: '#D50071',
        },
        {
          id: 'international-klein-blue',
          name: 'international klein blue',
          hue: 'blue',
          meaning: 'color representing male sex',
          value: '#002BA9',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['pink', 'blue'],
      symbols: [],
    },
    keywords: ['cis', 'binary', 'assigned gender at birth', 'AGAB'],
    sources: [
      {
        link:
          'https://www.deviantart.com/arianod/art/Heterosexual-Flag-463893682',
        name: 'DeviantArt.com/Arianod - Heterosexual Flag',
        researchDate: '2020-03-19',
      },
      {
        link:
          'https://www.deviantart.com/flagsforcishets/art/Straight-Cisgender-Gender-Binary-pride-flag-8-3-625974772',
        name: 'DeviantArt.com/FlagsforCisHets - Cisgender Flag',
        researchDate: '2020-03-19',
      },
    ],
  },
  {
    id: 'intersex',
    name: 'intersex pride',
    description:
      'Intersex people are often seen as the third sex. Their bodys often don´t fit what is seen as typical "male*" or "female*" definitions.',
    origin: {
      history: '',
      author: 'the organization Intersex International Australia',
      publicationDate: '2013',
      flagAlterations: [],
    },
    facts: [],
    categories: ['gender'],
    image: 'intersex.png',
    props: {
      colors: [
        {
          id: 'school bus yellow',
          name: 'school bus yellow',
          hue: 'yellow',
          meaning:
            'neutrality in gender; stays away from typically gendered colors like blue and pink.',
          value: '#FEDB09',
        },
        {
          id: 'dark violet',
          name: 'dark violet',
          hue: 'purple',
          meaning: '',
          value: '#7800AB',
        },
      ],
      symbols: [
        {
          id: 'circle',
          name: 'circle',
          meaning:
            'unbroken; symobolising wholeness and completeness as well as their	potentialities',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['yellow', 'purple'],
      symbols: ['circle'],
    },
    keywords: ['inter', 'nonbinary', 'biological', 'sex'],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.10',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-12',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.10',
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.10',
      },
    ],
  },
  {
    id: 'aromantic',
    name: 'aromantic pride',
    description:
      'An aromantic person is someone, who has little to no interest in a romantic relationship. <br>They often can´t develop romantic feelings and usually don´t "fall in love", however they tend to experience stronger platonic feelings. <br><br>Aromantic can also be used as an umbrella term for the aro spectrum.',
    origin: {
      history: '',
      author: 'Cameron Whimsey',
      publicationDate: '2014',
      flagAlterations: [],
    },
    facts: [],
    categories: ['attraction'],
    image: 'aromantic.png',
    props: {
      colors: [
        {
          id: 'japanese laurel',
          name: 'japanese laurel',
          hue: 'green',
          meaning: 'aromanticism',
          value: '#338733',
        },
        {
          id: 'feijoa',
          name: 'feijoa',
          hue: 'lightgreen',
          meaning: 'aromantic spectrum',
          value: '#AAD77A',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning:
            'platonic and aesthetic attraction; queerplatonic relationships',
          value: '#FFFFFF',
        },
        {
          id: 'dark gray',
          name: 'dark gray',
          hue: 'gray',
          meaning: 'gray-aromantic and demiromantic people',
          value: '#AAAAAA',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: 'sexuality spectrum',
          value: '#000000',
        },
      ],
      symbols: [],
    },
    matches: {
      colors: ['green', 'lightgreen', 'white', 'gray', 'black'],
      symbols: [],
    },
    keywords: [
      'umbrella term',
      '☂️',
      'spectrum',
      'uninterested',
      'only platonic relationships',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://cameronwhimsy.tumblr.com/post/75868343112/ive-been-reading-up-on-a-lot-of-the-discussion',
        name: 'cameronwhimsy tumblr - new aromantic flag',
        researchDate: '2019.10.09',
      },
    ],
  },
  {
    id: 'polyamory',
    name: 'polyamory pride',
    description:
      'Polyamory describes the love/relationships to multiple partner at the same time. All involved parties are consenting to this sort of relationship.',
    origin: {
      history: '',
      author: '',
      publicationDate: '',
      flagAlterations: [],
    },
    facts: [],
    categories: ['attraction'],
    image: 'polyamory.png',
    props: {
      colors: [
        {
          id: 'gold',
          name: 'gold',
          hue: 'yellow',
          meaning: 'value of emotional attachment to others',
          value: '#FFFF0B',
        },
        {
          id: 'blue',
          name: 'blue',
          hue: 'blue',
          meaning: 'openness and honesty among all partners',
          value: '#0000FF',
        },
        {
          id: 'red',
          name: 'red',
          hue: 'red',
          meaning: 'love and passion',
          value: '#FC0006',
        },
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning:
            'solidarity with those who have to hide their polyamorous identity',
          value: '#000000',
        },
      ],
      symbols: [
        {
          id: 'pi',
          name: 'pi',
          meaning:
            'greek letter for "pi" (first letter of the word "polyamory") ',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['blue', 'red', 'black', 'yellow'],
      symbols: ['pi'],
    },
    keywords: [
      'multiple partner',
      'poly',
      'love',
      'relationship',
      'share',
      'content',
      'sharing',
    ],
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09',
      },
      {
        link:
          'https://adorablepolycouples.tumblr.com/post/9224234337/polyamory-pride-flag-the-meaning-of-the',
        name: 'adorablepolycouples tumblr - polyamory flag',
        researchDate: '2019.10.10',
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.10',
      },
    ],
  },
  {
    id: "qpr",
    name: "Queerplatonic Relationship Pride",
    description: `A Queerplatonic Relationship (short: <i>QPR</i>), also known as <i>Quasiplatonic</i> or <i>Quirkyplatonic Partnership (QPPs)</i>, describes a long-term commited platonic relationship which exceeds the general understanding of a "traditional friendship".<br>
                    As such, it isn't based on romance but consults of the same or even a stronger emotional commitment. The involved people may have a deep emotional (platonic) connection, may consider spending their future together and maybe even (plan on) raising a child together.<br><br>
                    Despite this relationship term being quite popular in the <a href="/flag/aromantic">aromantic community</a>, everyone can be in such a partnership, if they find it fitting for their type of engagement.<br>
                    It also means some people in a QPM are having sexual interactions, others don't. Despite what some websites claim, the lack of sexuality isn't an requirement for having a QPR.<br>
                  `,
    origin: {
      history: `The word <i>queer</i> (in this context: "different") describes the relationship as differing from the general understanding of relationships but doesn't imply the identity of the envolved people.<br>
                  The term  was created as a counter to the general believe that a (monogamous) romantic relationship is the most important type of relationship and the ultimate (and only) way to happiness (this phenomenon is called "<i>amatonormativity</i>").<br>
                  As such QPR are understood as (at least) equally valued to a more traditional romantic relationship.`,
      publicationDate: "",
      author: "anonymous [but known]",
      flagAlterations: [
        {
          title: "Alternative design",
          imageAlt: "The color schema remains the same, but the heart of the flag is missing and the symmetry is gone.",
          imageUrl: "qpr/queerplatonic-relationship_simple.png",
          description: "This version is more simplified and alining with the typical type of prideflags. It's also easer to replicate and/or print."
        }
      ]
    },
    facts: [
      `Queerplatonic Partners refer to each by the terms of their choosing: Some calling themselves friends, others (life-)partners, QPP (queerplatonic partner) or another term. With some using the term "my zucchini" to describe one another, which originally was a joke to fill the gap of a proper term for queerplatonic parties.`,
      `The term <i>queerplatonic</i> first appeared on December 2010 in a thread called "<a href="https://kaz.dreamwidth.org/238564.html">Kaz's Scribblings</a>"`,
      `If one has the wish to form a deep (non-romantic) bond to someone and be their queerplatonic partner, it's called "having a <i>squish</i> on someone".`,
      `The term <i>amatonormativity</i> originates from a book called <a href="https://elizabethbrake.com/minimizing-marriage/">"Minimizing marriage"</a> by Elizabeth Brake.`,
      `The proposed day for celebrating QPRs is the annual <i>third Saturday of July</i>`
    ],
    categories: [
      "attraction"
    ],
    image: "qpr/queerplatonic-relationship.png",
    props: {
      colors: [
        {
          id: "himalayan-balsam",
          name: "himalayan balsam",
          hue: "lightpink",
          meaning: "Lighter version of red, which commonly means romantic attraction, but also still differs from it.",
          value: "#ff93ca"
        },
        {
          id: "the-end",
          name: "the end",
          hue: "black",
          meaning: "Possibly resembles the gray-aro spectrum.",
          value: "#2a2a2a"
        },
        {
          id: "platinum-granite",
          name: "platinum granite",
          hue: "gray",
          meaning: "Possibly resembles the gray-aro spectrum.",
          value: "#7f7f7f"
        },
        {
          id: "white",
          name: "white",
          hue: "white",
          meaning: "Possibly resembles the gray-aro spectrum.",
          value: "#ffffff"
        },
        {
          id: "flat-yellow",
          name: "flat yellow",
          hue: "yellow",
          meaning: "Platonic attraction",
          value: "#fef103"
        }
      ],
      symbols: [
        {
          id: "heart",
          name: "heart",
          meaning: "",
          icon: "heart.svg"
        }
      ]
    },
    matches: {
      colors: [
        "lightpink",
        "black",
        "gray",
        "white",
        "yellow"
      ],
      symbols: [
        "heart"
      ]
    },
    keywords: [
      "qpr",
      "couple",
      "dating",
      "relationship",
      "aromantic",
      "zucchini",
      "squish"
    ],
    sources: [
      {
        link: "https://pride-color-schemes.tumblr.com/post/147022014680/queerplatonic-quasiplatonic-or-quirkyplatonic",
        name: "Pride-Colors-Schemes.tumblr.com | queerplatonic, quasiplatonic or quirkyplatonic",
        researchDate: "2021-01-09"
      },
      {
        link: "http://wiki.asexuality.org/Queerplatonic",
        name: "Asexuality Wiki | Queerplatonic",
        researchDate: "2021-01-23"
      },
      {
        link: "https://www.pinknews.co.uk/2018/04/18/what-is-a-quasiplatonic-aka-queerplatonic-relationship-friendship/",
        name: "Pinknews | What is a quasiplatonic relationship",
        researchDate: "2021-01-23"
      },
      {
        link: "https://www.slanglang.net/slang/lgbtq/queerplatonic/",
        name: "Slanglang | Queerplatonic",
        researchDate: "2021-06-10"
      },
      {
        link: "https://aminoapps.com/c/lgbt-1/page/item/queerplatonic-relationships/6PwZ_JWguYI6zEpk38LW4pml0VJdkpGLRZj",
        name: "aminoapps LGBT | Queerplatonic Relationships",
        researchDate: "2021-06-10"
      },
      {
        link: "https://mogai.fandom.com/wiki/Queerplatonic",
        name: "MOGAI Fandom | Queerplatonic",
        researchDate: "2021-06-22"
      },
      {
        link: "https://www.youtube.com/watch?v=J6Xg9sA6XWA",
        name: "Youtube - Evie Lupine | What are Queerplatonic Relationships? (QPRs)",
        researchDate: "2021-06-22"
      },
      {
        link: "https://lgbta.wikia.org/wiki/Queerplatonic_Relationship",
        name: "LGBTA Wikia | Queerplatonic Relationship",
        researchDate: "2021-06-22"
      },
      {
        link: "https://aromantic.wikia.org/wiki/QPR_Day",
        name: "aromantic Wikia | QPR Day",
        researchDate: "2021-06-24"
      }
    ]
  },
  {
    id: 'leather',
    name: 'leather fetish pride',
    description: 'A representation of the BDSM leather fetish community.',
    origin: {
      history:
        'Originally used to represent the <a href="flag/gay">gay</a> leather community, it nowadays represents the leather and BDSM subculture in general.',
      author: 'Tony DeBlase',
      publicationDate: '1989',
      flagAlterations: [],
    },
    facts: [],
    categories: ['kink'],
    image: 'leather.png',
    props: {
      colors: [
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning: '',
          value: '#000000',
        },
        {
          id: 'royal-blue',
          name: 'royal blue',
          hue: 'blue',
          meaning: '',
          value: '#262680',
        },
        {
          id: 'white',
          name: 'white',
          hue: 'white',
          meaning: '',
          value: '#ffffff',
        },
        {
          id: 'alizarin',
          name: 'alizarin',
          hue: 'red',
          meaning: '',
          value: '#E72336',
        },
      ],
      symbols: [
        {
          id: 'heart',
          name: 'heart',
          meaning: '',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['black', 'blue', 'white', 'red'],
      symbols: ['heart'],
    },
    keywords: ['fetish'],
    sources: [
      {
        link: 'https://en.wikipedia.org/wiki/Leather_Pride_flag',
        name: 'Wikipedia.org - Leather Pride Flag',
        researchDate: '2020-01-29',
      },
      {
        link:
          'https://web.archive.org/web/20080915142834/http://www.leatherarchives.org/exhibits/deblase/pride.htm',
        name: 'Leatherarchives.org - pride [Web Archive]',
        researchDate: '2020-01-29',
      },
    ],
  },
  {
    id: 'rubber',
    name: 'rubber pride',
    description:
      'This flag represents the rubber and latex fetish communities.<br><br>It is intended to <i>"identify like minded [people] and reflect  the sensory, sensual, and mental passion [they] have for rubber."</i><br><br>It also is known as the latex pride flag.',
    origin: {
      history: '',
      author: 'Peter Tolos and Scott Moats',
      publicationDate: '1994',
      flagAlterations: [],
    },
    facts: [],
    categories: ['kink'],
    image: 'rubber/rubber.svg',
    props: {
      colors: [
        {
          id: 'black',
          name: 'black',
          hue: 'black',
          meaning:
            '<i>"Our lust for the look and feel for shiny black rubber.”</i>  - original artists',
          value: '#000000',
        },
        {
          id: 'venetian-red',
          name: 'venetian red',
          hue: 'red',
          meaning:
            '<i>“Our blood passion for rubber and rubbermen.”</i>  - original artists',
          value: '#d41e09',
        },
        {
          id: 'tangerine-yellow',
          name: 'tangerine yellow',
          hue: 'yellow',
          meaning:
            '<i>“Our drive for intense rubber play and fantasies.”</i> - original artists',
          value: '#fcc901',
        },
      ],
      symbols: [
        {
          id: 'chevron',
          name: 'chevron',
          meaning: 'literally a kink in the line; representing kinkness',
          icon: '',
        },
      ],
    },
    matches: {
      colors: ['black', 'red', 'yellow'],
      symbols: ['chevron'],
    },
    keywords: [
      'rubber',
      'latex',
      'fetish',
      'kink',
      'passion',
      'fantasy',
      'play',
    ],
    sources: [
      {
        link: 'http://www.leatherpedia.org/rubber-pride-flag/',
        name: 'Leatherpedia.org | rubber pride flag',
        researchDate: '2020-05-26',
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-19',
        name: 'Pride.com | complete guide to queer pride flags - Flag #19',
        researchDate: '2020-05-26',
      },
      {
        link:
          'https://commons.wikimedia.org/wiki/File:Rubber_Fetish_Pride_Flag.svg',
        name: 'Wiki Commons | Rubber Fetish Pride Flag',
        researchDate: '2020-05-26',
      },
    ],
  },
];

export default flags;

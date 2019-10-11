const flags = [
  {
    id: 'gay',
    name: 'gay pride',
    description:
      'Traditional symbol of the LGBTQ+ movement. It represents people who identify as homosexual as well as the queer community as a whole.',
    origin: {
      firstAppearance: 'Gilbert Baker in San Francisco',
      timeframe: '1979'
    },
    category: 'sexuality',
    image: 'gay.png',
    props: {
      colors: [
        {
          id: 'red',
          meaning: 'life',
          value: '#FC0006'
        },
        {
          id: 'orange',
          meaning: 'healing',
          value: '#FDA507'
        },
        {
          value: 'yellow',
          meaning: 'sunlight',
          value: '#FFFF0B'
        },
        {
          id: 'green',
          meaning: 'nature',
          value: '#118301'
        },
        {
          id: 'blue',
          meaning: 'harmony',
          value: '#0000FF'
        },
        {
          id: 'purple',
          meaning: 'spirit',
          value: '#7E0080'
        }
      ]
    },
    matches: {
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-4',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09'
      },
      {
        link: 'https://medium.com/matthews-place/lgbtq-symbols-7d925b396ebe',
        name: 'Matthews place on Medium - lgtbq symbols',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'gay-bear',
    name: 'gay bear brotherhood',
    description:
      'A gay subculture formed from the interest of more sturdier and hairy men*, which are also called "bears"',
    origin: {
      firstAppearance: 'by Craig Byrnes for the International Bear Brotherhood',
      timeframe: '1995'
    },
    category: 'sexuality',
    image: 'gay-bear.png',
    props: {
      colors: [
        {
          id: 'brown',
          meaning: 'the colors represent different bear fur types',
          value: '#613401'
        },
        {
          id: 'orange',
          meaning: 'the colors represent different bear fur types',
          value: '#D46004'
        },
        {
          id: 'yellow',
          meaning: 'the colors represent different bear fur types',
          value: '#D46004'
        },
        {
          id: 'lightyellow',
          meaning: 'the colors represent different bear fur types',
          value: '#FEE8BA'
        },
        {
          id: 'white',
          meaning: 'the colors represent different bear fur types',
          value: '#FFFFFF'
        },
        {
          id: 'darkgray',
          meaning: 'the colors represent different bear fur types',
          value: '#603401'
        },
        {
          id: 'black',
          meaning: 'the colors represent different bear fur types',
          value: '#000000'
        }
      ],
      symbols: [
        {
          id: 'paw',
          meaning: '🐻',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['brown', 'orange', 'yellow', 'white', 'gray', 'black'],
      symbols: ['paw']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-18',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'gay-twink',
    name: 'twink pride',
    description:
      'A gay subculture formed by the interest in twinks. A twink is a young man* (teen to early 20s) that looks younger then they are, appears more feminine, has little to no body and facial hair and is rather slim.',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'sexuality',
    image: 'gay-twink.png',
    props: {
      colors: [
        {
          id: 'lightpink',
          meaning: 'feminine nature',
          value: '#FDACFF'
        },
        {
          id: 'white',
          meaning: '',
          value: '#FFFFFF'
        },
        {
          id: 'lightyellow',
          meaning: '',
          value: '#FFFF82'
        },
        {
          id: 'black',
          meaning: '',
          value: '#000000'
        }
      ],
      symbols: [
        {
          id: 'double_mars',
          meaning: 'male* sexuality',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['lightpink', 'white', 'yellow', 'black'],
      symbols: ['mars']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'asexual',
    name: 'asexual pride',
    description:
      'An asexual person is someone, who has little or no interest in sexual activity. Put simply: They lack what´s commonly refered to as sex drive. That being said, this term does not tell you anything on wheater or not they enjoy sexual activity or completly avoid it. It can also be used as an umbrella term',
    origin: {
      firstAppearance: '',
      timeframe: '2010'
    },
    category: 'sexuality',
    image: 'asexual.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: 'asexuality',
          value: '#000000'
        },
        {
          id: 'gray',
          meaning: 'gray-asexuality, demi-sexuality',
          value: '#603401'
        },
        {
          id: 'white',
          meaning: 'sexuality',
          value: '#FFFFFF'
        },
        {
          id: 'purple',
          meaning: 'community',
          value: '#7F0081'
        }
      ]
    },
    matches: {
      colors: ['black', 'gray', 'white', 'purple'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-17',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'bisexual',
    name: 'bisexual pride',
    description:
      'Sexual attraction to the own as well as to one (or more) other sexes/genders.',
    origin: {
      firstAppearance: 'Michael Page',
      timeframe: 'December 5, 1998'
    },
    category: 'sexuality',
    image: 'bisexual.png',
    props: {
      colors: [
        {
          id: 'pink',
          meaning: 'same sex/gender attraction / sterotypical for girl*',
          value: '#D50071'
        },
        {
          id: 'magenta',
          meaning:
            'possible attraction to anywhere on the gender spectrum / blending in between both straight and gay communitites',
          value: '#9B4797'
        },
        {
          id: 'blue',
          meaning: 'different sex/gender attraction  / sterotypical for boy*',
          value: '#002BA9'
        }
      ]
    },
    matches: {
      colors: ['pink', 'purple', 'blue'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/bisexual/2015/5/15/6-facts-you-never-knew-about-bisexual-flag-yes-there-one',
        name: 'Pride.com - facts about the bisexual flag',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-17',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'demisexual',
    name: 'demisexual/graysexual pride',
    description:
      'A person who doesn´t experience sexual attraction unless they have a deep emotional connection to someone',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'sexuality',
    image: 'demisexual.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: 'asexuality',
          value: '#000000'
        },
        {
          id: 'white',
          meaning: 'sexuality',
          value: '#FFFFFF'
        },
        {
          id: 'purple',
          meaning: 'community',
          value: '#7F0081'
        },
        {
          id: 'lightgray',
          meaning: 'gray-ace and demisexuality',
          value: '#D3D3D3'
        }
      ]
    },
    matches: {
      colors: ['black', 'white', 'purple', 'gray'],
      symbols: ['triangle']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-17',
        name: 'Pride.com - queer flag guide',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'heterosexual',
    name: 'Heterosexual/Straight',
    description: 'People who are sexaully attracted to the opposite sex.',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'sexuality',
    image: 'heterosexual.png',
    props: {
      colors: [
        {
          id: 'lightblue',
          meaning: 'male sex',
          value: '#ED5B9E'
        },
        {
          id: 'white',
          meaning: 'sexuality',
          value: '#FFFFFF'
        },
        {
          id: 'pink',
          meaning: 'female sex',
          value: '#ED5B9E'
        }
      ]
    },
    matches: {
      colors: ['lightblue', 'white', 'pink'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'lesbian',
    name: 'lesbian pride',
    description: 'Lesbians are homosexually attracted to other females*.',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'sexuality',
    image: 'lesbian.png',
    props: {
      colors: [
        {
          id: 'red',
          meaning: 'life',
          value: '#FC0006'
        },
        {
          id: 'orange',
          meaning: 'healing',
          value: '#FDA507'
        },
        {
          value: 'yellow',
          meaning: 'sunlight',
          value: '#FFFF0B'
        },
        {
          id: 'green',
          meaning: 'nature',
          value: '#118301'
        },
        {
          id: 'blue',
          meaning: 'Serenity',
          value: '#0000FF'
        },
        {
          id: 'purple',
          meaning: 'Spirit',
          value: '#7E0080'
        }
      ],
      symbols: [
        {
          id: 'venus',
          meaning: 'symbol for female* sex',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      symbols: ['venus']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'lesbian-labry',
    name: 'lesbian pride labrys',
    description: 'A lesbian flag that puts emphasis on "female* empowerment"',
    origin: {
      firstAppearance: ' Sean Campbell',
      timeframe: '1999'
    },
    category: 'sexuality',
    image: 'lesbian-labry.png',
    props: {
      colors: [
        {
          id: 'white',
          meaning: '',
          value: '#FFFFFF'
        },
        {
          id: 'black',
          meaning: '',
          value: '#000000'
        },
        {
          id: 'purple',
          meaning: '',
          value: '#7E0080'
        }
      ],
      symbols: [
        {
          id: 'labrys',
          meaning: '',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['purple', 'black', 'white'],
      symbols: ['labrys']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-10',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'lesbian-lipstick',
    name: 'lipstick lesbian pride',
    description:
      'A lesbian pride flag that puts emphasis on "femininity / being femme"',
    origin: {
      firstAppearance: 'Natalie',
      timeframe: 'JULY 28, 2010'
    },
    category: 'sexuality',
    image: 'lesbian-lipstick.png',
    props: {
      colors: [
        {
          id: 'magentarosa',
          meaning: '',
          value: '#A60061'
        },
        {
          id: 'magenta',
          meaning: '',
          value: '#B94A94'
        },
        {
          id: 'darkpink',
          meaning: '',
          value: '#D157A8'
        },
        {
          id: 'white',
          meaning: '',
          value: '#FFFFFF'
        },
        {
          id: 'lightpink',
          meaning: '',
          value: '#E4AAD1'
        },
        {
          id: 'white',
          meaning: '',
          value: '#FFFFFF'
        },
        {
          id: 'rosared',
          meaning: '',
          value: '#C64651'
        },
        {
          id: 'darkred',
          meaning: '',
          value: '#8C0B02'
        }
      ],
      symbols: [
        {
          id: 'lips',
          meaning: 'extremly feminine character',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['pink', 'purple', 'white', 'lightpink', 'red'],
      symbols: ['lips']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://thislesbianlife.wordpress.com/2010/07/28/lipstick-lesbian-pride/',
        name: 'this lesbian life - lipstick lesbian pride',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'pansexual',
    name: 'pansexual pride',
    description:
      'Pansexuality describes sexual attraction towards all gender (identities) and regardless of sex characteristics.',
    origin: {
      firstAppearance: '',
      timeframe: '2010'
    },
    category: 'sexuality',
    image: 'pansexual.png',
    props: {
      colors: [
        {
          id: 'pink',
          meaning: 'female* gendered persons (regardless of biological sex)',
          value: '#FC008D'
        },
        {
          id: 'gold',
          meaning: 'mixed gendered, genderless, thirdgendered people',
          value: '#FEDB09'
        },
        {
          id: 'lightblue',
          meaning: 'male* gendered persons (regardless of biological sex)',
          value: '#27B1FF'
        }
      ]
    },
    matches: {
      colors: ['pink', 'yellow', 'lightblue'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-10',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.deviantart.com/savvyred/journal/Pride-Flags-Colors-explained-379547414',
        name: 'deviantart savvyred - pride flag colors explained',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'polysexual',
    name: 'polysexual pride',
    description:
      'Similar to pansexuality, with an important difference: A polysexual person is attracted to multiple, yet not all genders.',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'sexuality',
    image: 'polysexual.png',
    props: {
      colors: [
        {
          id: 'magentapink',
          meaning: 'attraction to females*',
          value: '#F300BA'
        },
        {
          id: 'lightgreen',
          meaning: 'attraction to people of other genders',
          value: '#25DA69'
        },
        {
          id: 'mediumblue',
          meaning: 'attraction to males*',
          value: '#1E90F6'
        }
      ]
    },
    matches: {
      colors: ['pink', 'lightgreen', 'blue'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-20',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'straight-ally',
    name: 'straight ally',
    description:
      'People who identify as straight but support LGBTQ+ people in their identities',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'sexuality',
    image: 'straight-ally.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: 'part of the old heterosexual flag',
          value: '#000000'
        },
        {
          id: 'white',
          meaning: 'part of the old heterosexual flag',
          value: '#FFFFFF'
        },
        {
          id: 'red',
          meaning: 'life',
          value: '#FC0006'
        },
        {
          id: 'orange',
          meaning: 'healing',
          value: '#FDA507'
        },
        {
          value: 'yellow',
          meaning: 'sunlight',
          value: '#FFFF0B'
        },
        {
          id: 'green',
          meaning: 'nature',
          value: '#118301'
        },
        {
          id: 'blue',
          meaning: 'Serenity',
          value: '#0000FF'
        },
        {
          id: 'purple',
          meaning: 'Spirit',
          value: '#7E0080'
        }
      ]
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
        'purple'
      ],
      symbols: [
        {
          id: 'A',
          meaning: '"A" as in "ally"',
          icon: ''
        }
      ]
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'agender',
    name: 'agender pride',
    description:
      'A person who is without a gender and/or rejects the idea of heaving a gender completely.',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'gender',
    image: 'agender.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: 'absence of gender',
          value: '#000000'
        },
        {
          id: 'lightgray',
          meaning: '',
          value: '#B6B6B6'
        },
        {
          id: 'white',
          meaning: 'absence of gender',
          value: '#000000'
        },
        {
          id: 'lightgreen',
          meaning: 'nonbinary; as the opposite of the highly gendered purple',
          value: '#BBF884'
        }
      ]
    },
    matches: {
      colors: ['black', 'gray', 'white', 'lightgreen'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-21',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'genderfluid',
    name: 'genderfluid/Genderflex pride',
    description:
      'As the name suggests, genderfluid/genderflex aren´t locked in one gender identity. Their identity can shift and vary over time.',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'gender',
    image: 'genderfluid.png',
    props: {
      colors: [
        {
          id: 'pink',
          meaning: 'femininity',
          value: '#FD6EA4'
        },
        {
          id: 'white',
          meaning: 'a lack of gender',
          value: '#FFFFFF'
        },
        {
          id: 'purple',
          meaning: 'masculinity; femininity',
          value: '#BD00D7'
        },
        {
          id: 'black',
          meaning: 'all genders',
          value: '#000000'
        },
        {
          id: 'blue',
          meaning: 'masculinity',
          value: '#2F2FBE'
        }
      ]
    },
    matches: {
      colors: ['pink', 'white', 'purple', 'black', 'blue'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-14',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'genderqueer',
    name: 'genderqueer pride',
    description:
      'Genderqueer is an umbrella term for non-binary people, who don´t really fit the provided categories, especially the binary.',
    origin: {
      firstAppearance: 'Marilyn Roxie',
      timeframe: '2011'
    },
    category: 'gender',
    image: 'genderqueer.png',
    props: {
      colors: [
        {
          id: 'lavender',
          meaning: 'androgynous',
          value: '#B578DD'
        },
        {
          id: 'white',
          meaning: 'agender',
          value: '#000000'
        },
        {
          id: 'green',
          meaning: 'non-binary',
          value: '#4B851E'
        }
      ]
    },
    matches: {
      colors: ['purple', 'white', 'green'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-15',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'nonbinary',
    name: 'nonbinary pride',
    description:
      'Often used as an umbrella term, nonbinary (also called enby, NB) don´t fit into male* and female* categories.',
    origin: {
      firstAppearance: 'Kye Rowan',
      timeframe: '2014'
    },
    category: 'gender',
    image: 'nonbinary.png',
    props: {
      colors: [
        {
          id: 'yellow',
          meaning: 'gender seperate from the binary',
          value: '#FFF82F'
        },
        {
          id: 'white',
          meaning: 'for those with multiple genders',
          value: '#000000'
        },
        {
          id: 'purple',
          meaning: 'Mix of male* and female*',
          value: '#9C4DD2'
        },
        {
          id: 'black',
          meaning: 'people without a gender',
          value: '#000000'
        }
      ]
    },

    matches: {
      colors: ['yellow', 'white', 'purple', 'black'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.10'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-15',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.10'
      }
    ]
  },
  {
    id: 'transgender',
    name: 'transgender pride',
    description:
      'transgender people are people who´s gender identity doesn´t match their sex assigned at birth.',
    origin: {
      firstAppearance: 'Monica Helms',
      timeframe: '1999'
    },
    category: 'sexuality',
    image: 'transgender.png',
    props: {
      colors: [
        {
          id: 'lightblue',
          meaning: 'traditionally value for boy',
          value: '#60CFFA'
        },
        {
          id: 'lightpink',
          meaning: 'traditionally value for girls',
          value: '#F4A8BA'
        },
        {
          id: 'white',
          meaning:
            'those who are transitioning; those with a neutral gender, no gender, and those who are intersex.',
          value: '#FFFFFF'
        }
      ]
    },
    matches: {
      colors: ['lightblue', 'lightpink', 'white'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.10'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-13',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.10'
      }
    ]
  } /* 
  {
    id: 'bigender',
    name: 'bigender pride',
    description: '',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'gender',
    image: 'bigender.png',
    props: {
      colors: [
        {
          id: 'magenta',
          meaning: 'no gender',
          value: '#F0A3FE'
        },
        {
          id: 'white',
          meaning: 'trans idenity',
          value: '#FFFFFF'
        },
        {
          id: 'lightblue',
          meaning: 'masculinity',
          value: '#A3CFEF'
        },
        {
          id: 'lightpink',
          meaning: 'femininity',
          value: '#F3B7DF'
        }
      ]
    },
    matches: {
      colors: ['purple', 'white', 'blue', 'lightpink'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      }
    ]
  } */,
  {
    id: 'intersex',
    name: 'intersex pride',
    description:
      'intersex people are often seen as the third sex. Their body features don´t fit typical "male*" or "female*" definitions',
    origin: {
      firstAppearance: 'the organization Intersex International Australia',
      timeframe: '2013'
    },
    category: 'gender',
    image: 'intersex.png',
    props: {
      colors: [
        {
          id: 'yellow',
          meaning:
            'neutrality in gender; stays away from typically gendered colors like blue and pink.',
          value: '#FEDB09'
        },
        {
          id: 'purple',
          meaning: '',
          value: '#7800AB'
        }
      ],
      symbols: [
        {
          id: 'circle',
          meaning:
            'unbroken; symobolising wholeness and completeness as well as their	potentialities',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['yellow', 'purple'],
      symbols: ['circle']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.10'
      },
      {
        link:
          'https://www.pride.com/pride/2018/6/13/complete-guide-queer-pride-flags-0#media-gallery-media-12',
        name: 'Pride.com - queer pride flags',
        researchDate: '2019.10.10'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.10'
      }
    ]
  },
  {
    id: 'aromantic',
    name: 'aromantic pride',
    description:
      'An aromantic person is someone, who has little to no interest in a romantic relationship. They often can´t develop romantic feelings and usually don´t "fall in love", however they often experience stronger platonic feelings. Aromantic can also be used as an umbrella term for the aro spectrum',
    origin: {
      firstAppearance: 'Cameron Whimsey',
      timeframe: '2014'
    },
    category: 'attraction',
    image: 'aromantic.png',
    props: {
      colors: [
        {
          id: 'darkgreen',
          meaning: 'aromanticism',
          value: '#338733'
        },
        {
          id: 'lightgreen',
          meaning: 'aromantic spectrum',
          value: '#AAD77A'
        },
        {
          id: 'white',
          meaning:
            'platonic and aesthetic attraction; queerplatonic relationships',
          value: '#FFFFFF'
        },
        {
          id: 'gray',
          meaning: 'gray-aromantic and demiromantic people',
          value: '#AAAAAA'
        },
        {
          id: 'black',
          meaning: 'sexuality spectrum',
          value: '#000000'
        }
      ]
    },
    matches: {
      colors: ['green', 'lightgreen', 'white', 'gray', 'black'],
      symbols: []
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://cameronwhimsy.tumblr.com/post/75868343112/ive-been-reading-up-on-a-lot-of-the-discussion',
        name: 'cameronwhimsy tumblr - new aromantic flag',
        researchDate: '2019.10.09'
      }
    ]
  },
  {
    id: 'polyamory',
    name: 'polyamory pride',
    description:
      'polyamory describes the love/relationships to multiple partner at the same time. All involved parties are consenting to this sort of relationship.',
    origin: {
      firstAppearance: '',
      timeframe: ''
    },
    category: 'sexuality',
    image: 'polyamory.png',
    props: {
      colors: [
        {
          id: 'gold',
          meaning: 'value of emotional attachment to others',
          value: '#FFFF0B'
        },
        {
          id: 'blue',
          meaning: 'openness and honesty among all partners',
          value: '#0000FF'
        },
        {
          id: 'red',
          meaning: 'love and passion',
          value: '#FC0006'
        },
        {
          id: 'black',
          meaning:
            'solidarity with those who have to hide their polyamorous identity',
          value: '#000000'
        }
      ],
      symbols: [
        {
          id: 'pi',
          meaning:
            'greek letter for "pi" (first letter of the word "polyamory") ',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['blue', 'red', 'black', 'yellow'],
      symbols: ['pi']
    },
    sources: [
      {
        link: 'https://commons.wikimedia.org/wiki/Sexual_identity_symbols',
        name: 'Wiki Commons - sexual identity symbols',
        researchDate: '2019.10.09'
      },
      {
        link:
          'https://adorablepolycouples.tumblr.com/post/9224234337/polyamory-pride-flag-the-meaning-of-the',
        name: 'adorablepolycouples tumblr - polyamory flag',
        researchDate: '2019.10.10'
      },
      {
        link:
          'https://www.pinknews.co.uk/2018/06/26/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
        name: 'Pinknews.co.uk - pride flags',
        researchDate: '2019.10.10'
      }
    ]
  }
];

export default flags;

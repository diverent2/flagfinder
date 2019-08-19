const flags = [
  {
    id: 'gay',
    name: 'gay pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1024px-Gay_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'red',
          meaning: 'life',
          color: '#FC0006'
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
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      symbols: []
    }
  },
  {
    id: 'gay_bear',
    name: 'gay bear brotherhood flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bear_Brotherhood_flag.svg/1024px-Bear_Brotherhood_flag.svg.png',
    props: {
      colors: [
        {
          id: 'brown',
          meaning: '',
          color: '#603401'
        },
        {
          id: 'orange',
          meaning: '',
          color: '#D46004'
        },
        {
          id: 'yellow',
          meaning: '',
          color: '#D46004'
        },
        {
          id: 'lightyellow',
          meaning: '',
          color: '#FEE8BA'
        },
        {
          id: 'white',
          meaning: '',
          color: '#fff'
        },
        {
          id: 'gry',
          meaning: '',
          color: '#603401'
        },
        {
          id: 'black',
          meaning: '',
          color: '#000'
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
      colors: ['brown', 'range', 'yellow', 'white', 'darkgray', 'black'],
      symbols: ['paw']
    }
  },
  {
    id: 'gay_twink',
    name: 'twink pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bear_Brotherhood_flag.svg/1024px-Bear_Brotherhood_flag.svg.png',
    props: {
      colors: [
        {
          id: 'lightpink',
          meaning: '',
          color: '#FDACFF'
        },
        {
          id: 'white',
          meaning: '',
          color: '#fff'
        },
        {
          id: 'lightyellow',
          meaning: '',
          color: '#FFFF82'
        }
      ],
      colors: [
        {
          id: 'double_mars',
          meaning: '',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['lightpink', 'white', 'yellow'],
      symbols: ['mars']
    }
  },
  {
    id: 'asexual',
    name: 'asexual pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asexual_Pride_Flag.svg/1024px-Asexual_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: 'asexuality',
          color: '#000'
        },
        {
          id: 'gry',
          meaning: 'gray-asexuality, demi-sexuality',
          color: '#603401'
        },
        {
          id: 'white',
          meaning: 'sexuality',
          color: '#FFF'
        },
        {
          id: 'purple',
          meaning: 'community',
          color: '#7F0081'
        }
      ]
    },
    matches: {
      colors: ['black', 'gry', 'white', 'purple'],
      symbols: []
    }
  },

  {
    id: 'bisexual',
    name: 'bisexual pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bisexual_Pride_Flag.svg/1600px-Bisexual_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'pink',
          meaning: 'same gender attraction',
          color: '#9B4797'
        },
        {
          id: 'magenta',
          meaning: 'possibility anywhere the gender spectrum',
          color: '#9B4797'
        },
        {
          id: 'blue',
          meaning: 'different gender attraction',
          color: '#002BA9'
        }
      ]
    },
    matches: {
      colors: ['pink', 'magenta', 'blue'],
      symbols: []
    }
  },

  {
    id: 'demisexual',
    name: 'demisexual pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Demisexual_Pride_Flag.svg/1024px-Demisexual_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: 'asexuality',
          color: '#000'
        },
        {
          id: 'white',
          meaning: 'sexuality',
          color: '#FFF'
        },
        {
          id: 'purple',
          meaning: 'community',
          color: '#7F0081'
        },
        {
          id: 'lightgry',
          meaning: 'gray-ace and demisexuality',
          color: '#D3D3D3'
        }
      ]
    },
    matches: {
      colors: ['black', 'white', 'purple', 'lightgry'],
      symbols: ['triangle']
    }
  },

  {
    id: 'heterosexual',
    name: 'heterosexual pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/06/Bandera_heterosexual.PNG',
    props: {
      colors: [
        {
          id: 'lightblue',
          meaning: 'male sex',
          color: '#ED5B9E'
        },
        {
          id: 'white',
          meaning: 'sexuality',
          color: '#FFF'
        },
        {
          id: 'pink',
          meaning: 'female sex',
          color: '#ED5B9E'
        }
      ]
    },
    matches: {
      colors: ['lightblue', 'white', 'pink'],
      symbols: []
    }
  },

  {
    id: 'lesbian',
    name: 'lesbian pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lesbian_Pride_Flag.svg/1554px-Lesbian_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'red',
          meaning: 'life',
          color: '#FC0006'
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
          meaning: '',
          icon: ''
        }
      ]
    },
    matches: {
      colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      symbols: ['venus']
    }
  },

  {
    id: 'lesbian_labry',
    name: 'lesbian pride labrys flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Lesbian_pride_labrys_flag.svg/1024px-Lesbian_pride_labrys_flag.svg.png',
    props: {
      colors: [
        {
          id: 'white',
          meaning: '',
          color: '#FFF'
        },
        {
          id: 'black',
          meaning: '',
          color: '#000'
        },
        {
          id: 'purple',
          meaning: '',
          color: '#7E0080'
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
    }
  },
  {
    id: 'lesbian_lipstick',
    name: 'lipstick lesbian pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lipstick_lesbian_Pride_Flag.svg/1024px-Lipstick_lesbian_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'magentarosa',
          meaning: '',
          color: '#A60061'
        },
        {
          id: 'magenta',
          meaning: '',
          color: '#B94A94'
        },
        {
          id: 'darkpink',
          meaning: '',
          color: '#D157A8'
        },
        {
          id: 'white',
          meaning: '',
          color: '#FFF'
        },
        {
          id: 'lightpink',
          meaning: '',
          color: '#E4AAD1'
        },
        {
          id: 'white',
          meaning: '',
          color: '#FFF'
        },
        {
          id: 'rosared',
          meaning: '',
          color: '#C64651'
        },
        {
          id: 'darkred',
          meaning: '',
          color: '#8C0B02'
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
      colors: [
        'pink',
        'magenta',
        'darkpink',
        'pink',
        'white',
        'lightpink',
        'lightred',
        'darkred'
      ],
      symbols: ['lips']
    }
  },
  {
    id: 'pansexual',
    name: 'pansexual pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pansexuality_Pride_Flag.svg/1024px-Pansexuality_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'pink',
          meaning: 'female gendered persons (regardless of biological sex)',
          color: '#FC008D'
        },
        {
          id: 'gold',
          meaning: 'mixed gendered, genderless, thirdgendered people',
          color: '#FEDB09'
        },
        {
          id: 'lightblue',
          meaning: 'male gendered persons (regardless of biological sex)',
          color: '#27B1FF'
        }
      ]
    },
    matches: {
      colors: ['pink', 'yellow', 'lightblue'],
      symbols: []
    }
  },

  {
    id: 'polysexuality',
    name: 'polysexuality pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Polysexuality_Pride_Flag.svg/1024px-Polysexuality_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'magentopink',
          meaning: 'attaction to woman',
          color: '#F300BA'
        },
        {
          id: 'lightgreen',
          meaning: 'attaction to people of other genders',
          color: '#25DA69'
        },
        {
          id: 'mediumblue',
          meaning: 'attaction to man',
          color: '#1E90F6'
        }
      ]
    },
    matches: {
      colors: ['magentopink', 'lightgreen', 'blue'],
      symbols: []
    }
  },

  {
    id: 'straight_ally',
    name: 'stright ally flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Straight_Ally_flag.svg/1024px-Straight_Ally_flag.svg.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: '',
          color: '#000'
        },
        {
          id: 'white',
          meaning: '',
          color: '#FFF'
        },
        {
          id: 'red',
          meaning: 'life',
          color: '#FC0006'
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
      symbols: ['V']
    }
  },

  {
    id: 'agender',
    name: 'agender pride flag',
    category: 'gender',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Agender_pride_flag.svg/1024px-Agender_pride_flag.svg.png',
    props: {
      colors: [
        {
          id: 'black',
          meaning: '',
          color: '#000'
        },
        {
          id: 'lightgry',
          meaning: '',
          color: '#B6B6B6'
        },
        {
          id: 'white',
          meaning: '',
          color: '#000'
        },
        {
          id: 'lightgreen',
          meaning: '',
          color: '#BBF884'
        }
      ]
    },
    matches: {
      colors: ['black', 'gry', 'white', 'lightgreen'],
      symbols: []
    }
  },

  {
    id: 'genderfluid',
    name: 'genderfluid pride flag',
    category: 'gender',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Genderfluidity_Pride-Flag.svg/1024px-Genderfluidity_Pride-Flag.svg.png',
    props: {
      colors: [
        {
          id: 'pink',
          meaning: 'femininity',
          color: '#FD6EA4'
        },
        {
          id: 'white',
          meaning: 'all genders',
          color: '#FFF'
        },
        {
          id: 'purple',
          meaning: 'masculinity; femininity',
          color: '#BD00D7'
        },
        {
          id: 'black',
          meaning: 'a lack of gender',
          color: '#000'
        },
        {
          id: 'blue',
          meaning: 'masculinity',
          color: '#2F2FBE'
        }
      ]
    },
    matches: {
      colors: ['pink', 'white', 'purple', 'black', 'darkblue'],
      symbols: []
    }
  },

  {
    id: 'genderqueer',
    name: 'genderqueer pride flag',
    category: 'gender',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Genderqueer_Pride_Flag.svg/1024px-Genderqueer_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'lavenda',
          meaning: 'androgynous',
          color: '#B578DD'
        },
        {
          id: 'white',
          meaning: 'agender',
          color: '#000'
        },
        {
          id: 'green',
          meaning: 'non-binary',
          color: '#4B851E'
        }
      ]
    },
    matches: {
      colors: ['violet', 'white', 'green'],
      symbols: []
    }
  },

  {
    id: 'nonbinary',
    name: 'nonbinary pride flag',
    category: 'gender',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nonbinary_flag.svg/1024px-Nonbinary_flag.svg.png',
    props: {
      colors: [
        {
          id: 'yellow',
          meaning: 'gender seperate from the binary',
          color: '#FFF82F'
        },
        {
          id: 'white',
          meaning: 'for those with multiple genders',
          color: '#000'
        },
        {
          id: 'purple',
          meaning: 'Mix of male and female',
          color: '#9C4DD2'
        },
        {
          id: 'black',
          meaning: 'people without a gender',
          color: '#000'
        }
      ]
    },

    matches: {
      colors: ['yellow', 'white', 'purple', 'black'],
      symbols: []
    }
  },

  {
    id: 'transgender',
    name: 'transgender pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1024px-Transgender_Pride_flag.svg.png',
    props: {
      colors: [
        {
          id: 'lightblue',
          meaning: 'traditionally color for boy',
          color: '#60CFFA'
        },
        {
          id: 'lightpink',
          meaning: 'traditionally color for girls',
          color: '#F4A8BA'
        },
        {
          id: 'white',
          meaning:
            'those who are transitioning; those with a neutral gender, no gender, and those who are intersex.',
          color: '#FFF'
        }
      ]
    },
    matches: {
      colors: ['lightblue', 'lightpink', 'white'],
      symbols: []
    }
  },

  {
    id: 'bigender',
    name: 'bigender pride flag',
    category: 'gender',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bigender_Pride_Flag.svg/1024px-Bigender_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'magenta',
          meaning: 'no gender',
          color: '#F0A3FE'
        },
        {
          id: 'white',
          meaning: 'trans idenity',
          color: '#FFF'
        },
        {
          id: 'lightblue',
          meaning: 'masculinity',
          color: '#A3CFEF'
        },
        {
          id: 'lightpink',
          meaning: 'femininity',
          color: '#F3B7DF'
        }
      ]
    },
    matches: {
      colors: ['magenta', 'white', 'blue', 'lightpink'],
      symbols: []
    }
  },
  {
    id: 'intersex',
    name: 'intersex pride flag',
    category: 'gender',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Intersex_Pride_Flag.svg/1024px-Intersex_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'yellow',
          meaning: 'intersex color',
          color: '#FEDB09'
        },
        {
          id: 'purple',
          meaning: 'intersex color',
          color: '#7800AB'
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
    }
  },
  {
    id: 'aromantic',
    name: 'aromantic pride flag',
    category: 'attraction',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Aromantic_Pride_Flag.svg/1024px-Aromantic_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'darkgreen',
          meaning: 'aromantisism',
          color: '#338733'
        },
        {
          id: 'lightgreen',
          meaning: 'aromantic spectrum',
          color: '#AAD77A'
        },
        {
          id: 'white',
          meaning:
            'platonic and asthetic attraction; queerplatonic relationships',
          color: '#FFF'
        },
        {
          id: 'gry',
          meaning: 'gray-aromantic and demiromantic people',
          color: '#AAAAAA'
        },
        {
          id: 'black',
          meaning: 'sexuality spectrum',
          color: '#000'
        }
      ]
    },
    matches: {
      colors: ['darkgreen', 'lightgreen', 'white', 'gry', 'black'],
      symbols: []
    }
  },
  {
    id: 'polyamory',
    name: 'polyamory pride flag',
    category: 'sexual',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Polyamory_Pride_Flag.svg/1024px-Polyamory_Pride_Flag.svg.png',
    props: {
      colors: [
        {
          id: 'gold',
          meaning: 'value of emotional attachment to others',
          color: '#FFFF0B'
        },
        {
          id: 'blue',
          meaning: 'openness and honesty among all partners',
          color: '#0000FF'
        },
        {
          id: 'red',
          meaning: 'love and passion',
          color: '#FC0006'
        },
        {
          id: 'black',
          meaning:
            'solidarity w/ those who have to hide their polyamorous identity',
          color: '#000'
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
    }
  }
];

export default flags;

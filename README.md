![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/diverent2/flagfinder?color=blue&label=Version&sort=semver)

![Testing](https://github.com/diverent2/flagfinder/workflows/Testing/badge.svg?branch=master)
![go to Cypress Dashboard](https://img.shields.io/static/v1?label=&message=Cypress%20Dashboard&color=2e3138&logo=cypress&link=https://dashboard.cypress.io/projects/ywge99)

# Prideflags.info 🔎🏳️‍🌈

This is the official repository for the **upcoming** website prideflags.info.  
A website for finding different LGBTQ+ prideflags and explanations about queer identities.

[Visit Prideflags.info](https://prideflags.info)

## ✨ Feature List

- Find full details including color descriptions and origins of the flags
- Filter by color, name or category

## 🏗️ Setup

This web-app (PWA) is based on [Svelte - Sapper](https://github.com/sveltejs/sapper)

> Disclaimer: This project uses the package manager [🧶 Yarn](https://yarnpkg.com/lang/en/).
> If you are coming from npm you can find some staring help [with this cheat-sheet 👀](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)

To set up a local copy follow these steps:

1. Clone the repository

```sh
git clone https://github.com/diverent2/flagfinder.git
cd flagfinder
```

2. Install dependencies

```sh
yarn install
```

## 👩‍💻 Development

```sh
yarn dev
```

This will open up a local copy which can be reached at [localhost:3000](http://localhost:3000)

## ⚙️ Testing

This project uses [Cypress](https://www.cypress.io/) for testing.

Cypress can be run

### using the client (for dev)

```sh
yarn cy
```

### using the CLI (using the build)

```sh
yarn test
```

## 🚚 Production

### Runtime

To build the runtime version of this project use

```sh
yarn build && yarn start
```

This will open a port with the compiled app running

## Credits

made with 🌈🦄, ☕ and 💕 by [@diverent2](https://github.com/diverent2)

### special thanks to

[DanielRuf](https://github.com/DanielRuf)

- Github CI

[JohpoJohannes](https://github.com/JohpoJohannes)

- Content updates
- Color names #21
- Testing

[chomchom02](https://github.com/chomchom02)

- Feedback
- Testing
- Issue Templates #33

---

Be kind 🤗

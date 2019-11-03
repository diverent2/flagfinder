# Prideflags.info 🔎🏳️‍🌈

This is the official repository for the **upcomming** website prideflags.info.  
A website for finding different LGBTQ+ prideflags and explanations about queer identities.

## ✨ Feature List

- Find full details including color descriptions and origins of the flags
- Filter by color, name or category

## 🏗️ Setup

This web-app (PWA) is based on [Svelte - Sapper](https://github.com/sveltejs/sapper)

> Disclaimer: This project uses the package manager [🧶 Yarn](https://yarnpkg.com/lang/en/).
> If you are coming from npm you can find some staring help [with this cheat-sheet 👀](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)

To setting up a local copy follow these steps:

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

### using the CLI (for CI)

```sh
yarn test
```

## 🚚 Production

> Every Production command can also be used with `--legacy` to provide support for legacy browsers // not in use at the moment  
> see [package.json](./package.json) for details

There are two different ways this app can get used  
@TODO:settle for one

### Runtime

To build the runtime version of this project use

```sh
yarn build && yarn start
```

This will open a port with the compiled app running

#### Static Export

It is also possible to export the project which works simular to a static site generator

```sh
yarn export
```

Be kind 🤗
made with ❤️🧡💛💚💙💜 by [diverent2](https://twitter.com/diverent2)

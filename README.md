# Nuxt 3 + GITS UI

Look at the [GITS UI documentation](https://gits-ui.web.app) and [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Features

- [Nuxt 3](https://v3.nuxtjs.org/)
- [GITS UI](https://gits-ui.web.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)

## Directory Structure

Look at the [nuxt directory stucture documentation](https://v3.nuxtjs.org/guide/directory-structure/nuxt). With additional folders:

- `api`: Used to store all the api mapping with its path and payload.

## Create New Project

You can easily create new project from this template using `nuxi`:

```
npx nuxi init -t gitsindonesia/nuxt-starter my-app
cd my-app
yarn
yarn dev
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

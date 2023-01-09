# Nuxt and GITS UI Starter Kit

Quickly get started on your Vue.js project with this Nuxt.js and GITS UI starter kit. It includes pre-configured setup and a variety of GITS UI components. Perfect for Vue.js developers looking to create a professional web app.

## Batteries Included

- [Nuxt 3](https://nuxt.com/)
- [GITS UI](https://gitsindonesia.github.io/ui-component/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [@vueuse/nuxt](https://vueuse.org/)
- [@nuxtjs/google-fonts](https://github.com/nuxt-community/google-fonts-module)
- [@nuxtjs/fontaine](https://github.com/nuxt-modules/fontaine)
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/)
- [@nuxt/image-edge](https://v1.image.nuxtjs.org/)
- [Storybook](https://storybook.js.org/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Hygen](https://www.hygen.io/)

## Directory Structure

Look at the [nuxt directory stucture documentation](https://nuxt.com/guide/directory-structure/nuxt). With additional folders:

- `api`: Used to store all the api mapping with its path and payload.

## Create New Project

You can easily create new project from this template using `nuxi`:

```
npx nuxi init -t gh:gitsindonesia/nuxt-starter my-app
cd my-app
yarn
yarn dev
```

## Checklist

Some tasks you should probably do in the beginning are:

- [ ] replace this generic README with a more specific one
- [ ] reset this `package.json` version to `0.0.0`
- [ ] install the [Vue Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ ] enable [Volar takeover mode](https://nuxt.com/docs/getting-started/installation#prerequisites) to ensure a smooth editor setup
- [ ] copy `.env.example` to `.env` and update the value with your own
- [ ] remove or update `.github` workflows

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

Checkout the [deployment documentation](https://nuxt.com/guide/deploy/presets) for more information.

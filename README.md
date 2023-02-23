# Nuxt and GITS UI Starter Kit

Quickly get started on a new project with this Nuxt.js and GITS UI starter kit. It includes a pre-configured setup and a variety of GITS UI components. Perfect for Vue.js developers looking to create a professional web app.

## Installation

```bash
# with npm
npm i @gits-id/nuxt-starter

# with yarn
yarn add @gits-id/nuxt-starter

# with pnpm
pnpm add @gits-id/nuxt-starter
```

## Usage

```ts
export default defineNuxtConfig({
  extends: [
    '@gits-id/nuxt-starter'
  ]
})
```

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

Look at the [Nuxt directory structure documentation](https://nuxt.com/docs/guide/directory-structure/nuxt). With additional folders:
API used to store all the API mapping with its path and payload.

## Create New Project

### With `create-gits-app`

The best way to create a new project with this template is using `create-gits-app`:

```bash
npx create-gits-app@latest
```

Then, choose `Nuxt Starter` template.

### With `nuxi`

You can also easily create a new project from this template using `nuxi`:

```bash
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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.

## Release Guide

First, bump the version and generate a changelog with `standard-version`:

```bash
yarn release # default
```

You can also bump to a specific version using the semantic version.

```bash
# Major release. E.g. from 1.0.0. to 2.0.0
yarn release --release-as=major

# Minor release. E.g. from 1.1.0. to 1.2.0
yarn release --release-as=minor

# Patch release. E.g. from 1.0.0. to 1.0.1
yarn release --release-as=patch

# Pre-release release. E.g. from 1.0.0 to 2.0.0-alpha.1
yarn release --release-as=prelease
```

Then, push the tags:

```bash
git push --follow-tags
```

# Contributing

To contribute, you may follow these steps:

- Clone this repository.
- Create a branch: `git checkout -b <branch_name>`.
- Make your changes and commit them: `git commit -m '<commit_message>'`
- Push to the original branch: `git push origin <branch_name>`
- Create the pull request.


# Nuxt and Morpheme UI Starter

[![Quality Gate Status](https://sonar.gits.id/api/project_badges/measure?project=nuxt-starter&metric=alert_status&token=sqb_1e0de59e286dc2678fdc8e0f67ad6c2f99e20aac)](https://sonar.gits.id/dashboard?id=nuxt-starter)
[![Coverage](https://sonar.gits.id/api/project_badges/measure?project=nuxt-starter&metric=coverage&token=sqb_1e0de59e286dc2678fdc8e0f67ad6c2f99e20aac)](https://sonar.gits.id/dashboard?id=nuxt-starter)

Quickly get started on a new project with Nuxt and Morpheme UI.

## What's Included?

- ✅ UI Library with [Morpheme UI](https://gitsindonesia.github.io/ui-component/)
- ✅ CSS Utilities by [Tailwind CSS](https://tailwindcss.com/)
- ✅ State Management with [Pinia](https://pinia.vuejs.org/)
- ✅ Vue Composables with [VueUse](https://vueuse.org/)
- ✅ Component Workshop with [Storybook](https://storybook.js.org/)
- ✅ Google Font with [@nuxtjs/google-fonts](https://github.com/nuxt-community/google-fonts-module)
- ✅ Font metric overrides to reduce CLS [@nuxtjs/fontaine](https://github.com/nuxt-modules/fontaine)
- ✅ Internalization with [@nuxtjs/i18n](https://i18n.nuxtjs.org/)
- ✅ Image optimization with [@nuxt/image-edge](https://v1.image.nuxtjs.org/)
- ✅ Coding style with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [lint-staged](https://github.com/okonet/lint-staged)
- ✅ Component generator with [Hygen](https://www.hygen.io/)

## Directory Structure

Look at the [Nuxt directory structure documentation](https://nuxt.com/docs/guide/directory-structure/nuxt).

## Create New Project

### With Morpheme CLI

The best way to create a new project with this template is using `create-morpheme-app`:

```bash
npx create-morpheme-app@latest
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


### Usage as Nuxt Layer

First, install the package:

```bash
# with npm
npm i @morpheme/nuxt-starter

# with yarn
yarn add @morpheme/nuxt-starter

# with pnpm
pnpm add @morpheme/nuxt-starter
```

Then, add `@morpheme/nuxt-starter` to the `extends` block.

```ts
export default defineNuxtConfig({
  extends: [
    '@morpheme/nuxt-starter'
  ]
})
```

## Checklist

Some tasks you should probably do in the beginning are:

- [ ] replace this generic README with a more specific one
- [ ] reset this `package.json` version to `0.0.0`
- [ ] install the [Vue Volar extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ ] enable [Volar takeover mode](https://nuxt.com/docs/getting-started/installation#prerequisites) to ensure a smooth editor setup
- [ ] copy `.env.example` to `.env` and update the value with your own
- [ ] remove or update `.github` workflows
- [ ] remove default landing page app
  - [ ] remove `_landing` folder
  - [ ] remove `./_landing` from `extends` block in `nuxt.config.ts`

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
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
yarn release
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

## Contributing

To contribute, you may follow these steps:

- Clone this repository.
- Create a branch: `git checkout -b <branch_name>`.
- Make your changes and commit them: `git commit -m '<commit_message>'`
- Push to the original branch: `git push origin <branch_name>`
- Create the pull request.

## License

MIT
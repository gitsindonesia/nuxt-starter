<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

const appDomain = runtimeConfig.public.appUrl
const appUrl = appDomain
const appName = appConfig.name
const appDescription = appConfig.description
const appImage = `${appDomain}/logo.svg`

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    // description
    {
      name: 'description',
      key: 'description',
      content: appConfig.description,
    },
    // facebook meta tags
    {
      hid: 'og:url',
      name: 'og:url',
      content: appUrl,
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: appName,
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: appDescription,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: appImage,
    },
    // twitter meta tags
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:domain',
      name: 'twitter:domain',
      content: appDomain,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: appDomain,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: appName,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: appDescription,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: appImage,
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = appConfig.name
const appDescription = appConfig.description
const appImage = `${appDomain}/logo.svg`

useSeoMeta({
  title: appName,
  ogTitle: appName,
  description: appDescription,
  ogDescription: appDescription,
  ogImage: appImage,
  twitterCard: 'summary_large_image',
})

useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-slate-950',
  },
})
</script>

<template>
  <Html lang="en" />
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

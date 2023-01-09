<script setup lang="ts">
const { locale, locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value as any
})
</script>

<template>
  <div class="container mx-auto py-6">
    <h1 class="font-semibold text-2xl mb-5">
      nuxt-i18n demo
    </h1>
    <VCard hide-footer hide-header>
      {{ $t('welcome') }}
    </VCard>

    <p class="font-medium text-gray-800 text-sm mt-5 mb-2">
      Try different language:
    </p>
    <div class="space-x-2">
      <VBtn
        v-for="lang in availableLocales"
        :key="lang.code"
        text
        flush
        :color="locale === lang.code ? 'primary' : ''"
        :to="switchLocalePath(lang.code)"
      >
        {{ lang.name }}
      </VBtn>
    </div>
  </div>
</template>

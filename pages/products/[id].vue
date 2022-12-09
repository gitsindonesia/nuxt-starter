<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

const id = useRoute().params.id.toString()
const { data: product, error, pending } = await useLazyAsyncData(() => getProduct(id))
</script>

<template>
  <div class="container mx-auto min-h-screen py-5 sm:py-10 px-6 sm:px-0">
    <div v-if="pending">
      Loading...
    </div>

    <VAlert v-else-if="error" color="error">
      {{ error }}
    </VAlert>

    <div v-else-if="product">
      <h1 class="text-2xl font-semibold mb-5">
        {{ product.title }}
      </h1>
      <p class="mb-5">
        {{ product.description }}
      </p>

      <VBadge color="secondary" rounded="full">
        {{ product.category }}
      </VBadge>

      <img
        :src="product.images[0]"
        :alt="product.title"
        width="100%"
        height="100"
        class="w-full aspect-1 rounded-lg  object-cover bg-gray-100 mt-5"
      >
    </div>
  </div>
</template>

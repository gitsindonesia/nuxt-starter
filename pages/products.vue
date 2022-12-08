<script setup lang="ts">
definePageMeta({
  layout: 'header-only',
})

const { data, error, pending } = await useLazyAsyncData(() => getProducts())
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-semibold mb-5">
      Products ({{ data?.total }})
    </h1>

    <div v-if="pending">
      Loading...
    </div>

    <VAlert v-else-if="error" color="error">
      {{ error }}
    </VAlert>

    <div v-else-if="data?.products" class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-6">
      <div
        v-for="product in data.products"
        :key="product.id"
        class="shadow-sm rounded-lg overflow-hidden bg-white pb-4 transition duration-300 hover:shadow-lg"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          width="100%"
          height="100"
          class="w-full aspect-1 rounded-lg  object-cover bg-gray-100"
        >
        <h3 class="font-medium text-lg mt-4 px-4">
          {{ product.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

const { data, error, pending } = await useLazyAsyncData(() => getProducts())
</script>

<template>
  <div class="container mx-auto py-5 sm:py-10 px-6 sm:px-0">
    <h1 class="text-2xl font-semibold mb-6">
      Products ({{ data?.total }})
    </h1>

    <div v-if="pending">
      <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-8">
        <VShimmer :lines="12" :height="200" width="100%" class="rounded-lg" />
      </div>
    </div>

    <VAlert v-else-if="error" color="error">
      {{ error }}
    </VAlert>

    <div v-else-if="data?.products" class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-8">
      <NuxtLink
        v-for="product in data.products"
        :key="product.id"
        class="shadow rounded-lg overflow-hidden bg-white pb-4 transition duration-300 hover:shadow-lg"
        :to="`/products/${product.id}`"
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
      </NuxtLink>
    </div>
  </div>
</template>

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
        class="shadow-md shadow-gray-300/20 group relative rounded-lg overflow-hidden bg-white pb-4 transition duration-300 hover:shadow-lg hover:scale-105"
        :to="`/products/${product.id}`"
      >
        <div class="relative">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            width="100%"
            height="100"
            class="w-full aspect-1 rounded-t-lg  object-cover bg-gray-100"
          >
          <VBtn
            fab
            text
            prefix-icon="ri:heart-line"
            class="absolute top-2 right-2 hidden group-hover:inline"
          />
          <VBtn
            color="secondary"
            fab
            icon
            prefix-icon="ri:shopping-basket-line"
            class="absolute bottom-2 right-2 hidden group-hover:inline"
          />
        </div>
        <div class="px-4 space-y-2 mt-4">
          <h3 class="font-medium">
            {{ product.title }}
          </h3>
          <div> {{ toCurrency(product.price) }} </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

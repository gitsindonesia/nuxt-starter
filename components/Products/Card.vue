<script setup lang="ts">
import type { Product } from '~~/api/products'

defineProps<{
  product: Product
}>()
</script>

<template>
  <NuxtLink
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
        size="lg"
        fab
        text
        prefix-icon="ri:heart-line"
        class="absolute top-2 right-2 hidden group-hover:inline"
      />
      <VBtn
        color="secondary"
        size="sm"
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
</template>

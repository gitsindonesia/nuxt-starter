<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const url = 'https://dummyjson.com/products'

const { isLoading, isError, data, error, suspense } = useQuery({
  queryKey: ['products'],
  queryFn: () => {
    return fetch(url).then(res => res.json())
  },
})

onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <ProductHeader />

  <div class="container mx-auto py-6">
    <div v-if="isLoading" class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <VShimmer :lines="12" class="!rounded-lg" width="100%" height="300px" />
    </div>
    <VAlert v-else-if="isError" color="error">
      Error: {{ (error as any).message }}
    </VAlert>
    <div v-else-if="data" class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in data.products"
        :key="product.id"
        :title="product.title"
        :image="product.thumbnail"
        :description="product.description"
        :category="product.category"
      />
    </div>
  </div>
</template>

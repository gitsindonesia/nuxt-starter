<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const url = 'https://dummyjson.com/products'

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['products'],
  queryFn: () => {
    return fetch(url).then(res => res.json())
  },
})
</script>

<template>
  <div class="container mx-auto py-6">
    <header class="flex items-center gap-4 mb-6 justify-between">
      <h1 class="text-3xl font-semibold">
        Products
      </h1>
      <VButton
        to="/"
        text
        flush
        color="primary"
        prefix-icon="ph:arrow-left"
      >
        Back to Home
      </VButton>
    </header>

    <div v-if="isLoading" class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <VShimmer :lines="12" class="!rounded-lg" width="100%" height="300px" />
    </div>
    <VAlert v-else-if="isError" color="error">
      Error: {{ (error as any).message }}
    </VAlert>
    <div v-else-if="data" class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <VCard
        v-for="product in data.products"
        :key="product.id"
        :title="product.title"
        :image="product.thumbnail"
        image-class="h-48 w-full object-cover"
      >
        <p clas="text-sm !text-gray-500 line-clamp-2">
          {{ product.description }}
        </p>
        <div class="mt-4">
          <VBadge color="primary">
            {{ product.category }}
          </VBadge>
        </div>
      </VCard>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'Store',
})

const { data, error, pending } = await useLazyAsyncData(() => getProducts())
</script>

<template>
  <div class="container mx-auto py-5 sm:py-10 px-6 sm:px-0">
    <h1 class="text-2xl font-semibold mb-6">
      Products ({{ data?.total }})
    </h1>

    <div v-if="pending">
      <ProductsGrid>
        <VShimmer :lines="12" :height="200" width="100%" class="rounded-lg" />
      </ProductsGrid>
    </div>

    <VAlert v-else-if="error" color="error">
      {{ error }}
    </VAlert>

    <ProductsGrid v-else-if="data?.products">
      <ProductsCard
        v-for="product in data.products"
        :key="product.id"
        :product="product"
      />
    </ProductsGrid>
  </div>
</template>

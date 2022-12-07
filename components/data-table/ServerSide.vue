<script setup lang="ts">
import type { VDataTableHeader } from '@gits-id/ui'

const API_URL = 'https://dummyjson.com/products'

const page = ref(1)
const limit = ref(10)

const headers = ref<VDataTableHeader[]>([
  {
    text: '#',
    value: 'index',
  },
  {
    text: 'Name',
    value: 'title',
  },
  {
    text: 'Price',
    value: 'price',
    align: 'center',
  },
  {
    text: 'Stock',
    value: 'stock',
    align: 'center',
  },
  {
    text: 'Category',
    value: 'category',
  },
])

interface Product {
  id: number
  title: string
  price: number
  stock: number
  category: string
}

interface ProductsResponse {
  total: number
  products: Product[]
}

const { pending, data, refresh } = useLazyAsyncData('products', () => {
  const skip = (page.value - 1) * limit.value
  return $fetch<ProductsResponse>(API_URL, {
    params: {
      limit: limit.value,
      skip,
    },
  })
})

const onPageChange = (newPage: number) => {
  page.value = newPage
  refresh()
}

const onItemsPerPageChange = (newLimit: number) => {
  limit.value = newLimit
  refresh({
    dedupe: true,
  })
}
</script>

<template>
  <h3 class="font-medium mb-3 text-gray-700">
    Products Data
  </h3>
  <VDataTable
    v-model:items-per-page="limit"
    v-model:page="page"
    :loading="pending"
    :total-items="data?.total"
    :items="data?.products"
    :headers="headers"
    server-side
    @page:change="onPageChange"
    @items-per-page:change="onItemsPerPageChange"
  />
</template>

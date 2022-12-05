<script setup lang="ts">
const API_URL = 'https://dummyjson.com/products'

const page = ref(1)
const limit = ref(10)
const items = ref<Record<string, any>[]>([])

const headers = ref([
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

interface ProductsResponse {
  total: number
  products: Record<string, any>[]
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

watch(data, (newData) => {
  if (newData)
    items.value = newData.products
})

const onPageChange = (newPage: number) => {
  page.value = newPage
  refresh()
}

const refreshData = () => refresh()
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
    @items-per-page:change="refreshData"
  />
</template>

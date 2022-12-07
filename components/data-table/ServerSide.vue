<script setup lang="ts">
import type { VDataTableHeader } from '@gits-id/ui'

defineProps<{
  hideTitle?: boolean
}>()

function numberToStars(num: number) {
  num = Math.round(num * 2) / 2
  const fullStars = Math.floor(num)
  const halfStar = num % 1 === 0.5 ? '½' : ''
  const emptyStars = 5 - fullStars - halfStar.length
  return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars)
}

const API_URL = 'https://dummyjson.com/products'

const page = ref(1)
const limit = ref(10)

const headers = ref<VDataTableHeader[]>([
  // {
  //   text: '#',
  //   value: 'index',
  //   align: 'center',
  // },
  {
    text: 'Image',
    value: 'thumbnail',
    align: 'center',
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
  <h3 v-if="!hideTitle" class="font-medium mb-3 text-gray-700">
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
    v-bind="$attrs"
    @page:change="onPageChange"
    @items-per-page:change="onItemsPerPageChange"
  >
    <template #item.thumbnail="{ item }">
      <img
        :src="item.thumbnail"
        :alt="item.title"
        width="50"
        height="50"
        class="w-[50px] h-[50px] rounded-lg shadow-md object-cover bg-gray-100 mx-auto"
      >
    </template>
    <template #item.price="{ item }">
      {{
        item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      }}
    </template>
    <template #item.rating="{ item }">
      {{ numberToStars(item.rating) }}
    </template>
  </VDataTable>
</template>

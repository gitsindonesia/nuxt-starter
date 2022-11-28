<script setup lang="ts">
import type { VDataTableHeader } from '@gits-id/table'

definePageMeta({
  middleware: 'auth',
})

useHead({
  title: 'Home',
})

const stats = ref([
  {
    title: 'Total Penjualan Hari Ini',
    value: 'Rp 10,000,000',
    color: 'primary',
    icon: 'ri:price-tag-2-fill',
  },
  {
    title: 'Total Penjualan KEMARIN',
    value: 'Rp 5,000,000',
    color: 'error',
    icon: 'ri:price-tag-3-fill',
  },
])

const headers = ref<VDataTableHeader[]>([
  {
    text: 'ID',
    value: 'index',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Username',
    value: 'username',
  },
  {
    text: 'Email',
    value: 'email',
  },
])

const page = ref(1)
const itemsPerPage = ref(10)
const totalItems = ref(20)
const res = ref()

watchEffect(async () => {
  res.value = await $fetch<{
    results: Record<string, any>[]
    info: {
      page: number
      results: number
      seed: string
      version: string
    }
  }>(`https://jsonplaceholder.typicode.com/users?_page=${page.value}&_limit=${totalItems.value}`)
})
</script>

<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <VCard
        v-for="stat in stats"
        :key="stat.title"
        shadow="none"
        class="card-stats p-2 sm:px-3"
        :class="`card-stats-${stat.color}`"
        hide-header
        hide-footer
      >
        <div class="flex items-center gap-2 sm:gap-6">
          <div class="bg-white rounded-full w-[48px] h-[48px] grid place-items-center">
            <VIcon :name="stat.icon" class="w-[30px] h-30px" />
          </div>
          <div class="space-y-1">
            <div class="text-primary-black font-semibold text-xs">
              {{ stat.title }}
            </div>
            <div class="text-lg sm:text-2xl font-bold text-[var(--card-text-color)]">
              {{ stat.value }}
            </div>
          </div>
        </div>
      </VCard>
    </div>

    <AppCard>
      <h3 class="font-bold text-lg">
        Riwayat Penjualan <span class="text-gray-500">(Hari ini)</span>
      </h3>
      <div
        class="flex flex-col sm:flex-row items-start sm:justify-between
      sm:items-center mt-6 gap-2"
      >
        <div class="flex gap-2 flex-wrap w-full sm:w-6/12">
          <VBtn outlined :block="isMobile" color="primary">
            Selesai
          </VBtn>
          <VBtn outlined :block="isMobile" color="primary">
            Batal
          </VBtn>
        </div>
        <div class="w-full sm:w-auto">
          <VBtn prefix-icon="ri:add-circle-line" color="primary" :block="isMobile">
            Tambah Penjualan
          </VBtn>
        </div>
      </div>
    </AppCard>

    <AppTable
      v-model:page="page"
      v-model:items-per-page="itemsPerPage"
      class="mt-5"
      :items="res"
      :total-items="totalItems"
      :headers="headers"
      :table-props="{ noDataText: 'Belum ada penjualan hari ini' }"
    />
  </div>
</template>

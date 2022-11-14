<script setup lang="ts">
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

const isMobile = useMediaQuery('(max-width: 768px)')
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
      <div class="flex flex-col sm:flex-row justify-between items-center mt-6 gap-2">
        <div class="space-x-2">
          <VBtn outlined :block="isMobile" color="primary">
            Selesai
          </VBtn>
          <VBtn outlined :block="isMobile" color="primary">
            Batal
          </VBtn>
        </div>
        <div>
          <VBtn prefix-icon="ri:add-circle-line" color="primary">
            Tambah Penjualan
          </VBtn>
        </div>
      </div>
    </AppCard>

    <AppTable class="mt-5" />
  </div>
</template>

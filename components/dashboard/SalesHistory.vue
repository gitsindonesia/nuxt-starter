<template>
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
</template>

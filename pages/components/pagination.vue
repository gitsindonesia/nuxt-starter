<script setup lang="ts">
const page = ref(1)
const itemsPerPage = ref(10)
const totalItems = ref(100)
</script>

<template>
  <AppPageTitle title="Pagination" subtitle="Pagination Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Pagination
      </AppCardTitle>

      <VPagination
        v-model="page"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
      />

      <pre class="mt-5">Model value: {{ page }}</pre>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Simple
      </AppCardTitle>

      <VPagination
        v-model="page"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        simple
      />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Flat
      </AppCardTitle>

      <VPagination
        v-model="page"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        flat
      />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Sizes
      </AppCardTitle>

      <div class="mb-4">
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          size="sm"
        />
      </div>
      <div class="mb-4">
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
        />
      </div>
      <div class="mb-4">
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          size="lg"
        />
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Custom Style
      </AppCardTitle>

      <VPagination
        v-model="page"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        :style="{
          '--v-pagination-item-active-bg-color': 'purple',
          '--v-pagination-item-active-border-color': 'purple',
        }"
      />
    </AppCard>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import type { VDataTableHeader } from '@gits-id/table'

const search = ref('')

const states = ['active', 'inactive']

const items = [...Array(30)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
  state: states[Math.floor(Math.random() * states.length)],
}))

const headers = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'ID',
  },
  {
    value: 'name',
    text: 'Name',
  },
  {
    value: 'email',
    text: 'Email',
  },
])
</script>

<template>
  <AppPageTitle title="DataTable" subtitle="DataTable Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Default
      </AppCardTitle>

      <VDataTable :items="items" :headers="headers" />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Striped
      </AppCardTitle>

      <VDataTable :items="items" :headers="headers" striped />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Hover
      </AppCardTitle>

      <VDataTable :items="items" :headers="headers" hover />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Flat
      </AppCardTitle>

      <VDataTable :items="items" :headers="headers" flat />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Bordered
      </AppCardTitle>
      <VDataTable :items="items" :headers="headers" bordered />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Tile
      </AppCardTitle>
      <VDataTable :items="items" :headers="headers" tile />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Dense
      </AppCardTitle>
      <VDataTable :items="items" :headers="headers" dense />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Loading
      </AppCardTitle>
      <VDataTable :items="items" :headers="headers" loading />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Empty
      </AppCardTitle>
      <VDataTable :items="[]" :headers="headers" />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Multi Sort
      </AppCardTitle>
      <VDataTable :items="items" :headers="headers" must-sort />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Disabled Sorting
      </AppCardTitle>
      <VDataTable :items="items" :headers="headers" disable-sorting />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Search
      </AppCardTitle>
      <VInput
        v-model="search"
        placeholder="Search..."
        prepend-icon="ri:search-line"
        wrapper-class="mb-4"
      />
      <VDataTable v-model:search="search" :items="items" :headers="headers" />
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Server Side
      </AppCardTitle>
      <DataTableServerSide />
    </AppCard>
  </div>
</template>

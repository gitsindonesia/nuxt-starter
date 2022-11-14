<script setup lang="ts">
import { VDataTable } from '@gits-id/table'
import type { VDataTableHeader, VDataTableItem } from '@gits-id/table'
import { ref, toRefs } from 'vue'

type TableProps = InstanceType<typeof VDataTable>['$props']

interface Props {
  items?: VDataTableItem[]
  headers?: VDataTableHeader[]
  totalItems?: number
  tableProps?: TableProps
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  headers: () => [],
  totalItems: 0,
  tableProps: () => ({}),
})

const emit = defineEmits<{
  (e: 'update:items', value: string): void
}>()

// destructuring props
const { items } = toRefs(props)

// states
const search = ref('')
const page = ref(1)
const itemPerPage = ref(5)
const perPageItems = ref([5, 10, 24, 50, 100].map(item => ({
  text: item.toString(),
  value: item,
})))

// computed
const start = computed(() => props.totalItems > 0 ? (page.value - 1) * itemPerPage.value : 1)
const end = computed(() => start.value + itemPerPage.value)
</script>

<template>
  <AppCard>
    <div class="flex flex-col md:flex-row mb-5 items-center justify-between">
      <VInput
        placeholder="Search"
        append-icon="ri:search-line"
        wrapper-class="w-full md:w-1/3"
      />
      <div
        class="w-full md:w-1/2 flex gap-4 justify-end items-center"
      >
        <VSelect
          placeholder="1-10 dari 50"
          :items="perPageItems"
        />
        <VPagination
          v-model="page"
          :items-per-page="itemPerPage"
          :total-items="totalItems"
        />
      </div>
    </div>
    <VDataTable
      :headers="headers"
      :items="items"
      :search="search"
      flat
      hide-footer
      v-bind="tableProps"
    />
  </AppCard>
</template>

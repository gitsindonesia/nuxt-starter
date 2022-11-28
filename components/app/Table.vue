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
  itemsPerPage?: number
  search?: string
  page?: number
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  headers: () => [],
  totalItems: 0,
  tableProps: () => ({}),
  itemsPerPage: 5,
  page: 1,
  search: '',
})

const emit = defineEmits<{
  (e: 'update:items', value: VDataTableItem[]): void
  (e: 'update:search', value: string): void
  (e: 'update:page', value: number): void
  (e: 'update:itemsPerPage', value: number): void
}>()

// destructuring props
const { items, totalItems } = toRefs(props)

// states
const search = useVModel(props, 'search', emit)
const page = useVModel(props, 'page', emit)
const itemsPerPage = useVModel(props, 'itemsPerPage', emit)

const perPageItems = ref([5, 10, 24, 50, 100].map(item => ({
  text: item.toString(),
  value: item,
})))

// computed
const start = computed(() =>
  totalItems.value > 0 ? (page.value - 1) * itemsPerPage.value + 1 : 1,
)
const end = computed(() =>
  totalItems.value > 0 ? start.value + itemsPerPage.value - 1 : null,
)
</script>

<template>
  <AppCard>
    <div class="flex flex-col md:flex-row gap-4 mb-5 items-center justify-between">
      <VInput
        placeholder="Search"
        append-icon="ri:search-line"
        wrapper-class="w-full lg:w-auto"
      />
      <div
        class="w-full lg:w-auto flex flex-col sm:flex-row gap-4 justify-end items-center"
      >
        <VSelect
          v-model="itemsPerPage"
          :items="perPageItems"
          hide-check-icon
          wrapper-class="w-full sm:w-auto"
          btn-class="!text-sm text-gray-500"
        >
          <template #selected>
            {{ start }}-{{ end }} dari {{ totalItems }}
          </template>
        </VSelect>
        <VPagination
          v-model="page"
          :items-per-page="itemsPerPage"
          :total-items="totalItems"
          :simple="isMobile"
        />
      </div>
    </div>
    <VDataTable
      v-model:page="page"
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="items"
      :search="search"
      flat
      hide-footer
      v-bind="tableProps"
    />
  </AppCard>
</template>

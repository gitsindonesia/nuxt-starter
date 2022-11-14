<script setup lang="ts">
import type { VDataTableHeader, VDataTableItem } from '@gits-id/table'
import { ref, toRefs } from 'vue'

interface Props {
  items?: VDataTableItem[]
  headers?: VDataTableHeader[]
  totalItems?: number
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  headers: () => [],
  totalItems: 0,
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
    <div class="flex">
      <VInput
        placeholder="Search"
        input-class="text-xs"
        class="h-[40px]"
        append-icon="ri:search-line"
      />
      <div class="sm:w-6/12 flex justify-end items-center">
        <VSelect :items="perPageItems" />
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
      @update:items="emit('update:items', $event)"
    />
  </AppCard>
</template>

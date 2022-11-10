<script setup lang="ts">
import { storeToRefs } from 'pinia'

const menus = ref([
  {
    text: 'Home',
    to: '/dashboard',
    icon: 'ri:home-line',
  },
  {
    text: 'Manage',
    to: '/manage',
    icon: 'ri:table-2',
  },
  {
    text: 'Laporan',
    to: '/laporan',
    icon: 'ri:bar-chart-2-fill',
  },
  {
    text: 'Bantuan',
    to: '/help',
    icon: 'ri:question-fill',
  },
])

const layout = useLayoutStore()
const { sidebar, miniSidebar } = storeToRefs(layout)

const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <VNavDrawer
    v-model="sidebar"
    color="dark"
    :fixed="isMobile"
    :overlay="isMobile"
    :mini="miniSidebar"
  >
    <div class="h-[58px] flex justify-center items-center">
      <slot name="logo">
        <VLogo v-if="!miniSidebar" white />
      </slot>
    </div>
    <VList rounded hover class="p-2 space-y-1">
      <VListItem
        v-for="menu in menus"
        :key="menu.text"
        :prepend-icon="menu.icon"
        :to="menu.to"
        hover
        hover-class="hover:bg-gray-700"
        exact-active-class="bg-gray-700"
      >
        {{ menu.text }}
      </VListItem>
    </VList>
  </VNavDrawer>
</template>

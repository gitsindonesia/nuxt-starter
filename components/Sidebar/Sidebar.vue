<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~~/stores/auth'
import { useLayoutStore } from '~~/stores/layout'

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
const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/auth/login')
}

const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <NavDrawer
    v-model="sidebar"
    variant="dark"
    :fixed="isMobile"
    :overlay="isMobile"
    :mini="miniSidebar"
  >
    <div class="h-[58px] flex justify-center items-center">
      <slot name="logo">
        <VLogo v-if="!miniSidebar" img-class="h-6" white />
      </slot>
    </div>
    <VList rounded hover class="p-2 space-y-1">
      <VListItem
        v-for="menu in menus"
        :key="menu.text"
        :prepend-icon="menu.icon"
        :to="menu.to"
        hover
        hover-class="hover:bg-neutral-700"
        exact-active-class="bg-neutral-700"
      >
        {{ menu.text }}
      </VListItem>
    </VList>
  </NavDrawer>
</template>

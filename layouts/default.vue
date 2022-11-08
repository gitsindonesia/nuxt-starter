<script setup lang="ts">
import { storeToRefs } from 'pinia'
import '@gits-id/avatar/dist/style.css'

const layout = useLayoutStore()
const { miniSidebar, sidebar } = storeToRefs(layout)

useHead({
  title: 'Dashboard',
})

const isMobile = computed(() => {
  return useMediaQuery('(max-width: 768px)')
})

const toggleMenu = () => {
  if (isMobile.value) {
    miniSidebar.value = false
    sidebar.value = !sidebar.value
  }
  else { miniSidebar.value = !miniSidebar.value }
}
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <Sidebar />

    <div
      class="sm:flex-1 transition-all duration-300"
    >
      <VAppBar shadow class="flex px-4 py-2 items-center justify-between">
        <v-btn icon rounded text @click="toggleMenu">
          <v-icon name="ri:menu-line" class="w-6 h-6" />
        </v-btn>
        <div class="flex gap-2 items-center">
          <v-btn icon rounded text class="relative">
            <v-icon name="ri:notification-line" class="w-6 h-6" />
            <span class="bg-error-500 text-white rounded-full absolute right-0 top-0 w-4 h-4 text-xs">
              6
            </span>
          </v-btn>
          <v-dropdown
            :items="[
              {
                text: 'Logout',
              },
            ]"
          >
            <template #activator="on">
              <v-btn size="xs" text class="flex gap-3 items-center" v-on="on">
                <div>
                  <VAvatar
                    src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                  />
                </div>
                <div class="text-left">
                  <h3 class="text-sm font-semibold">
                    Hendy Yanuar
                  </h3>
                  <p class="text-xs text-gray-500">
                    Pemilik Toko
                  </p>
                </div>
                <v-icon name="ion:chevron-down-outline" class="w-4 h-4 text-gray-500" />
              </v-btn>
            </template>
          </v-dropdown>
        </div>
      </VAppBar>

      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

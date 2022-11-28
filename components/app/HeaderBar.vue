<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { VBtn } from '@gits-id/ui'

const layout = useLayoutStore()
const { miniSidebar, sidebar } = storeToRefs(layout)

const isMobile = useMediaQuery('(max-width: 768px)')

const toggleMenu = () => {
  if (isMobile.value) {
    miniSidebar.value = false
    sidebar.value = !sidebar.value
  }
  else {
    sidebar.value = true
    miniSidebar.value = !miniSidebar.value
  }
}

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/auth/login')
}
</script>

<template>
  <VAppBar sticky shadow class="flex px-4 py-2 sm:pl-2 sm:pr-6 items-center justify-between">
    <VBtn
      icon
      fab
      text
      @click="toggleMenu"
    >
      <VIcon name="ri:menu-line" class="w-6 h-6" />
    </VBtn>
    <div class="flex gap-2 items-center">
      <VBtn
        icon
        fab
        text
        class="relative"
      >
        <VIcon name="ri:information-line" class="w-6 h-6" />
      </VBtn>
      <VBtn
        icon
        fab
        text
        class="relative"
      >
        <VIcon name="ri:notification-line" class="w-6 h-6" />
        <span
          class="bg-error-500 text-white rounded-full absolute right-0 top-0 w-4 h-4 text-xs"
        >
          6
        </span>
      </VBtn>
      <VMenus right>
        <button
          aria-label="Account Menu"
          type="button"
          class="flex gap-3 items-center"
        >
          <div>
            <VAvatar
              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
            />
          </div>
          <div class="text-left hidden sm:block">
            <h3 class="text-sm font-semibold">
              Hendy Yanuar
            </h3>
            <p class="text-xs text-gray-500">
              Pemilik Toko
            </p>
          </div>
          <VIcon size="sm" name="ion:chevron-down-outline" class="text-gray-500" />
        </button>
        <template #items>
          <VMenusItem prepend-icon="ri:logout-box-r-line" @click="logout">
            Logout
          </VMenusItem>
        </template>
      </VMenus>
    </div>
  </VAppBar>
</template>

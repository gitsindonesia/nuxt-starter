<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Menu } from 'floating-vue'

const menus = ref([
  {
    text: 'Home',
    to: '/dashboard',
    icon: 'ri:home-line',
  },
  {
    text: 'Forms',
    icon: 'ri:table-2',
    items: [
      {
        text: 'Basic Example',
        to: '/forms',
      },
    ],
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
      <template
        v-for="menu in menus"
        :key="menu.text"
      >
        <!-- mini nav -->
        <Menu
          v-if="miniSidebar && menu.items"
          placement="right"
        >
          <VListItem
            :prepend-icon="menu.icon"
            :to="menu.to"
            hover
            hover-class="hover:bg-gray-700"
            exact-active-class="bg-gray-700"
          >
            {{ menu.text }}
          </VListItem>
          <template #popper>
            <VList class="p-1">
              <VListItem
                v-for="subMenu in menu.items"
                :key="subMenu.text"
                :to="subMenu.to"
              >
                {{ subMenu.text }}
              </VListItem>
            </VList>
          </template>
        </Menu>
        <!-- default nav -->
        <VListCollapse v-else-if="menu.items">
          <template #activator="{ isOpen, toggle }">
            <VListItem
              :prepend-icon="menu.icon"
              :to="menu.to"
              hover
              hover-class="hover:bg-gray-700"
              exact-active-class="bg-gray-700"
              append-icon="ri:arrow-down-s-line"
              :append-icon-class="isOpen ? 'rotate-180' : ''"
              @click="toggle"
            >
              {{ menu.text }}
            </VListItem>
          </template>
          <VList>
            <VListItem
              v-for="subMenu in menu.items"
              :key="subMenu.text"
              :to="subMenu.to"
              hover-class="hover:bg-gray-700"
              exact-active-class="bg-gray-700"
            >
              {{ subMenu.text }}
            </VListItem>
          </VList>
        </VListCollapse>
        <VListItem
          v-else
          v-tooltip.right="menu.text"
          :prepend-icon="menu.icon"
          :to="menu.to"
          hover
          hover-class="hover:bg-gray-700"
          exact-active-class="bg-gray-700"
        >
          {{ menu.text }}
        </VListItem>
      </template>
    </VList>
  </VNavDrawer>
</template>

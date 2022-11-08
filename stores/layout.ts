import { defineStore } from 'pinia'

export interface LayoutState {
  sidebar: boolean
  miniSidebar: boolean
}

export const useLayoutStore = defineStore({
  id: 'layout',
  state: (): LayoutState => {
    return {
      sidebar: true,
      miniSidebar: false,
    }
  },
})

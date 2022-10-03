import { defineStore } from 'pinia'

export interface LayoutState {
  isMini: boolean
}

export const useLayoutStore = defineStore({
  id: 'layout',
  state: (): LayoutState => {
    const mini = useCookie<boolean>('mini')
    return {
      isMini: mini.value,
    }
  },
})

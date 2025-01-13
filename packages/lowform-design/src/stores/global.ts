import { defineStore } from 'pinia'

interface GlobalState {
  isDark: boolean
}

export const useGlobalStore = defineStore({
  id: 'app-global',
  state: (): GlobalState => ({
    isDark: false
  }),
  actions: {
    switchMode() {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  },
  persist: true
})

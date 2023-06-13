import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => {
    return {
      isVisible: false,
      isMenuOpen: false,
    }
  },
})

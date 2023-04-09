import { defineStore } from 'pinia'

export const usePreloaderStore = defineStore('preloader', {
  state: () => {
    return {
      isPlaying: true,
      duration: 9,
      fadeDuration: 1,
    }
  },
})

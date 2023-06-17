
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueFlicking', Flicking)
})

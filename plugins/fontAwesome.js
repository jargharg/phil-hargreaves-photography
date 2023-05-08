import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add([faCircle, faInstagram, faTwitter, faFacebookF, faLinkedinIn])

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
  nuxtApp.vueApp.component('font-awesome-layers', FontAwesomeLayers, {})
})

import gsap from 'gsap'
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/global.scss',
  ],

  plugins: [
    '@/plugins/setupGsap.client',
  ],

  pageTransition: {
    enter (el, onComplete) {
      gsap.timeline({ onComplete }).from(el, {
        opacity: 0,
        duration: 3,
        ease: 'linear',
      })
    },

    leave (el, onComplete) {
      gsap.timeline({ onComplete }).to(el, {
        opacity: 0,
        duration: 3,
        ease: 'linear',
      })
    },
  },
})

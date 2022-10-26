import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],

  nitro: {
    preset: 'cloudflare',
  },

  css: [
    '@/assets/global.scss',
  ],

  plugins: [
    '@/plugins/setupGsap.client',
  ],

  build: {
    transpile: ['gsap'],
  },
})

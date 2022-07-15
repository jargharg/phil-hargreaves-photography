import gsap from 'gsap'
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: 'static',

  buildModules: ['@nuxtjs/tailwindcss'],

  css: [
    '@/assets/global.scss',
  ],

  plugins: [
    '@/plugins/setupGsap.client',
  ],
})

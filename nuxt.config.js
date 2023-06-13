// https://nuxt.com/docs/api/configuration/nuxt-config

import smConfig from './slicemachine.config.json'

const EXCLUDED_SITEMAP_ROUTES = ['/preview/', '/404/', '/slice-simulator/']

if (!smConfig.apiEndpoint) {
  // eslint-disable-next-line no-console
  console.warn("Looks like Slice Machine hasn't been bootstrapped already.\nCheck the `Getting Started` section of the README file :)")
}

export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare_pages',
  },

  modern: process.env.NODE_ENV !== 'development' ? 'client' : false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },

    title: 'Phil Hargreaves Photography',

    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'lang',
        name: 'lang',
        content: 'en',
      },
      {
        hid: 'language',
        name: 'language',
        content: 'English',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Phil Hargreaves Photography',
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_gb',
      },
      {
        hid: 'og:see_also:pinterest',
        name: 'og:see_also',
        content: 'https://www.pinterest.co.uk/------',
      },
      {
        hid: 'og:see_also:instagram',
        name: 'og:see_also',
        content: 'https://www.instagram.com/------',
      },
      {
        hid: 'og:see_also:linkedin',
        name: 'og:see_also',
        content: 'https://www.linkedin.com/company/------',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@------',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@studiotreble',
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#231f20',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
      { // TODO: remove this on go live!!!!!!!!!!!!!
        hid: 'robots',
        name: 'robots',
        content: 'noindex',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        color: '#000000',
        href: '/favicons/safari-pinned-tab.svg',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/favicons/site.webmanifest',
      },
    ],
  },

  css: [
    '~/assets/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  components: true,

  modules: [
    '@nuxtjs/prismic',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }],
    ['@pinia/nuxt', { disableVuex: true }],
    '@dargmuesli/nuxt-cookie-control',
  ],

  build: {
    transpile: ['nuxt-sm', 'sm-commons', 'gsap', 'pinia', '@studiotreble'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      googleAnalyticsMeasurementIdGA4: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID_GA4 || null,
      googleAnalyticsMeasurementIdUA: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID_UA || null,
    },
  },

  detectBrowserLanguage: {
    useCookie: false,
  },

  tailwindcss: {
    viewer: false,
  },

  image: {
    provider: 'prismic',
    prismic: {},
  },

  prismic: {
    endpoint: smConfig.repositoryName || '',
    modern: true,
  },

  cookies: {
    necessary: [
      {
        name: 'Cookie Control',
        description: 'Used to save cookie consents.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
      },
    ],
    optional: [
      {
        name: 'Statistics',
        identifier: 'ga',
        description: 'Analytics cookies help us understand how visitors interact with websites by collecting and reporting information anonymously.',
        initialState: false,
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        cookies: ['_ga', '_gat', '_gid', 'ga-cookie-consent'],
        accepted: async () => {
          // window.$nuxt.$ga.enable() // Activate module
          // window.$nuxt.$ga.page(window.$nuxt.$route.path) // Track current route
        },
        declined: async () => {
          // window.$nuxt.$cookies.remove('ga') // Remove any existing Google Analytics cookies
        },
      },
    ],
  },

  sitemap: {
    hostname: process.env.SITE_URL,
    trailingSlash: true,
    filter: ({ routes }) => {
      return routes.filter(({ url }) => !EXCLUDED_SITEMAP_ROUTES.find(excludedRoute => url.includes(excludedRoute)))
    },
  },

  cookieControl: {
    barPosition: 'bottom-full',
    colors: {
      barTextColor: '#1D1E1C',
      modalOverlay: '#000',
      barBackground: '#fff',
      barButtonColor: '#fff',
      modalTextColor: '#1D1E1C',
      modalBackground: '#fff',
      modalOverlayOpacity: 0.8,
      modalButtonColor: '#fff',
      modalUnsavedColor: '#fff',
      barButtonHoverColor: '#000000',
      barButtonBackground: '#1D1E1C',
      modalButtonHoverColor: '#000000',
      modalButtonBackground: '#1D1E1C',
      controlButtonIconColor: '#000',
      controlButtonBackground: '#fff',
      barButtonHoverBackground: '#C5DFAB',
      checkboxActiveBackground: '#C5DFAB',
      checkboxInactiveBackground: '#1D1E1C',
      modalButtonHoverBackground: '#C5DFAB',
      checkboxDisabledBackground: '#F3F3F3',
      controlButtonIconHoverColor: '#fff',
      controlButtonHoverBackground: '#000',
      checkboxActiveCircleBackground: '#000',
      checkboxInactiveCircleBackground: '#fff',
      checkboxDisabledCircleBackground: '#fff',
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config

import fs from 'fs'
import linkResolver from './app/prismic/linkResolver'
import clientDetails from './clientDetails'
import generateAllRoutesFromPrismic from './helpers/generateAllRoutesFromPrismic'
import smConfig from './slicemachine.config.json'

const DEFAULT_SITE_URL = 'http://localhost:3000'
const EXCLUDED_SITEMAP_ROUTES = ['/preview/', '/404/', '/slice-simulator/']

if (!smConfig.apiEndpoint) {
  // eslint-disable-next-line no-console
  console.warn("Please add your Prismic repository's endpoint to the `slicemachine.config.json` file.")
}

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  hooks: {
    async 'nitro:config' (nitroConfig) {
      if (nitroConfig.dev) { return }
      const prismicRoutes = await generateAllRoutesFromPrismic(smConfig.apiEndpoint, linkResolver)
      nitroConfig.prerender.routes.push(...prismicRoutes)
    },

    'sitemap:generate:done' () {
      const sitemapServerPath = './.output/public/sitemap.xml'
      const sitemapStaticPath = './dist/sitemap.xml'

      if (fs.existsSync(sitemapServerPath)) {
        fs.renameSync(sitemapServerPath, sitemapStaticPath)
      }
    },
  },

  nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      crawlLinks: false,
    },
  },

  modern: process.env.NODE_ENV !== 'development' ? 'client' : false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },

    title: clientDetails.siteName,

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
        content: clientDetails.siteName,
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_gb',
      },
      (
        clientDetails.pinterestName?.length && {
          hid: 'og:see_also:pinterest',
          name: 'og:see_also',
          content: `https://www.pinterest.co.uk/${clientDetails.pinterestName}`,
        }
      ),
      (clientDetails.instagramName?.length && {
        hid: 'og:see_also:instagram',
        name: 'og:see_also',
        content: `https://www.instagram.com/${clientDetails.instagramName}`,
      }),
      (clientDetails.linkedinName?.length && {
        hid: 'og:see_also:linkedin',
        name: 'og:see_also',
        content: `https://www.linkedin.com/company/${clientDetails.linkedinName}`,
      }),
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      (clientDetails.twitterName?.length && {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: clientDetails.twitterName,
      }),
      (clientDetails.twitterName?.length && {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: clientDetails.twitterName,
      }),
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
      { // @TODO: remove this on go live!!!!!!!!!!!!!
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
  ],

  components: true,

  app: {
    pageTransition: true,
    layoutTransition: false,
  },

  modules: [
    '@nuxtjs/prismic',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/color-mode',
    ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }],
    ['@pinia/nuxt', { disableVuex: true }],
    '@dargmuesli/nuxt-cookie-control',
  ],

  build: {
    transpile: ['nuxt-sm', 'sm-commons', 'gsap', 'pinia', '@egjs/vue3-flicking'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      isDevMode: process.env.NODE_ENV === 'development',
      siteUrl: process.env.SITE_URL || DEFAULT_SITE_URL,
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID_GA4 || null,
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
    densities: [1, 2],
  },

  prismic: {
    endpoint: smConfig.repositoryName,
    modern: true,
  },

  sitemap: {
    hostname: process.env.SITE_URL || DEFAULT_SITE_URL,
    trailingSlash: true,
    filter: ({ routes }) => {
      return routes.filter(({ url }) => !EXCLUDED_SITEMAP_ROUTES.find(excludedRoute => url.includes(excludedRoute)))
    },
  },

  colorMode: {
    preference: 'cream',
    fallback: 'cream',
  },

  // @TODO style cookie control banner
  cookieControl: {
    isAcceptNecessaryButtonEnabled: false,

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

    cookies: {
      necessary: [
        {
          name: 'Cookie Control',
          description: {
            en: 'Used to save cookie consents.',
          },
          targetCookieIds: ['ncc_e', 'ncc_c'],
        },
      ],

      optional: [
        {
          id: 'ga',
          name: {
            en: 'Google Analytics',
          },
          description: 'Analytics cookies help us understand how visitors interact with websites by collecting and reporting information anonymously.',
          initialState: false,
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID_GA4}`,
          async: true,
          targetCookieIds: ['_ga', '_gat', '_gid', 'ga-cookie-consent'],
        },
      ],
    },
  },
})

<template>
  <div class="min-h-screen bg-brand-blue text-base-mobile lg:text-base font-light">
    <SiteHeader />

    <main class="text-brand-blue">
      <NuxtPage :transition="defaultTransition" />
    </main>

    <SlideTicker />

    <SiteFooter />
  </div>
</template>

<script>
import defaultTransition from '~/helpers/defaultTransition'
import { useA11yStore } from '~/stores/a11y'

export default {
  setup () {
    const { $nuxt, $prismic } = useNuxtApp()
    const route = useRoute()

    const a11yStore = useA11yStore()
    const reducedMotion = computed(() => a11yStore.reducedMotion)

    const isCookiePolicyRoute = () => route.fullPath.includes('cookie-policy')
    const isCookieButtonHidden = computed(() => !isCookiePolicyRoute())

    onMounted(async () => {
      await nextTick()

      if ($prismic.isPreview) {
        $nuxt.refresh()
      }
    })

    useHead(() => ({
      htmlAttrs: { lang: 'en' },
    }))

    return { defaultTransition, isCookieButtonHidden, reducedMotion }
  },
}
</script>

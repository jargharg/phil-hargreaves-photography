<template>
  <div class="min-h-[100svh] bg-blue text-base font-light">
    <SiteHeader />

    <main class="text-blue bg-cream">
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

<template>
  <section ref="elSection" class="hero-section">
    <slot />

    <div class="hero-section__overlay" />

    <div v-if="title || $prismic.asText(tagline)" class="hero-section__details container">
      <div class="max-w-lg">
        <Heading v-if="title" class="mb-2 text-2xl xl:text-3xl">
          {{ title }}
        </Heading>

        <div
          v-if="$prismic.asText(tagline)"
          class="prose text-base lg:text-[24px] leading-[1.2]"
        >
          <prismic-rich-text :field="tagline" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import sleep from '~/helpers/sleep'

import { DURATION_IN_MS } from '~/composables/defaultTransition'
import { useA11yStore } from '~/stores/a11y'

export default {
  props: {
    title: {
      type: String,
      default: null,
    },

    tagline: {
      type: Array,
      default: null,
    },
  },

  setup () {
    const a11yStore = useA11yStore()

    const elSection = ref(null)
    const elSlot = ref(null)

    let bgAnimation = null

    onMounted(async () => {
      await sleep(DURATION_IN_MS)
      await nextTick()

      bgAnimation = gsap
        .timeline({
          scrollTrigger: {
            scrub: true,
            start: 'top top',
            end: () => `${window.innerHeight} top`,
            invalidateOnRefresh: true,
          },
        })
        .to(elSection.value.children[0], {
          yPercent: 50,
          ease: 'none',
        })

      if (a11yStore.reducedMotion) {
        bgAnimation.scrollTrigger.disable()
      }
    })

    watch(
      () => a11yStore.reducedMotion,
      (isReducedMotion) => {
        if (isReducedMotion) {
          bgAnimation.scrollTrigger.disable()
          bgAnimation.progress(0)
        } else {
          bgAnimation.scrollTrigger.enable()
        }
      },
    )

    onUnmounted(async () => {
      await sleep(DURATION_IN_MS)
      bgAnimation?.scrollTrigger?.kill()
    })

    return { elSection, elSlot }
  },
}
</script>

<style lang="scss" scoped>
.hero-section {
  @apply relative h-screen w-full overflow-hidden bg-brand-blue;

  &__overlay {
    @apply absolute inset-0 pointer-events-none select-none opacity-50;
    background: linear-gradient(to top, var(--hero-overlay-color), transparent 50%);
  }

  &__details {
    @apply absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2;
    color: var(--hero-text-color);
  }
}
</style>

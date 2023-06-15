<template>
  <article class="bg-brand-cream">
    <HeroSection :with-overlay="false">
      <FullscreenImageCarousel :images="doc.heroImages" />

      <CtaButton
        :with-arrow="false"
        class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 !text-xs"
        @click="onClickDown"
      >
        <ScrollDownArrow />
        Scroll
      </CtaButton>
    </HeroSection>

    <section
      class="max-w-3xl mx-auto flex flex-col items-center text-center gap-5 my-10 md:my-20 px-5"
    >
      <prismic-rich-text
        :field="doc.heroTagline"
        class="text-xl lg:text-2xl font-serif leading-none font-bold"
      />

      <CtaButton :to="$prismic.asLink(doc.heroCtaLink)" class="-mr-4">
        {{ doc.heroCtaLabel }}
      </CtaButton>
    </section>

    <section class="container my-10 md:my-20 bg-brand-cream">
      <RoundedGrid
        :images="[doc.introImage1, doc.introImage2, doc.introImage3]"
        :text-blocks="doc.introTextBlocks"
      />
    </section>

    <section>
      <PhpSliceZone :slices="doc.slices7" />
    </section>

    <SlideTicker />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/composables/getDocumentFromPrismic'
import { useGlobalsStore } from '~/stores/globals'

export default {
  async setup () {
    const globalsStore = useGlobalsStore()
    const { ctaLink, ctaLabel } = toRefs(globalsStore)

    const doc = await getDocumentFromPrismic('homepage')

    const onClickDown = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      })
    }

    return { ctaLabel, ctaLink, doc, onClickDown }
  },
}
</script>

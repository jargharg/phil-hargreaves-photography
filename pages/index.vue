<template>
  <article>
    <ImageCarousel :images="doc.heroImages" />

    <section
      class="max-w-3xl mx-auto flex flex-col items-center text-center gap-5 my-10 md:my-20 px-5"
    >
      <prismic-rich-text
        :field="doc.heroTagline"
        class="text-xl lg:text-2xl font-serif leading-none font-bold"
      />

      <CtaButton :to="$prismic.asLink(doc.heroCtaLink)">
        {{ doc.heroCtaLabel }}
      </CtaButton>
    </section>

    <section class="container my-10 md:my-20">
      <RoundedGrid
        :images="[doc.introImage1, doc.introImage2, doc.introImage3]"
        :text-blocks="doc.introTextBlocks"
      />
    </section>

    <section>
      <PHPSliceZone :slices="doc.slices7" />
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

    return {
      ctaLabel,
      ctaLink,
      doc,
    }
  },
}
</script>

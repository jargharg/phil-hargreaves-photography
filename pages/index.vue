<template>
  <article v-if="doc">
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

    <QuotesCarousel :quotes="doc.quotes" />

    <section>
      <TextBoxWithImage
        class="bg-brand-cream"
        :image="doc.aboutImage"
        :cta-text="doc.aboutCtaLabel"
        :cta-link="$prismic.asLink(doc.aboutCtaLink)"
      >
        <Heading level="2">
          {{ doc.aboutHeading }}
        </Heading>

        <BodyText>
          <prismic-rich-text :field="doc.aboutBody" />
        </BodyText>
      </TextBoxWithImage>

      <TextBoxWithImage
        class="bg-brand-cream"
        :image="doc.contactImage"
        :cta-text="doc.contactCtaLabel"
        :cta-link="$prismic.asLink(doc.contactCtaLink)"
        image-position="right"
      >
        <Heading level="2">
          {{ doc.contactHeading }}
        </Heading>

        <BodyText>
          <prismic-rich-text :field="doc.contactBody" />
        </BodyText>
      </TextBoxWithImage>

      <QuotesCarousel :quotes="doc.quotes" />

      <SlideTicker />
    </section>
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

<template>
  <article v-if="doc">
    <section class="h-screen w-full">
      <SizedImage
        v-if="doc.heroImage?.url"
        :src="doc.heroImage.url"
        :alt="doc.heroImage.alt"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        :lazy="false"
      />
    </section>

    <section
      class="max-w-3xl mx-auto flex flex-col items-center text-center gap-5 my-20 px-5"
    >
      <prismic-rich-text
        :field="doc.heroTagline"
        class="text-2xl font-serif leading-none font-bold"
      />

      <CtaButton :to="$prismic.asLink(doc.heroCtaLink)">
        {{ doc.heroCtaLabel }}
      </CtaButton>
    </section>

    <section class="container my-20">
      <RoundedGrid
        :images="[doc.introImage1, doc.introImage2, doc.introImage3]"
        :text-blocks="doc.introTextBlocks"
      />
    </section>

    <QuotesBlock :quotes="doc.quotes" />

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
    </section>
  </article>
</template>

<script>
import gsap from 'gsap'
import addSeoToHead from '~/composables/addSeoToHead'
import { useA11yStore } from '~/stores/a11y'
import { useGlobalsStore } from '~/stores/globals'

export default {
  setup () {
    const { client } = usePrismic()

    const elIntro = ref(null)

    const globalsStore = useGlobalsStore()
    const { ctaLink, ctaLabel } = toRefs(globalsStore)

    const a11yStore = useA11yStore()
    const reducedMotion = computed(() => a11yStore.reducedMotion)

    const { data: doc } = useAsyncData('homepage', async () => {
      const { data } = await client.getSingle('homepage')
      return data
    })

    addSeoToHead(doc, true)

    return {
      ctaLabel,
      ctaLink,
      doc,
      elIntro,
    }
  },
}
</script>

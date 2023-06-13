<template>
  <article>
    <HeroSection :title="doc.title" :tagline="hero.tagline">
      <FullscreenImage :image="doc.heroImage" />
    </HeroSection>

    <prismic-rich-text :field="doc.body" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/composables/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('legal', { repeatable: true })

    return { doc }
  },
}
</script>

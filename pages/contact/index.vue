<template>
  <article>
    <HeroSection :title="doc.title" :tagline="doc.heroTagline">
      <FullscreenImage :image="doc.heroImage" />
    </HeroSection>

    <PhpSliceZone :slices="doc.slices2" class="pt-16 pb-16 bg-brand-cream" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/composables/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('contact')

    return { doc }
  },
}
</script>

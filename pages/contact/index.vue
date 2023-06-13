<template>
  <article>
    <HeroSection :title="doc.title" :tagline="hero.tagline">
      <FullscreenImage :image="doc.heroImage" />
    </HeroSection>

    <div class="pt-12">
      contact etc
    </div>
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

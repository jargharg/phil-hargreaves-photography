<template>
  <article>
    <HeroSection :title="doc.title" :tagline="doc.heroTagline">
      <FullscreenImage :image="doc.heroImage" />
    </HeroSection>

    <PhpSliceZone :slices="doc.slices2" class="slice-zone" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/composables/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('contentPage', { repeatable: true })
    console.log(doc)

    return { doc }
  },
}
</script>

<style lang="scss" scoped>
.slice-zone {
  @apply pt-16;

  :deep section:last-of-type:not(.emphasis-slice) {
    @apply pb-16;
  }
}
</style>

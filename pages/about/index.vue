<template>
  <article>
    <section class="h-screen relative">
      <FullscreenImage :image="doc.heroImage" />

      <div
        class="absolute container bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2"
        :class="
          doc.textColor === 'Dark' ? 'text-brand-blue' : 'text-brand-cream'
        "
      >
        <div class="max-w-lg">
          <Heading class="mb-2 text-2xl xl:text-3xl">
            {{ doc.title }}
          </Heading>

          <div class="prose text-base lg:text-[24px] leading-[1.2]">
            <prismic-rich-text :field="doc.heroTagline" />
          </div>
        </div>
      </div>
    </section>

    <PhpSliceZone :slices="doc.slices2" class="pt-16" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/composables/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('about')

    return { doc }
  },
}
</script>

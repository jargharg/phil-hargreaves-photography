<template>
  <div
    class="bg-brand-coral text-brand-cream py-20 xl:py-28 px-5 md:px-8 lg:px-20 h-full flex flex-col justify-center"
  >
    <prismic-rich-text
      :field="body"
      class="text-lg lg:text-xl font-serif-small text-center mx-auto font-bold leading-[1.2] md:leading-[1.1] lg:max-w-4xl"
    />

    <CtaButton
      v-if="ctaLabel && $prismic.asLink(ctaLink)"
      class="mt-4 mx-auto"
      :to="$prismic.asLink(ctaLink)"
    >
      {{ ctaLabel }}
    </CtaButton>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: Array,
      required: true,
    },

    ctaLink: {
      type: Object,
      default: null,
    },

    ctaLabel: {
      type: String,
      default: null,
    },
  },
}
</script>

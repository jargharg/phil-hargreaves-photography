<template>
  <div class="flex flex-col items-stretch sm:items-start gap-7 pb-2">
    <TextBlockDefault v-bind="{ heading, body }" />

    <CtaButton
      v-if="$prismic.asLink(ctaLink)"
      :to="$prismic.asLink(ctaLink)"
      inverted
    >
      {{ ctaLabel }}
    </CtaButton>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    },

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

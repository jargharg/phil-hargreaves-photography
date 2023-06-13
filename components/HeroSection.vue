<template>
  <section class="hero-section">
    <slot />

    <div v-if="title || $prismic.asText(tagline)" class="hero-section__details">
      <div class="max-w-lg">
        <Heading v-if="title" class="mb-2 text-2xl xl:text-3xl">
          {{ title }}
        </Heading>

        <div
          v-if="$prismic.asText(tagline)"
          class="prose text-base lg:text-[24px] leading-[1.2]"
        >
          <prismic-rich-text :field="tagline" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },

    tagline: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-section {
  @apply relative h-screen w-full overflow-hidden;

  &__details {
    @apply absolute container bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2;
    color: var(--hero-text-color);
  }
}
</style>

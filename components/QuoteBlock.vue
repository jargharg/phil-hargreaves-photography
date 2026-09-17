<template>
  <blockquote class="quote-block">
    <prismic-rich-text :field="quote" class="quote-block__quote" />
    <div class="quote-block__attribution">
      — {{ attribution }}
    </div>
  </blockquote>
</template>

<script>
export default {
  props: {
    quote: {
      type: Array,
      required: true,
    },

    attribution: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.quote-block {
  @apply px-8 lg:px-20 xl:px-0 h-full flex flex-col justify-center;

  &__quote {
    @apply text-lg font-serif-small italic leading-[1.2] md:leading-[1.1] max-w-3xl;
  }

  &__attribution {
    @apply text-xs sm:text-base mt-4 md:mt-8 uppercase tracking-widest lg:max-w-4xl;
  }
}
</style>

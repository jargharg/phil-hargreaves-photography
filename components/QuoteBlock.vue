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
    @apply text-lg lg:text-xl font-serif-small italic leading-[1.2] md:leading-[1.1] lg:max-w-4xl;
  }

  &__attribution {
    @apply text-xs sm:text-sm md:text-base mt-2 md:mt-3 uppercase tracking-widest lg:max-w-4xl;
  }
}
</style>

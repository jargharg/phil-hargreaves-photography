<template>
  <section class="container py-20">
    <ul class="rounded-grid">
      <li
        v-for="(image, index) in images"
        :key="index"
        :class="`rounded-grid__image rounded-grid__image--${index}`"
      >
        <SizedImage
          v-if="image?.url"
          :src="image.url"
          :alt="image.alt"
          :dimensions="image.dimensions"
          class="rounded-3xl"
          sizes="sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw"
        />
      </li>

      <li
        v-for="({ text, ctaLink, ctaLabel }, index) in textBlocks"
        :key="index"
        :class="`rounded-grid__text rounded-grid__text--${index}`"
      >
        <prismic-rich-text :field="text" class="mb-2.5" />

        <CtaButton :to="$prismic.asLink(ctaLink)">
          {{ ctaLabel }}
        </CtaButton>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    textBlocks: {
      type: Array,
      required: true,
    },
  },

  setup () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.rounded-grid {
  @apply grid gap-8 py-8;
  grid-template:
    "img-0 img-0 img-0 .     .    " 30vh
    "img-0 img-0 img-0 txt-0 txt-0" 30vh
    "img-0 img-0 img-0 img-1 img-1" 30vh
    "txt-1 txt-1 .     img-1 img-1" 10vh
    "txt-1 txt-1 .     img-1 img-1" 30vh
    "img-2 img-2 img-2 img-2 txt-2" 30vh
    "img-2 img-2 img-2 img-2 txt-2" 30vh
    / 2fr 1fr 1fr 1fr 2fr;

  &__image {
    div {
      @apply bg-brand-blue h-full w-full rounded-3xl;
    }

    &--0 {
      grid-area: img-0;
    }

    &--1 {
      grid-area: img-1;
    }

    &--2 {
      grid-area: img-2;
    }
  }

  &__text {
    @apply flex flex-col justify-end;

    &--0 {
      grid-area: txt-0;
    }

    &--1 {
      grid-area: txt-1;
    }

    &--2 {
      grid-area: txt-2;
    }
  }
}
</style>

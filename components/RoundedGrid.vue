<template>
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

        class="rounded-3xl"
        sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:40vw"
      />
    </li>

    <li
      v-for="({ text, ctaLink, ctaLabel }, index) in textBlocks"
      :key="index"
      :class="`rounded-grid__text rounded-grid__text--${index}`"
    >
      <BodyText>
        <prismic-rich-text :field="text" class="mb-4" />
      </BodyText>

      <CtaButton :to="$prismic.asLink(ctaLink)" class="mx-auto mt-2 mb-4 md:m-0">
        {{ ctaLabel }}
      </CtaButton>
    </li>
  </ul>
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
  @apply grid gap-8 py-8 w-full;

  grid-template:
    "img-0" 50vh
    "txt-0" auto
    "img-1" 50vh
    "txt-1" auto
    "img-2" 50vh
    "txt-2" auto
    / 1fr;

  @screen md {
    grid-template:
      "img-0 txt-0" 15vh
      "img-0 txt-0" 15vh
      "img-0 img-1" 15vh
      "txt-1 img-1" 10vh
      "txt-1 img-1" 15vh
      "img-2 txt-2" 15vh
      "img-2 txt-2" 15vh
      / 1fr 1fr;
  }

  @screen lg {
    grid-template:
      "img-0 img-0 .     .    " 25vh
      "img-0 img-0 txt-0 txt-0" 25vh
      "img-0 img-0 img-1 img-1" 25vh
      "txt-1 txt-1 img-1 img-1" 10vh
      "txt-1 txt-1 img-1 img-1" 25vh
      "img-2 img-2 img-2 txt-2" 25vh
      "img-2 img-2 img-2 txt-2" 25vh
      / 2fr 1fr 1fr 2fr;
  }

  @screen xl {
    grid-template:
      "img-0 img-0 img-0 .     .    " 30vh
      "img-0 img-0 img-0 txt-0 txt-0" 30vh
      "img-0 img-0 img-0 img-1 img-1" 30vh
      "txt-1 txt-1 .     img-1 img-1" 10vh
      "txt-1 txt-1 .     img-1 img-1" 30vh
      "img-2 img-2 img-2 img-2 txt-2" 30vh
      "img-2 img-2 img-2 img-2 txt-2" 30vh
      / 3fr 1fr 1fr 1fr 3fr;
  }

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

<template>
  <div class="h-full w-full relative">
    <div
      class="fs-image fs-image--wide"
      :style="{ mask: `url(${mask.wide.url})`, maskSize: '100vw', maskPosition: 'center' }"
    >
      <SizedImage
        :src="image.wide.url"
        :alt="image.wide.alt"
        sizes="sm:220vw md:220vw lg:220vw xl:220vw 2xl:220vw"
        :lazy="lazy"
      />
    </div>

    <div
      class="fs-image fs-image--default"
      :style="{ mask: `url(${mask.url})`, maskSize: '100vw', maskPosition: 'center' }"
    >
      <SizedImage
        :src="image.url"
        :alt="image.alt"
        sizes="sm:220vw md:220vw lg:220vw xl:220vw 2xl:220vw"
        :lazy="lazy"
      />
    </div>

    <div
      class="fs-image fs-image--square"
      :style="{ mask: `url(${mask.square.url})`, maskSize: '100vw', maskPosition: 'center' }"
    >
      <SizedImage
        :src="image.square.url"
        :alt="image.square.alt"
        sizes="sm:220vw md:220vw lg:220vw xl:220vw 2xl:220vw"
        :lazy="lazy"
      />
    </div>

    <div
      class="fs-image fs-image--portrait"
      :style="{ mask: `url(${mask.portrait.url})`, maskSize: '100vw', maskPosition: 'center' }"
    >
      <SizedImage
        :src="image.portrait.url"
        :alt="image.portrait.alt"
        sizes="sm:220vw md:220vw lg:220vw xl:220vw 2xl:220vw"
        :lazy="lazy"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    mask: {
      type: Object,
      required: true,
    },

    lazy: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.fs-image {
  @apply absolute inset-0 hidden;
  $image: &;

  @media (min-aspect-ratio: 9/5) {
    &#{$image}--wide {
      @apply block;
    }
  }

  @media (min-aspect-ratio: 5/4) and (max-aspect-ratio: 9/5) {
    &#{$image}--default {
      @apply block;
    }
  }

  @media (min-aspect-ratio: 1/1) and (max-aspect-ratio: 5/4) {
    &#{$image}--square {
      @apply block;
    }
  }

  @media (max-aspect-ratio: 1/1) {
    &#{$image}--portrait {
      @apply block;
    }
  }
}
</style>

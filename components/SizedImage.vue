<template>
  <div v-if="src" v-bind="{ style }" class="sized-image__wrapper">
    <nuxt-img
      v-bind="{ alt, sizes, src, ...attrs }"
      ref="image"
      data-qa="image"
      class="sized-image"
      :loading="lazy ? 'lazy' : ''"
      @load="onLoad"
    />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'SizedImage',

  props: {
    /**
     * Image source link
     */
    src: {
      type: String,
      required: true,
    },

    /**
     * Alt text for image
     */
    alt: {
      type: String,
      default: null,
    },

    /**
     * Dimensions of image: used to calculate aspect ratio
     */
    dimensions: {
      type: Object,
      default: () => null,
    },

    /**
     * Whether to lazy-load the image where supported
     */
    lazy: {
      type: Boolean,
      default: true,
    },

    /**
     * Sizes list for srcset where applicable
     */
    sizes: {
      type: String,
      default: '100vw',
    },
  },

  setup (props, { attrs }) {
    const style = computed(() =>
      props.dimensions
        ? `aspect-ratio: ${props.dimensions.width}/${props.dimensions.height};`
        : 'height: 100%; width: 100%;',
    )

    const image = ref(null)

    const onLoad = () => {
      gsap.to(image.value.$el, { opacity: 1, duration: 0.2 })
    }

    onMounted(() => {
      // if (image.value?.$el) {
      //   gsap.set(image.value.$el, { opacity: 0 })
      // }
    })

    return { attrs, image, onLoad, style }
  },
}
</script>

<style lang="scss" scoped>
.sized-image {
  @apply transition-opacity object-cover absolute w-full h-full;

  &__wrapper {
    @apply relative;
  }
}
</style>

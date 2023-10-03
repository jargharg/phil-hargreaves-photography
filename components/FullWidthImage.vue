<template>
  <div v-if="image?.url">
    <div class="h-full lg:hidden">
      <SizedImage
        :src="image.SmallScreen.url"
        :alt="image.SmallScreen.alt"
        :dimensions="image.SmallScreen.dimensions"
        sizes="sm:100vw md:100vw lg:0 xl:0 2xl:0"
      />
    </div>

    <div class="h-full hidden lg:block">
      <SizedImage
        :src="image.url"
        :alt="image.alt"
        :dimensions="image.dimensions"
        sizes="sm:0 md:0 lg:100vw xl:100vw 2xl:100vw"
      />
    </div>
    <p v-if="caption" class="container mt-2 text-xs">
      {{ caption }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    caption: {
      type: String,
      default: null,
    },
  },
}
</script>

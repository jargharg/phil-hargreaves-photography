<template>
  <div v-if="image?.url">
    <div class="h-full lg:hidden">
      <StSizedImage
        :src="image.SmallScreen.url"
        :alt="image.SmallScreen.alt"
        :dimensions="image.SmallScreen.dimensions"
        sizes="sm:200vw md:200vw lg:0 xl:0 2xl:0"
      />
    </div>

    <div class="h-full hidden lg:block">
      <StSizedImage
        :src="image.url"
        :alt="image.alt"
        :dimensions="image.dimensions"
        sizes="sm:0 md:0 lg:200vw xl:200vw 2xl:200vw"
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

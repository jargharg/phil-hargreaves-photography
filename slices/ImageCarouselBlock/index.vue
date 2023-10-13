<template>
  <ArticleSection v-if="slice.items[0]?.image?.url" :with-container="false">
    <ImageCarouselWithControls v-if="slice.items.length > 1" :items="slice.items" />

    <FullWidthImage
      v-else
      :image="slice.items[0].image"
      :caption="slice.items[0].caption"
    />
  </ArticleSection>
</template>

<script>
export default {
  name: 'ImageCarouselBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

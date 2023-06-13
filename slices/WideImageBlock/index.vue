<template>
  <ArticleSection :with-container="false">
    <FullWidthImage
      :image="slice.primary.image"
      :caption="slice.primary.caption"
    />
  </ArticleSection>
</template>

<script>
export default {
  name: 'FullWidthImageBlockSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

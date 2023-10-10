<template>
  <ArticleSection :with-margin="false" :with-container="false">
    <QuotesCarousel :quotes="slice.items" />
  </ArticleSection>
</template>

<script>
export default {
  name: 'QuotesBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <ArticleSection :with-container="slice.variation !== 'textBlockWithMarqueeText'">
    <TextBlock :variation="slice.variation" v-bind="{ ...slice.primary }" />
  </ArticleSection>
</template>

<script>
export default {
  name: 'TextBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

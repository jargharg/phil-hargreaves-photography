<template>
  <ArticleSection :with-margin="false" :with-container="false" class="emphasis-slice">
    <EmphasisBlock
      :body="slice.primary.body"
      :cta-link="slice.primary.ctaLink"
      :cta-label="slice.primary.ctaLabel"
    />
  </ArticleSection>
</template>

<script>
export default {
  name: 'EmphasisBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

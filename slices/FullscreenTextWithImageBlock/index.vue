<template>
  <ArticleSection :with-margin="false" :with-container="false">
    <TextBoxWithImage
      class="bg-brand-cream"
      :image="slice.primary.image"
      :image-position="slice.primary.isImageOnRight ? 'right' : 'left'"
    >
      <TextBlockWithCta
        :heading="slice.primary.heading"
        :body="slice.primary.body"
        :cta-label="slice.primary.ctaLabel"
        :cta-link="slice.primary.ctaLink"
      />
    </TextBoxWithImage>
  </ArticleSection>
</template>

<script>
export default {
  name: 'FullscreenTextWithImageBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

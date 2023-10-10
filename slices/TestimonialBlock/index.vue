<template>
  <ArticleSection>
    <TestimonialBlock
      :testimonial="slice.primary.testimonial"
      :attribution="slice.primary.attribution"
    />
  </ArticleSection>
</template>

<script>
export default {
  name: 'TestimonialBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

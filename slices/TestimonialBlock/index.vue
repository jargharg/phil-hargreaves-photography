<template>
  <ArticleSection>
    <TestimonialBlock
      :testimonial="slice.primary.testimonial"
      :attribution="slice.primary.attribution"
    />
  </ArticleSection>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps < Content.TestimonialBlockSlice > ([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

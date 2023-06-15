<template>
  <ArticleSection :with-margin="false" :with-container="false">
    <QuotesCarousel :quotes="slice.items" />
  </ArticleSection>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps < Content.QuotesBlockSlice > ([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

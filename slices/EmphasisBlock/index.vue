<template>
  <ArticleSection :with-margin="false" :with-container="false" class="emphasis-slice">
    <EmphasisBlock
      :body="slice.primary.body"
      :cta-link="slice.primary.ctaLink"
      :cta-label="slice.primary.ctaLabel"
    />
  </ArticleSection>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps < Content.EmphasisBlockSlice > ([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

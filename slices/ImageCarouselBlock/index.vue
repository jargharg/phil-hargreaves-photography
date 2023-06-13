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

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps < Content.ImageCarouselBlockSlice > ([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

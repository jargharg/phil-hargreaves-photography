<template>
  <TextBoxWithImage
    class="bg-brand-cream"
    :image="slice.primary.image"
    :image-position="slice.primary.isImageOnRight ? 'right' : 'left'"
  >
    <TextBlockWithCta
      :heading="slice.primary.heading"
      :body="slice.primary.body"
      :cta-text="slice.primary.ctaLabel"
      :cta-link="$prismic.asLink(slice.primary.ctaLink)"
    />
  </TextBoxWithImage>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/named
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps < Content.FullscreenTextWithImageBlockSlice > ([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

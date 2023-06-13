<template>
  <TextBoxWithImage
    class="bg-brand-cream"
    :image="slice.primary.image"
    :cta-text="slice.primary.ctaLabel"
    :cta-link="$prismic.asLink(slice.primary.ctaLink)"
    :image-position="slice.primary.isImageOnRight ? 'right' : 'left'"
  >
    <Heading level="2" class="text-2xl mb-8">
      {{ slice.primary.heading }}
    </Heading>

    <BodyText>
      <prismic-rich-text :field="slice.primary.body" />
    </BodyText>
  </TextBoxWithImage>
</template>

<script setup lang="ts">
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

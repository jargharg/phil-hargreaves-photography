// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  emphasis_block: defineAsyncComponent(
    () => import("./EmphasisBlock/index.vue")
  ),
  fullscreen_text_with_image_block: defineAsyncComponent(
    () => import("./FullscreenTextWithImageBlock/index.vue")
  ),
  image_carousel_block: defineAsyncComponent(
    () => import("./ImageCarouselBlock/index.vue")
  ),
  quotes_block: defineAsyncComponent(() => import("./QuotesBlock/index.vue")),
  testimonial_block: defineAsyncComponent(
    () => import("./TestimonialBlock/index.vue")
  ),
  text_block: defineAsyncComponent(() => import("./TextBlock/index.vue")),
  wide_image_block: defineAsyncComponent(
    () => import("./WideImageBlock/index.vue")
  ),
});

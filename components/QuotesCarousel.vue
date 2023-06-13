<template>
  <div
    ref="elCarousel"
    class="quotes-carousel"
    :class="{ 'flex justify-center': quotes.length < 2 }"
  >
    <client-only>
      <Carousel v-if="quotes.length > 1" v-bind="settings">
        <Slide
          v-for="({ quote, attribution }, index) in quotes"
          :key="`slide-${index}`"
        >
          <QuoteBlock v-bind="{ quote, attribution }" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>

      <QuoteBlock
        v-else
        :quote="quotes[0].quote"
        :attribution="quotes[0].attribution"
      />

      <template #placeholder>
        <QuoteBlock
          :quote="quotes[0].quote"
          :attribution="quotes[0].attribution"
        />
      </template>
    </client-only>
  </div>
</template>

<script>
import gsap from 'gsap'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useA11yStore } from '~/stores/a11y'

export default {
  components: { Carousel, Pagination, Slide },

  props: {
    quotes: {
      type: Array,
      required: true,
    },
  },

  setup () {
    const a11yStore = useA11yStore()

    const elCarousel = ref(null)

    const settings = computed(() => ({
      autoplay: 7000,
      mouseDrag: false,
      pauseAutoplayOnHover: true,
      touchDrag: false,
      transition: a11yStore.reducedMotion ? 0 : 1000,
      wrapAround: true,
    }))

    onMounted(() => {
      const animation = gsap
        .timeline({
          scrollTrigger: {
            trigger: elCarousel.value,
            start: '10px bottom',
            end: 'bottom top',
            toggleActions: 'play none play none',
            once: true,
          },
          onComplete: () => {
            animation.kill()
          },
        })
        .from(elCarousel.value, {
          opacity: 0,
          ease: 'none',
          duration: 0.5,
        })
    })

    return { elCarousel, settings }
  },
}
</script>

<style lang="scss" scoped>
.quotes-carousel {
  @apply w-full bg-brand-grey text-brand-blue py-10 xl:py-20;

  :deep {
    .carousel {
      @apply text-left;
      --vc-pgn-width: 8px;
      --vc-pgn-height: 8px;
      --vc-pgn-border-radius: 100%;

      mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) theme("spacing.2"),
        rgba(0, 0, 0, 1) calc(100% - theme("spacing.2")),
        rgba(0, 0, 0, 0) 100%
      );

      @screen lg {
        mask-image: linear-gradient(
          to left,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.2) theme("spacing.1"),
          rgba(0, 0, 0, 1) theme("spacing.20"),
          rgba(0, 0, 0, 1) calc(100% - theme("spacing.20")),
          rgba(0, 0, 0, 0.2) calc(100% - theme("spacing.1")),
          rgba(0, 0, 0, 0) 100%
        );
      }

      &__slide {
        @apply items-start;
      }
    }
  }
}
</style>

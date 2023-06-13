<template>
  <div ref="elCarousel" class="quotes-carousel" :class="{'flex justify-center': quotes.length < 2}">
    <client-only>
      <Carousel v-if="quotes.length > 1" v-bind="settings">
        <Slide
          v-for="({ quote, attribution }, index) in quotes"
          :key="`slide-${index}`"
        >
          <blockquote class="quotes-carousel__slide">
            <prismic-rich-text :field="quote" class="quotes-carousel__quote" />
            <div class="quotes-carousel__attribution">
              — {{ attribution }}
            </div>
          </blockquote>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>

      <blockquote v-else class="quotes-carousel__slide">
        <prismic-rich-text
          :field="quotes[0].quote"
          class="quotes-carousel__quote"
        />
        <div class="quotes-carousel__attribution">
          — {{ quotes[0].attribution }}
        </div>
      </blockquote>

      <template #placeholder>
        <blockquote class="quotes-carousel__slide">
          <prismic-rich-text
            :field="quotes[0].quote"
            class="quotes-carousel__quote"
          />
          <div class="quotes-carousel__attribution">
            — {{ quotes[0].attribution }}
          </div>
        </blockquote>
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

  &__slide {
    @apply px-8 lg:px-20 xl:px-0 h-full flex flex-col justify-center;
  }

  &__quote {
    @apply text-lg lg:text-xl font-serif-small italic leading-[1.2] lg:max-w-4xl;
  }

  &__attribution {
    @apply text-xs sm:text-sm md:text-base mt-2.5 uppercase tracking-widest lg:max-w-4xl;
  }

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

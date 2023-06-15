<template>
  <div class="image-carousel">
    <client-only>
      <Carousel ref="elCarousel" v-bind="settings">
        <template
          v-for="({ image, caption }, index) in items"
          :key="`slide-${index}`"
        >
          <Slide v-if="image?.url">
            <div class="flex flex-col w-full pr-2 !h-[70vh] overflow-hidden">
              <StSizedImage
                :src="image.url"
                :alt="image.alt"
                :dimensions="image.dimensions"
                sizes="sm:95vw md:95vw lg:65vw xl:65vw 2xl:65vw"
              />

              <p v-if="caption" class="image-carousel__caption container">
                {{ caption }}
              </p>
            </div>
          </Slide>
        </template>
      </Carousel>

      <button
        class="image-carousel__nav-button image-carousel__nav-button--prev group"
        @click="onClickPrev"
      >
        <span class="sr-only group-focus-visible:group-focus-within:not-sr-only">See previous image</span>
      </button>

      <button
        class="image-carousel__nav-button image-carousel__nav-button--next group"
        @click="onClickNext"
      >
        <span class="sr-only group-focus-visible:group-focus-within:not-sr-only">See next image</span>
      </button>

      <template #placeholder>
        <div class="w-[91%] md:w-2/3 flex flex-col pr-2">
          <StSizedImage
            :src="items[0].image.url"
            :alt="items[0].image.alt"
            :dimensions="items[0].image.dimensions"
            sizes="sm:95vw md:95vw lg:65vw xl:65vw 2xl:65vw"
          />

          <p
            v-if="items[0].caption"
            class="image-carousel__caption !opacity-100 container"
          >
            {{ items[0].caption }}
          </p>
        </div>
      </template>
    </client-only>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useA11yStore } from '~/stores/a11y'

export default {
  components: { Carousel, Slide },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup (props) {
    const a11yStore = useA11yStore()

    const elCarousel = ref(null)

    const settings = computed(() => ({
      itemsToShow: 1.1,
      mouseDrag: true,
      snapAlign: 'start',
      touchDrag: true,
      transition: a11yStore.reducedMotion ? 0 : 500,
      wrapAround: true,
      breakpoints: {
        768: {
          itemsToShow: 1.5,
        },
        1900: {
          itemsToShow: props.items.length > 2 ? 2.1 : 1.5,
        },
      },
    }))

    const onClickNext = () => {
      elCarousel.value.next()
    }

    const onClickPrev = () => {
      elCarousel.value.prev()
    }

    return { elCarousel, onClickNext, onClickPrev, settings }
  },
}
</script>

<style lang="scss" scoped>
.image-carousel {
  @apply relative h-[70%];
  $root: &;

  &__caption {
    @apply mt-2 text-xs text-left opacity-0 transition-opacity duration-500 ease-linear;
  }

  &__nav-button {
    @apply absolute inset-y-0 w-1/3 z-20 text-white flex items-start justify-center pt-10;
    @apply invisible;

    @media (hover: hover) {
      @apply visible;
    }

    &--prev {
      @apply left-0 cursor-w-resize;
    }

    &--next {
      @apply right-0 cursor-e-resize;
    }
  }

  :deep {
    .carousel {
      @apply text-left;

      &__viewport {
        @apply overflow-y-auto;
      }

      &__slide {
        @apply items-start;

        &--active {
          #{$root}__caption {
            @apply opacity-100;
          }
        }
      }

      &__pagination {
        @apply pl-2.5 lg:pl-10 justify-start;
      }
    }
  }
}
</style>

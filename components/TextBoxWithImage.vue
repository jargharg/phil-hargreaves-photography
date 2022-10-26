<template>
  <section ref="elSection" class="h-screen w-full">
    <div
      class="relative flex flex-col md:flex-row"
      style="height: -webkit-fill-available;"
      :class="{ 'md:flex-row-reverse': imagePosition === 'right' }"
    >
      <!-- @TODO use nuxt-image, sized image -->
      <figure ref="elImage" class="w-full h-full flex-1">
        <img v-bind="image" class="w-full h-full object-cover">
      </figure>

      <div class="py-8 md:py-16 h-full flex-1 items-center">
        <div
          ref="elText"
          class="font-light lg:text-lg mx-auto max-w-2xl px-16"
        >
          <slot />

          <nuxt-link
            v-if="hasCta"
            ref="elCta"
            :to="ctaLink"
            class="
              block
                w-full
                text-right
                mt-8
                md:mt-16
                pr-6
                font-normal
                uppercase
                tracking-widest
                hover:underline
              "
          >
            {{ ctaText }} &rarr;
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    ctaText: {
      type: String,
      default: 'Read more',
    },

    ctaLink: {
      type: String,
      default: '',
    },

    imagePosition: {
      type: String,
      default: 'left',
    },
  },

  setup (props) {
    const elCta = ref(null)
    const elImage = ref(null)
    const elSection = ref(null)
    const elText = ref(null)
    const hasCta = computed(() => props.ctaLink && props.ctaText)

    return { elCta, elImage, elSection, elText, hasCta }
  },
}
</script>

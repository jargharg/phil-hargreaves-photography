<template>
  <section ref="elSection" class="bg-white w-full mt-36 mb-16 md:my-36">
    <div
      class="container relative flex gap-5 flex-col md:flex-row"
      :class="{ 'md:flex-row-reverse': imagePosition === 'right' }"
    >
      <figure
        ref="elImage"
        class="w-2/3 md:w-full mx-auto -mt-24 md:-my-8 flex-1"
      >
        <img v-bind="image" class="w-full h-full object-cover">
      </figure>

      <div class="pt-4 pb-8 md:py-16 flex-1" :class="{ 'md:pb-8': hasCta }">
        <div
          class="flex flex-col h-full justify-center"
          :class="{ 'justify-between': hasCta }"
        >
          <div
            ref="elText"
            class="font-light lg:text-lg sm:px-[8.45%] xl:px-[16.9%]"
          >
            <slot />
          </div>

          <nuxt-link
            v-if="hasCta"
            ref="elCta"
            :to="ctaLink"
            class="
              mt-6
              md:mt-12 md:pr-6
              self-end
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
import gsap from 'gsap'
import { computed, onMounted, onUnmounted } from 'vue'

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

    let tl

    onMounted(() => {
      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: elSection.value,
            scrub: 0.2,
            start: 'top bottom',
            end: 'bottom top',
          },
          defaults: { ease: 'linear' },
        })
        .from(elSection.value, { opacity: 0.8 })
        .from(elImage.value, { y: 50 }, '<')
        // .from(elText.value, { y: -50 }, '<')
        .to(elImage.value, { y: -50 })
    })

    onUnmounted(() => {
      tl?.kill()
    })

    return { elCta, elImage, elSection, elText, hasCta }
  },
}
</script>

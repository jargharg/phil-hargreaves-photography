<template>
  <section ref="elSection" class="bg-white w-full my-36">
    <div
      class="container relative flex gap-5"
      :class="{ 'flex-row-reverse': imagePosition === 'right' }"
    >
      <figure ref="elImage" class="w-full -my-8 flex-1">
        <img v-bind="image" class="w-full h-full object-cover">
      </figure>

      <div class="py-16 flex-1" :class="{ 'pb-4': hasCta }">
        <div class="flex flex-col h-full justify-center" :class="{ 'justify-between': hasCta }">
          <div ref="elText" class="text-lg font-light px-[16.9%]">
            <slot />
          </div>

          <nuxt-link
            v-if="hasCta"
            ref="elCta"
            :to="ctaLink"
            class="
              mt-12
              pr-6
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
            scrub: 1,
            start: 'top bottom',
            end: 'top center',
          },
        })
        .from(elSection.value, {
          opacity: 0,
          ease: 'linear',
        })
        .from(elImage.value, {
          y: 50,
        }, '<')
        .from(elText.value, {
          opacity: 0,
          y: -50,
        }, '<')

      if (hasCta.value) {
        tl.from(elCta.value.$el, {
          opacity: 0,
          x: -10,
          ease: 'sine.inOut',
        }, '<')
      }
    })

    onUnmounted(() => {
      tl?.kill()
    })

    return { elCta, elImage, elSection, elText, hasCta }
  },
}
</script>

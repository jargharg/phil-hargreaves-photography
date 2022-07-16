<template>
  <div ref="elContainer" class="w-full flex my-16 md:my-36 justify-center relative">
    <div class="absolute w-full top-1/2 left-0 border-b border-brand-primary" />
    <div ref="elCallout" class="bg-brand-primary text-brand-secondary max-w-xl w-auto px-16 py-8 text-center">
      <slot />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

export default {
  props: {
    ctaText: {
      type: String,
      default: 'Read more',
    },

    ctaLink: {
      type: String,
      default: '',
    },
  },

  setup () {
    const elContainer = ref(null)
    const elCallout = ref(null)

    let tl

    onMounted(() => {
      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: elContainer.value,
            start: '10vh bottom',
            end: 'center center',
            scrub: 0.2,
          },
        })
        .from(elContainer.value, {
          opacity: 0,
        })
        .from(elCallout.value, {
          y: 20,
        }, '<')
    })

    onUnmounted(() => {
      tl?.kill()
    })

    return { elContainer, elCallout }
  },
}
</script>

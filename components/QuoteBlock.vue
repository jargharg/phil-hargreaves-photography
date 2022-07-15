<template>
  <aside ref="elContainer" class="max-w-4xl mx-auto px-10">
    <p ref="elQuote" class="text-4xl font-serif italic mb-4">
      <slot />
    </p>

    <p
      v-if="attribution"
      ref="elAttribution"
      class="uppercase tracking-widest font-light"
    >
      — {{ attribution }}
    </p>
  </aside>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

export default {
  props: {
    attribution: {
      type: String,
      default: '',
    },
  },

  setup () {
    const elContainer = ref(null)
    const elQuote = ref(null)
    const elAttribution = ref(null)

    let tl

    onMounted(() => {
      tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: elContainer.value,
            start: '10vh bottom',
            end: 'center center',
            scrub: 0.5,
          },
        })
        .from(elQuote.value, {
          opacity: 0,
        })
        .from(elAttribution.value, {
          opacity: 0,
          x: -10,
        }, '<')
    })

    onUnmounted(() => {
      tl?.kill()
    })

    return { elAttribution, elContainer, elQuote }
  },
}
</script>

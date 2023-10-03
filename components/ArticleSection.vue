<template>
  <section
    ref="elSection"
    :class="{
      container: withContainer,
      'my-10 md:my-16': withMargin,
    }"
  >
    <slot />
  </section>
</template>

<script>
import gsap from 'gsap'
import sleep from '~/helpers/sleep'
import { DURATION_IN_MS } from '~/helpers/defaultTransition'

export default {
  props: {
    withContainer: {
      type: Boolean,
      default: true,
    },

    withMargin: {
      type: Boolean,
      default: true,
    },

    withEnterAnimation: {
      type: Boolean,
      default: true,
    },
  },

  setup (props) {
    const elSection = ref(null)

    let enterAnimation

    onMounted(async () => {
      if (!props.withEnterAnimation) {
        return
      }

      await nextTick()

      gsap.set(elSection.value, { opacity: 0 })

      await sleep(DURATION_IN_MS)

      enterAnimation = gsap
        .timeline({
          scrollTrigger: {
            trigger: elSection.value,
            start: '10px bottom',
            end: 'bottom top',
            toggleActions: 'play none play none',
            once: true,
          },
          onComplete: () => {
            enterAnimation.kill()
          },
        })
        .to(elSection.value, {
          opacity: 1,
          ease: 'none',
          duration: 0.5,
        })
    })

    onUnmounted(() => {
      enterAnimation?.kill()
    })

    return { elSection }
  },
}
</script>

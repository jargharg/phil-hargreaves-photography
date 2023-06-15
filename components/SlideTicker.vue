<template>
  <div
    class="overflow-clip h-[40vh] max-h-[300px]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div ref="elContainer" class="flex flex-row gap-5 p-5 h-full">
      <div ref="elPrimaryRow" class="flex flex-row gap-5 h-full">
        <SizedImage
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.url"
          :alt="slide.alt"
          :dimensions="slide.dimensions"
          class="rounded-3xl h-full"
          sizes="sm:50vw md:50vw lg:50vw xl:50vw 2xl:50vw"
        />
      </div>

      <div class="flex flex-row gap-5 h-full">
        <SizedImage
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.url"
          :alt="slide.alt"
          :dimensions="slide.dimensions"
          class="rounded-3xl"
          sizes="sm:50vw md:50vw lg:50vw xl:50vw 2xl:50vw"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import sleep from '~/helpers/sleep'
import { useGlobalsStore } from '~/stores/globals'
import { DURATION_IN_MS } from '~/composables/defaultTransition'

export default {
  setup () {
    const globalsStore = useGlobalsStore()
    const slides = toRef(globalsStore, 'slides')

    const elContainer = ref(null)
    const elPrimaryRow = ref(null)

    let animation

    onMounted(async () => {
      await nextTick()
      await sleep(DURATION_IN_MS)

      animation = gsap
        .timeline({ repeat: -1, defaults: { ease: 'none' } })
        .fromTo(
          elContainer.value,
          { x: 0 },
          { x: -elPrimaryRow.value.offsetWidth - 20, duration: 60 },
        )
    })

    onUnmounted(() => {
      animation?.kill()
    })

    const onMouseEnter = () => {
      gsap.to(animation, { timeScale: 0, duration: 0.5 })
    }

    const onMouseLeave = () => {
      gsap.to(animation, { timeScale: 1, duration: 0.5 })
    }

    return { slides, elContainer, elPrimaryRow, onMouseEnter, onMouseLeave }
  },
}
</script>

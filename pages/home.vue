<template>
  <div ref="container" class="mx-auto container">
    <div class="h-[105vh]">
      <img class="pb-52 h-full object-contain mx-auto" src="assets/41_PHOTOS_Phil_Hargreaves_06.jpeg" alt="">
    </div>
    <div class="h-[105vh]">
      <img loading="lazy" class="pb-52 h-full object-contain mx-auto" src="assets/41_PHOTOS_Phil_Hargreaves_12.jpeg" alt="">
    </div>
    <div class="h-[105vh]">
      <img loading="lazy" class="pb-52 h-full object-contain mx-auto" src="assets/41_PHOTOS_Phil_Hargreaves_17.jpeg" alt="">
    </div>
    <div class="h-[105vh]">
      <img loading="lazy" class="pb-52 h-full object-contain mx-auto" src="assets/41_PHOTOS_Phil_Hargreaves_06.jpeg" alt="">
    </div>
    <div class="h-[105vh]">
      <img loading="lazy" class="pb-52 h-full object-contain mx-auto" src="assets/41_PHOTOS_Phil_Hargreaves_12.jpeg" alt="">
    </div>
    <div class="h-[105vh]">
      <img loading="lazy" class="pb-52 h-full object-contain mx-auto" src="assets/41_PHOTOS_Phil_Hargreaves_17.jpeg" alt="">
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted, onUnmounted } from 'vue'

export default {
  setup () {
    const container = ref(null)
    const timelines = []

    onMounted(() => {
      console.log('onmounted')

      const images = container.value.querySelectorAll('img')

      images.forEach((image) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            scrub: 1,
            start: 'top bottom',
            end: 'top center',
          },
        }).from(image, {
          opacity: 0,
          ease: 'linear',
        })
        timelines.push(timeline)
      })
    })

    onUnmounted(() => {
      timelines.forEach((timeline) => {
        timeline.kill()
      })
    })

    return { container }
  },
}
</script>

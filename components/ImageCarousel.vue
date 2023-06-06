<template>
  <section class="h-screen flex flex-col items-center px-5 p-5">
    <div class="pb-5 text-center">
      <LogoLarge class="h-24 max-w-2xl z-50 text-brand-blue" />
    </div>

    <div class="flex-1 relative w-full overflow-hidden">
      <div
        v-for="({ image }, index) in [...images, images[0]]"
        :key="index"
        ref="elImages"
        class="absolute -inset-x-10 -inset-y-1 -translate-x-8"
      >
        <SizedImage
          :src="image.url"
          :alt="image.alt"
          sizes="sm:220vw md:220vw lg:220vw xl:220vw 2xl:220vw"
          :lazy="index > 0"
        />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  setup () {
    const elImages = ref([])
    let tl

    onMounted(async () => {
      const fade = 2.5
      const slide = 10
      const x = 32
      const y = 4

      tl = await gsap.fromTo(
        elImages.value[elImages.value.length - 1],
        { x: -x, y: -y },
        { x: 0, y: 0, duration: slide / 2, ease: 'none' },
      )

      tl = gsap.timeline({ repeat: -1, defaults: { ease: 'none' } })

      elImages.value.forEach((el, index) => {
        const isFirstEl = index === 0
        const isLastEl = index === elImages.value.length - 1

        if (isFirstEl) {
          tl.fromTo(el, { x: 0, y: 0 }, { x, y, duration: slide / 2 })
        } else {
          tl.fromTo(
            el,
            { opacity: 0 },
            { opacity: 1, duration: fade },
            `-=${fade}`,
          )

          if (isLastEl) {
            tl.fromTo(el, { x: -x, y: -y }, { x: 0, y: 0, duration: slide / 2 }, '<').set(
              el,
              { opacity: 0 },
            )
          } else {
            tl.fromTo(el, { x: -x, y: -y }, { x, y, duration: slide }, '<')
          }
        }
      })
    })

    onUnmounted(() => {
      tl?.kill()
    })

    return { elImages }
  },
}
</script>

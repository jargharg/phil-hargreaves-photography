<template>
  <section class="h-screen w-full">
    <div
      v-for="({ image }, index) in images"
      :key="index"
      ref="elImages"
      class="absolute inset-y-0 -inset-x-10"
    >
      <SizedImage
        :src="image.url"
        :alt="image.alt"
        sizes="sm:110vw md:110vw lg:110vw xl:110vw 2xl:110vw"
        :lazy="index > 0"
      />
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

    onMounted(() => {
      tl = gsap.timeline({ repeat: -1 })

      elImages.value.forEach((el) => {
        tl.from(el, { opacity: 0, duration: 3 }, '-=3')
        tl.fromTo(el, { x: 40 }, { x: -40, duration: 10, ease: 'linear' }, '<')
      })
    })

    onUnmounted(() => {
      tl?.kill()
    })

    return { elImages }
  },
}
</script>

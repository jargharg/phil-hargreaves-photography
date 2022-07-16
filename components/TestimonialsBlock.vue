<template>
  <section ref="elSection" class="mt-36 mb-16 md:my-36 relative">
    <div class="absolute w-full top-1/2 left-0 border-b border-brand-primary" />

    <div class="max-w-6xl mx-auto px-10 md:px-24">
      <div
        class="relative bg-white flex gap-5 flex-col md:flex-row"
        :class="{ 'md:flex-row-reverse': imagePosition === 'right' }"
      >
        <div class="absolute top-full left-0 w-1/2 text-center text-lg tracking-widest pt-2">
          &larr;&emsp;1 / 12&emsp;&rarr;
        </div>

        <figure
          ref="elImage"
          class="w-2/3 md:w-full mx-auto -mt-24 md:-my-8 md:mr-5 flex-1"
        >
          <img src="/placeholder-images/testimonial-portrait.jpg" alt="Black-and-white picture of a dalmatian" class="w-full h-full object-cover">
        </figure>

        <div class="pt-4 pb-8 md:py-16 flex-1" :class="{ 'md:pb-8': hasCta }">
          <div
            class="flex flex-col h-full justify-center"
            :class="{ 'justify-between': hasCta }"
          >
            <div
              ref="elText"
              class="font-light lg:text-lg px-4 sm:px-[8.45%] xl:px-[16.9%]"
            >
              <p>
                “Donec metus mi, tristique a tincidunt eget, suscipit sit amet ipsum. Nullam eu malesuada lectus, ut aliquam nibh. Etiam eu euismod enim, quis consequat velit. In dictum eu tortor et semper.
              </p>
              <p>
                Maecenas vulputate facilisis mauris eu consequat. Morbi sit amet accumsan sem. Proin ut eros mi. Aliquam eu cursus elit, et pellentesque nibh. Duis quis venenatis libero.”
              </p>
              <p class="text-sm md:text-base uppercase tracking-widest font-light mt-2 md:mt-4">
                — Mark Weetabix
              </p>
            </div>
          </div>
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
    imagePosition: {
      type: String,
      default: 'right',
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

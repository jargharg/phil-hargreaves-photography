<template>
  <section ref="elSection" class="min-h-screen w-full">
    <div
      class="relative h-full flex flex-col md:flex-row"
      :class="{ 'md:flex-row-reverse': imagePosition === 'right' }"
    >
      <figure
        ref="elImage"
        class="flex-1"
      >
        <img src="/placeholder-images/testimonial-portrait.jpg" alt="Black-and-white picture of a dalmatian" class="w-full h-full object-cover">
      </figure>

      <div class="py-8 md:py-16 flex-1 relative">
        <div
          class="flex flex-col h-full justify-center pb-12"
          :class="{ 'justify-between': hasCta }"
        >
          <div
            ref="elText"
            class="font-light lg:text-lg mx-auto max-w-2xl px-16"
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

        <div class="absolute bottom-0 left-0 w-full text-center text-lg tracking-widest pb-8">
          &larr;&emsp;1 / 12&emsp;&rarr;
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'

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

    return { elCta, elImage, elSection, elText, hasCta }
  },
}
</script>

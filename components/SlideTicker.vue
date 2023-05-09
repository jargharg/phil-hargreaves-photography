<template>
  <div class="flex flex-row gap-5 p-5 overflow-scroll h-[40vh]">
    <!-- <SizedImage
      v-for="(slide, index) in slides"
      :key="index"
      :src="slide.url"
      :alt="slide.alt"
      :dimensions="{ height: 1, width: 1 }"
    /> -->

    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="aspect-[5/4] relative"
    >
      <img :src="slide.url" :alt="slide.alt" class="object-cover absolute w-full h-full rounded-3xl ">
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    const slides = [1, 2, 3, 4, 5, 6, 7].map(num => ({
      url: `/placeholder-images/dog${num}.jpeg`,
      alt: 'dog',
    }))

    return { slides }
  },
}
</script>

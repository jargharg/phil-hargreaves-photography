<template>
  <section ref="elSection" class="tbwi max-w-container mx-auto">
    <div
      class="tbwi__wrapper"
      :class="{ 'tbwi__wrapper--flip': imagePosition === 'right' }"
    >
      <div class="tbwi__image">
        <div class="hidden md:block h-full">
          <SizedImage
            v-if="image?.url"
            :src="image.url"
            :alt="image.alt"
            sizes="sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw"
          />
        </div>

        <div v-if="image?.SmallScreen?.url" class="md:hidden h-full">
          <SizedImage
            :src="image.SmallScreen.url"
            :alt="image.SmallScreen.alt"
            sizes="sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw"
          />
        </div>
      </div>

      <div class="py-8 md:py-16 h-full md:flex-1 flex items-center">
        <div class="px-8 md:px-16">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },

    imagePosition: {
      type: String,
      default: 'left',
    },
  },

  setup (props) {
    const elImage = ref(null)
    const elSection = ref(null)
    const elText = ref(null)

    return { elImage, elSection, elText }
  },
}
</script>

<style lang="scss" scoped>
.tbwi {
  @apply lg:h-screen w-full;

  &__wrapper {
    @apply relative flex flex-col md:flex-row md:min-h-[50vh];

    @screen lg {
      height: -webkit-fill-available;
    }

    &--flip {
      @apply md:flex-row-reverse;
    }
  }

  &__image {
    @apply md:flex-1 aspect-square sm:aspect-[4/3] md:aspect-auto overflow-hidden;
  }
}
</style>

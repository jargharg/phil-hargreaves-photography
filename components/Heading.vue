<template>
  <component
    :is="component"
    class="heading"
    :class="{ 'heading--small': small }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    level: {
      type: [Number, String],
      default: 1,
    },

    small: {
      type: Boolean,
      default: false,
    },
  },

  setup (props) {
    const component = computed(() => `h${props.level}`)
    return { component }
  },
}
</script>

<style lang="scss" scoped>
.heading {
  @apply font-serif font-bold leading-none;
}
</style>

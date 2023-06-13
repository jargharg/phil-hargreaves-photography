<template>
  <component :is="component" v-bind="{ ...$attrs, ...$props }" />
</template>

<script>
export default {
  props: {
    variation: {
      type: String,
      default: 'default',
    },
  },

  setup (props) {
    const componentsMap = {
      default: resolveComponent('TextBlockDefault'),
      textBlockWithCta: resolveComponent('TextBlockWithCta'),
    }

    const component = computed(() => {
      if (componentsMap[props.variation]) {
        return componentsMap[props.variation]
      }
      throw new Error(`Unknown variation: ${props.variation}`)
    })

    return { component }
  },
}
</script>

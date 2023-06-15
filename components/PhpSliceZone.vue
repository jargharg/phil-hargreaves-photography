<template>
  <div class="slice-zone">
    <slice-zone
      v-if="slices.length"
      :slices="slices"
      :components="components"
    />
  </div>
</template>

<script>
import { components } from '~/slices'

export default {
  props: {
    slices: {
      type: Array,
      default: () => [],
    },
  },

  setup () {
    return { components }
  },
}
</script>

<style lang="scss" scoped>
.slice-zone {
  @apply bg-brand-cream;

  :deep section:first-of-type {
    margin-top: 0 !important;
  }
}
</style>

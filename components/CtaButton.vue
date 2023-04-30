<template>
  <component
    :is="componentType"
    v-if="$slots.default"
    class="cta-button"
    :class="classModifiers"
    v-bind="boundAttrs"
    target="_blank"
    @click="$emit('click')"
  >
    <slot /> <span>&nbsp;&rarr;</span>
  </component>
</template>

<script>
export default {
  name: 'CtaButton',
  props: {
    border: { type: Boolean, default: false },
  },
  emits: ['click'],
  setup (props, { attrs }) {
    const componentType = computed(() => {
      if (attrs.to) {
        return resolveComponent('NuxtLink')
      }
      if (attrs.href) {
        return 'a'
      }
      if (attrs.dummy) {
        return 'div'
      }
      return 'button'
    })
    const boundAttrs = computed(() => {
      const boundAttrs = { ...(attrs ?? {}) }
      return boundAttrs
    })
    const classModifiers = computed(() => {
      return [
        {
          'cta-button--border': props.border,
        },
      ]
    })
    return { boundAttrs, componentType, classModifiers }
  },
}
</script>
<style lang="scss" scoped>
.cta-button {
  @apply text-center leading-none uppercase text-sm-mobile md:text-sm tracking-[0.2em] z-10;
  @apply flex items-center;
  @apply transition-opacity;

  &:not(:disabled) {
    @apply cursor-pointer;

    &:hover {
      @apply opacity-75;
    }
  }
  &--border {
    @apply border border-brand-blue px-12 py-4 rounded-full;
  }
}
</style>

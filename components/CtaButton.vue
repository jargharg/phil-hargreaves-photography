<template>
  <component
    :is="componentType"
    v-if="$slots.default"
    class="cta-button"
    :class="classModifiers"
    v-bind="boundAttrs"
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
        return resolveComponent('PhpNuxtLink')
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

      if (attrs.href) {
        boundAttrs.target = '_blank'
      }

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
  @apply flex text-center leading-none uppercase text-sm-mobile lg:text-sm tracking-[0.15em] lg:tracking-[0.2em] z-10;
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

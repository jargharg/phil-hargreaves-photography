<template>
  <component
    :is="componentType"
    v-if="$slots.default"
    class="cta-button"
    :class="classModifiers"
    v-bind="boundAttrs"
    @click="$emit('click')"
  >
    <slot />
    <svg
      v-if="withArrow"
      class="cta-button__arrow"
      viewBox="0 0 11 6"
      stroke="currentColor"
      stroke-width="0.5"
      fill="currentColor"
    >
      <path class="cta-button__arrow__line" d="M0,3H5" />
      <path class="cta-button__arrow__end" d="M5,2L6,3L5,4Z" />
    </svg>
  </component>
</template>

<script>
export default {
  name: 'CtaButton',

  props: {
    border: { type: Boolean, default: false },
    withArrow: { type: Boolean, default: true },
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
  $root: &;
  @apply flex items-center z-10;
  @apply text-center leading-none uppercase text-sm-mobile lg:text-sm tracking-[0.15em] lg:tracking-[0.2em];

  &:not(:disabled) {
    @apply cursor-pointer;

    &:hover,
    &:focus,
    &:focus-within {
      #{$root}__arrow {
        &__line {
          @apply scale-x-[1.8];
        }

        &__end {
          @apply translate-x-1;
        }
      }
    }
  }

  &--border {
    @apply border border-brand-blue px-12 py-4 rounded-full;
  }

  &__arrow {
    @apply ml-1 h-4;

    &__end, &__line {
      @apply transition-transform;
    }
  }
}
</style>

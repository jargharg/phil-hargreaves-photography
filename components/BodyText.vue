<template>
  <div
    class="-tracking-[0.01em] font-light"
    :class="{
      'text-base': size === 'base',
      'text-base md:text-lg md:leading-[1.2] font-extralight': size === 'lg',
      'text-lg md:text-xl leading-relaxed md:leading-normal': size === 'xl',
      'prose max-w-none': prose,
      'leading-7': !prose
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BodyText',

  props: {
    prose: {
      type: Boolean,
      required: false,
      default: true,
    },

    size: {
      type: String,
      required: false,
      default: 'base',
    },
  },
}
</script>

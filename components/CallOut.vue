<template>
  <div class="w-full flex my-36 justify-center relative">
    <div class="absolute w-full top-1/2 left-0 border-b border-brand-primary" />
    <div class="bg-brand-primary text-brand-secondary max-w-xl w-auto px-16 py-8 text-center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ctaText: {
      type: String,
      default: 'Read more',
    },

    ctaLink: {
      type: String,
      default: '',
    },
  },
}
</script>

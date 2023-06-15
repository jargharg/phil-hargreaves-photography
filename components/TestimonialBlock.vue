<template>
  <blockquote class="max-w-3xl flex flex-col">
    <prismic-rich-text
      v-if="$prismic.asText(testimonial)"
      class="text-sm md:text-base xl:text-[22px] leading-[1.3]"
      :field="testimonial"
    />

    <div
      class="text-xs sm:text-sm mt-2 md:mt-3 uppercase tracking-widest"
    >
      — {{ attribution }}
    </div>
  </blockquote>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Array,
      required: true,
    },

    attribution: {
      type: String,
      default: null,
    },
  },
}
</script>

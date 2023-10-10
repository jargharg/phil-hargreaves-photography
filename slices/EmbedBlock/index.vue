<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    Placeholder component for embed_block (variation: {{ slice.variation }})
    Slices
  </section>
</template>

<script>
export default {
  name: 'EmbedBlockSlice',

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

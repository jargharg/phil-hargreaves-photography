<template>
  <div class="max-w-xl">
    <Heading v-if="heading" level="2" class="text-lg md:text-xl mb-8">
      {{ heading }}
    </Heading>

    <BodyText>
      <prismic-rich-text :field="body" />
    </BodyText>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    },

    body: {
      type: Array,
      required: true,
    },
  },
}
</script>

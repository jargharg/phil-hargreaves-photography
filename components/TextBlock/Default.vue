<template>
  <div class="max-w-xl flex flex-col gap-8">
    <Heading v-if="heading" level="2" class="text-lg md:text-xl">
      {{ heading }}
    </Heading>

    <BodyText v-if="$prismic.asText(body)">
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

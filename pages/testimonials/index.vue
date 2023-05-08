<template>
  <article v-if="doc" class="min-h-screen pt-20">
    <Heading level="1">
      Testimonials
    </Heading>
  </article>
</template>

<script>
export default {
  setup () {
    const doc = true
    return { doc }
  },
}
</script>

<template>
  <article v-if="doc" class="min-h-screen pt-20">
    <Heading level="1">
      Gallery
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

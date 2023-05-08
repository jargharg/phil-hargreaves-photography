<template>
  <article v-if="doc" class="min-h-screen pt-20">
    <Heading level="1">
      Legal
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

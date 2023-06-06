<template>
  <article>
    <PHPSliceZone :slices="doc.slices2" />
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/composables/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('about')

    return { doc }
  },
}
</script>

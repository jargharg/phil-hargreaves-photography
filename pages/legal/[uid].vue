<template>
  <article class="bg-brand-cream pt-36 pb-20">
    <div class="container">
      <hr class="border-brand-blue border-opacity-50 mb-4 w-10 md:w-20">

      <Heading v-if="doc.title" class="text-xl md:text-2xl mb-8">
        {{ doc.title }}
      </Heading>

      <BodyText>
        <prismic-rich-text :field="doc.body" class="max-w-2xl" />
      </BodyText>
    </div>
  </article>
</template>

<script>
import { getDocumentFromPrismic } from '~/helpers/getDocumentFromPrismic'

export default {
  async setup () {
    const doc = await getDocumentFromPrismic('legal', { repeatable: true })

    definePageMeta({
      colorMode: 'blue',
    })

    return { doc }
  },
}
</script>

<template>
  <section class="hero-section">
    <slot />

    <div class="hero-section__details">
      <div class="max-w-lg">
        <Heading class="mb-2 text-2xl xl:text-3xl">
          {{ doc.title }}
        </Heading>

        <div class="prose text-base lg:text-[24px] leading-[1.2]">
          <prismic-rich-text :field="doc.heroTagline" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero-section {
  @apply h-screen relative;

  &__details {
    @apply absolute container bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2;
    color: var(--hero-text-color);
  }
}
</style>

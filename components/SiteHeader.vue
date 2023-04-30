<template>
  <header ref="header" class="header">
    <NuxtLink to="/" class="header__logo__wrapper" aria-label="Go to homepage">
      <LogoLarge ref="logo" class="header__logo" />
    </NuxtLink>

    <MenuButton class="header__menu" />
  </header>
</template>

<script>
import gsap from 'gsap'

export default {
  setup () {
    const header = ref(null)
    const logo = ref(null)

    return { header, logo }
  },
}
</script>

<style lang="scss" scoped>
.header {
  @apply p-6 text-center fixed w-full top-0 left-0 transition-opacity z-50 flex justify-between items-start text-brand-cream;

  &__logo {
    @apply block w-full;

    &__wrapper {
      @apply max-w-xs w-full hover:opacity-80 focus:opacity-80;
    }
  }
}
</style>

<template>
  <header ref="header" class="header opacity-0">
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
  // background: linear-gradient(
  //   to bottom,
  //   hsla(228, 100%, 0.98%, 0.69) 0%,
  //   hsla(228, 100%, 0.98%, 0.681) 8.1%,
  //   hsla(228, 100%, 0.98%, 0.656) 15.5%,
  //   hsla(228, 100%, 0.98%, 0.618) 22.5%,
  //   hsla(228, 100%, 0.98%, 0.569) 29%,
  //   hsla(228, 100%, 0.98%, 0.511) 35.3%,
  //   hsla(228, 100%, 0.98%, 0.447) 41.2%,
  //   hsla(228, 100%, 0.98%, 0.379) 47.1%,
  //   hsla(228, 100%, 0.98%, 0.311) 52.9%,
  //   hsla(228, 100%, 0.98%, 0.243) 58.8%,
  //   hsla(228, 100%, 0.98%, 0.179) 64.7%,
  //   hsla(228, 100%, 0.98%, 0.121) 71%,
  //   hsla(228, 100%, 0.98%, 0.072) 77.5%,
  //   hsla(228, 100%, 0.98%, 0.034) 84.5%,
  //   hsla(228, 100%, 0.98%, 0.009) 91.9%,
  //   hsla(228, 100%, 0.98%, 0) 100%
  // );

  &__logo {
    @apply block w-full;

    &__wrapper {
      @apply max-w-xs w-full hover:opacity-80 focus:opacity-80;
    }
  }
}
</style>

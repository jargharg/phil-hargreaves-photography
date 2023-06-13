<template>
  <div>
    <NuxtLink
      to="/"
      aria-label="Go to homepage"
      class="absolute top-2 md:top-4 left-4 md:left-6 pr-20 w-full max-w-lg z-50"
    >
      <LogoLarge class="w-full text-brand-cream" />
    </NuxtLink>

    <header class="header">
      <MenuButton
        class="header__menu"
        :is-open="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      />
    </header>

    <SiteHeaderMenu :is-open="isMenuOpen" class="pointer-events-auto" />
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useHeaderStore } from '~/stores/header'
import { useA11yStore } from '~/stores/a11y'

export default {
  setup () {
    const elLogoSmall = ref(null)

    const a11yStore = useA11yStore()

    const headerStore = useHeaderStore()
    const isMenuOpen = toRef(headerStore, 'isMenuOpen')

    const route = useRoute()

    const closeOnEscapePress = ({ key }) => {
      if (key === 'Escape') {
        isMenuOpen.value = false
      }
    }

    watch(isMenuOpen, () => {
      if (isMenuOpen) {
        document.addEventListener('keydown', closeOnEscapePress)
      } else {
        document.removeEventListener('keydown', closeOnEscapePress)
      }
    })

    watch(
      () => route.path,
      () => {
        isMenuOpen.value = false
      },
    )

    onUnmounted(() => {
      document.removeEventListener('keydown', closeOnEscapePress)
    })

    return { elLogoSmall, isMenuOpen }
  },
}
</script>

<style lang="scss" scoped>
.header {
  @apply fixed inset-x-0 top-0 z-50;
  @apply flex justify-end items-center text-center px-4 md:px-6 pt-4 md:pt-6;
  @apply text-brand-blue;
  @apply pointer-events-none;

  // --brand-cream-hsl: 20, 53%, 97%;
  // background: linear-gradient(
  //   to bottom,
  //   hsla(var(--brand-cream-hsl), 0.69) 0%,
  //   hsla(var(--brand-cream-hsl), 0.681) 8.1%,
  //   hsla(var(--brand-cream-hsl), 0.656) 15.5%,
  //   hsla(var(--brand-cream-hsl), 0.618) 22.5%,
  //   hsla(var(--brand-cream-hsl), 0.569) 29%,
  //   hsla(var(--brand-cream-hsl), 0.511) 35.3%,
  //   hsla(var(--brand-cream-hsl), 0.447) 41.2%,
  //   hsla(var(--brand-cream-hsl), 0.379) 47.1%,
  //   hsla(var(--brand-cream-hsl), 0.311) 52.9%,
  //   hsla(var(--brand-cream-hsl), 0.243) 58.8%,
  //   hsla(var(--brand-cream-hsl), 0.179) 64.7%,
  //   hsla(var(--brand-cream-hsl), 0.121) 71%,
  //   hsla(var(--brand-cream-hsl), 0.072) 77.5%,
  //   hsla(var(--brand-cream-hsl), 0.034) 84.5%,
  //   hsla(var(--brand-cream-hsl), 0.009) 91.9%,
  //   hsla(var(--brand-cream-hsl), 0) 100%
  // );

  &__logo {
    @apply block h-12 pointer-events-auto;

    &__wrapper {
      @apply h-full w-full absolute left-0 hover:opacity-80 focus:opacity-80;
      @apply flex items-center justify-center bg-brand-cream;
    }
  }

  &__menu {
    @apply z-50 transition-colors duration-300 pointer-events-auto;
  }
}
</style>

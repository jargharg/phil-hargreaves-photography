<template>
  <header>
    <NuxtLink
      ref="elLogo"
      to="/"
      aria-label="Go to homepage"
      class="absolute top-3 md:top-4 left-4 md:left-6 pr-20 w-full max-w-md z-50"
    >
      <LogoLarge class="w-full text-brand-cream" />
    </NuxtLink>

    <div class="header">
      <MenuButton
        class="header__menu"
        :is-open="isMenuOpen"
        :is-floating="isFloating"
        @click="isMenuOpen = !isMenuOpen"
      />
    </div>

    <SiteHeaderMenu :is-open="isMenuOpen" class="pointer-events-auto" />
  </header>
</template>

<script>
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useHeaderStore } from '~/stores/header'

export default {
  setup () {
    const elLogo = ref(null)

    const headerStore = useHeaderStore()
    const isMenuOpen = toRef(headerStore, 'isMenuOpen')

    const route = useRoute()

    const isFloating = ref(false)

    onMounted(() => {
      ScrollTrigger.create({
        start: () => `${window.innerHeight}px top`,
        end: 999999,

        onToggle ({ isActive }) {
          isFloating.value = isActive
        },
      })

      gsap
        .timeline({
          scrollTrigger: {
            scrub: true,
            start: 'top top',
            end: () => `${window.innerHeight} top`,
            invalidateOnRefresh: true,
          },
        })
        .to(elLogo.value.$el, {
          y: window.innerHeight * 0.8,
          ease: 'none',
        })
    })

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
        isFloating.value = false
        isMenuOpen.value = false
      },
    )

    onUnmounted(() => {
      document.removeEventListener('keydown', closeOnEscapePress)
    })

    return { elLogo, isFloating, isMenuOpen }
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

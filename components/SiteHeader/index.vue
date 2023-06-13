<template>
  <header class="header">
    <NuxtLink
      ref="elLogo"
      to="/"
      aria-label="Go to homepage"
      class="header__logo__wrapper"
    >
      <LogoLarge class="header__logo" />
    </NuxtLink>

    <div class="header__menu__wrapper">
      <MenuButton
        class="header__menu"
        :is-open="isMenuOpen"
        :is-floating="isFloating"
        @click="isMenuOpen = !isMenuOpen"
      />
    </div>

    <SiteHeaderMenu class="pointer-events-auto" />
  </header>
</template>

<script>
import ScrollTrigger from 'gsap/ScrollTrigger'
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
  color: var(--hero-text-color);

  &__logo {
    @apply w-full transition-colors duration-300;

    &__wrapper {
      @apply absolute top-4 left-0 pl-4 md:pl-6 pr-20 w-full max-w-md z-30;
    }
  }

  &__menu {
    @apply z-50 transition-colors duration-300 pointer-events-auto;

    &__wrapper {
      @apply fixed inset-x-0 top-0 z-50;
      @apply flex justify-end items-center text-center px-4 md:px-6 pt-6;
      @apply text-brand-blue;
      @apply pointer-events-none;
    }
  }
}
</style>

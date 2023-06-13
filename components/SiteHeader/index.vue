<template>
  <div>
    <header ref="elHeader" class="header">
      <PhpNuxtLink
        to="/"
        class="header__logo__wrapper"
        aria-label="Go to homepage"
      >
        <LogoLarge ref="elLogo" class="header__logo" />
      </PhpNuxtLink>

      <MenuButton
        class="header__menu"
        :class="{ 'header__menu--open': isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
      />
    </header>

    <SiteHeaderMenu :is-open="isMenuOpen" class="pointer-events-auto" />
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { DURATION_IN_MS } from '~/composables/defaultTransition'
import sleep from '~/helpers/sleep'
import { useHeaderStore } from '~/stores/header'
import { useA11yStore } from '~/stores/a11y'

export default {
  setup () {
    const elHeader = ref(null)
    const elLogo = ref(null)

    const a11yStore = useA11yStore()

    const headerStore = useHeaderStore()
    const isMenuOpen = toRef(headerStore, 'isMenuOpen')
    const isVisible = toRef(headerStore, 'isVisible')

    const route = useRoute()

    let animationToggle

    onMounted(() => {
      animationToggle = gsap.from(elHeader.value, {
        paused: true,
        duration: 0.6,
        yPercent: -100,
        opacity: 0.7,
        ease: 'power3.inOut',
      })

      ScrollTrigger.create({
        start: () => `${window.innerHeight}px top`,
        end: 999999,
        onUpdate ({ direction, getVelocity }) {
          const velocity = getVelocity()

          if (headerStore.isMenuOpen || velocity > 3000) {
            return
          }

          if (velocity > -300 && velocity < 300) {
            return
          }

          if (headerStore.isMenuOpen || direction === 1) {
            if (a11yStore.reducedMotion) {
              animationToggle.progress(0)
            } else {
              animationToggle.reverse()
            }
          } else if (!a11yStore.reducedMotion) {
            animationToggle.play()
          }
        },

        onToggle ({ isActive }) {
          if (!isActive) {
            animationToggle.reverse()
          }
        },
      })
    })

    onUnmounted(() => {
      animationToggle?.kill()
    })

    watch(
      () => route.path,
      () => {
        isMenuOpen.value = false
      },
    )

    watch(isVisible, () => {
      if (isVisible.value) {
        gsap
          .to(elHeader.value, {
            duration: 0.5,
            opacity: 1,
            yPercent: 0,
            ease: 'power3.out',
          })
          .set(elHeader.value, { clearProps: true })
      } else {
        gsap
          .to(elHeader.value, {
            duration: 0.5,
            opacity: 0,
            yPercent: -100,
            ease: 'power3.in',
          })
          .set(elHeader.value, { clearProps: true })
      }
    })

    return { elHeader, isMenuOpen, elLogo }
  },
}
</script>

<style lang="scss" scoped>
.header {
  @apply fixed inset-x-0 top-0 z-50;
  @apply flex justify-end items-center text-center px-6 py-4;
  @apply text-brand-blue bg-brand-cream shadow-sm;
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
    @apply block w-full h-[80%] pointer-events-auto;

    &__wrapper {
      @apply max-w-xs h-full w-full absolute left-1/2 -translate-x-1/2 hover:opacity-80 focus:opacity-80;
      @apply flex items-center justify-center;
    }
  }

  &__menu {
    @apply z-50 transition-colors duration-300 pointer-events-auto;

    &--open {
      // @apply text-brand-cream;
    }
  }
}
</style>

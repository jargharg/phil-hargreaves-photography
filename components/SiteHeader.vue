<template>
  <header ref="header" class="header">
    <NuxtLink to="/" class="header__logo__wrapper">
      <LogoLarge ref="logo" class="header__logo" />
    </NuxtLink>

    <MenuButton class="header__menu" />
  </header>
</template>

<script>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

export default {
  setup () {
    const header = ref(null)
    const logo = ref(null)

    onMounted(() => {
      if (!process.client) { return }
      gsap
        .timeline()
        .set(logo.value.$el, { opacity: 1 })
        .from(logo.value.phil.querySelectorAll('path'), {
          opacity: 0,
          stagger: 0.07,
          duration: 0.8,
        })
        .from(
          logo.value.hargreaves.querySelectorAll('path'),
          {
            opacity: 0,
            stagger: 0.07,
            duration: 0.8,
          },
          '-=0.65',
        )
        .from(
          logo.value.photography.querySelectorAll('path'),
          {
            opacity: 0,
            stagger: 0.05,
            duration: 0.4,
          },
          '-=0.6',
        )

      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: document.body,
      //       scrub: 0.1,
      //       start: () => innerHeight / 4 + ' top',
      //       end: () => innerHeight + ' top',

      //     },
      //   })
      //   .from(logo.value.$el, {
      //     scale: () => Math.min(2, (innerWidth / logo.value.$el.clientWidth) * 0.9),
      //     x: () => innerWidth / 2 - logo.value.$el.clientWidth * 0.5,
      //     yPercent: 60,
      //     duration: 1,
      //   })
    })

    return { header, logo }
  },
}
</script>

<style lang="scss" scoped>
.header {
  @apply p-4 text-center fixed w-full top-0 left-0 transition-opacity z-50 flex justify-between text-white mix-blend-difference;

  &__logo {
    @apply block w-full;

    &__wrapper {
      @apply max-w-xs w-full hover:opacity-80 focus:opacity-80;
    }
  }
}
</style>

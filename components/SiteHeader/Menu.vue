<template>
  <transition @enter="onEnter" @leave="onLeave">
    <div v-show="isOpen" class="header-menu">
      <NuxtLink ref="elLogo" to="/" aria-label="Go to homepage">
        <LogoSmall class="h-10" />
      </NuxtLink>

      <ul class="header-menu__nav-items">
        <li
          v-for="({ link, label }, index) in menu"
          :key="index"
          ref="elMenuItems"
        >
          <nuxt-link
            v-if="$prismic.asLink(link)"
            :to="$prismic.asLink(link)"
            class="header-menu__nav-item"
          >
            {{ label }}
          </nuxt-link>
        </li>
      </ul>

      <SocialLinks
        ref="elSocialLinks"
        icon-color="brand-cream"
        circle-color="brand-blue"
      />
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
import { useGlobalsStore } from '~/stores/globals'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  setup () {
    const globalsStore = useGlobalsStore()

    const contact = toRef(globalsStore, 'contact')
    const menu = toRef(globalsStore, 'menu')
    const socialLinks = toRef(globalsStore, 'socialLinks')

    const elMenuItems = ref([])
    const elLogo = ref(null)
    const elSocialLinks = ref(null)

    let tl

    const onEnter = (el, onComplete) => {
      tl?.kill()

      tl = gsap
        .timeline({
          onComplete,
          defaults: { ease: 'power2.inOut', duration: 0.7 },
        })
        .set('body', { overflow: 'hidden' })
        .fromTo(el, { xPercent: 100 }, { xPercent: 0 })
        .fromTo(
          'main, footer',
          { opacity: 1, xPercent: 0 },
          { opacity: 0.5, xPercent: -25 },
          '<',
        )
        .fromTo(
          [elLogo.value.$el, elMenuItems.value, elSocialLinks.value.$el],
          { opacity: 0 },
          { opacity: 1, stagger: 0.1 },
          '-=0.5',
        )
    }

    const onLeave = (el, onComplete) => {
      tl?.kill()

      tl = gsap
        .timeline({
          onComplete,
          defaults: { ease: 'power2.inOut', duration: 0.7 },
        })
        .fromTo(el, { xPercent: 0 }, { xPercent: 100 })
        .fromTo(
          'main, footer',
          { opacity: 0.5, xPercent: -25 },
          { opacity: 1, xPercent: 0 },
          '<',
        )
        .set('body', { overflow: 'auto' })
    }

    return {
      contact,
      elLogo,
      elMenuItems,
      elSocialLinks,
      menu,
      onEnter,
      onLeave,
      socialLinks,
    }
  },
}
</script>

<style lang="scss" scoped>
.header-menu {
  @apply fixed top-0 inset-y-0 right-0 w-full md:w-1/2 bg-brand-blue text-brand-cream z-10 py-8 px-5 h-full flex flex-col items-center justify-between;

  &__nav-items {
    @apply flex flex-col justify-center items-center text-lg;
  }

  &__nav-item {
    @apply block py-4 underline hover:no-underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }
}
</style>

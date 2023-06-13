<template>
  <transition @enter="onEnter" @leave="onLeave">
    <div
      v-show="isOpen"
      class="fixed top-0 inset-y-0 right-0 w-1/2 bg-brand-cream text-brand-blue z-10"
    >
      <ul
        class="h-full flex flex-col justify-center items-center text-xl gap-8"
      >
        <li
          v-for="({ link, label }, index) in menu"
          :key="index"
          ref="elMenuItems"
        >
          <nuxt-link
            v-if="$prismic.asLink(link)"
            :to="$prismic.asLink(link)"
            class="hover:underline"
          >
            {{ label }}
          </nuxt-link>
        </li>
      </ul>
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
          'main',
          { opacity: 1, xPercent: 0 },
          { opacity: 0.5, xPercent: -25 },
          '<',
        )
        .fromTo(
          elMenuItems.value,
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
          'main',
          { opacity: 0.5, xPercent: -25 },
          { opacity: 1, xPercent: 0 },
          '<',
        )
        .set('body', { overflow: 'auto' })
    }

    return { contact, elMenuItems, menu, socialLinks, onEnter, onLeave }
  },
}
</script>

<template>
  <button
    class="h-12 md:h-14 p-3.5 md:p-4 rounded-full"
    :class="{ 'text-brand-cream': isOpen,
              'bg-brand-cream text-brand-blue': !isOpen }"
  >
    <svg
      ref="elIcon"
      class="h-full overflow-visible"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      stroke-width="0.75"
    >
      <path d="M0,1 H10" />
      <path d="M0,5 H10" />
      <path d="M0,9 H10" />
    </svg>
  </button>
</template>

<script>
import gsap from 'gsap'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  setup (props) {
    const elIcon = ref(null)

    let tl

    watch(
      () => props.isOpen,
      (isOpen) => {
        const targets = elIcon.value.children

        tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
        if (isOpen) {
          tl.to(elIcon.value, { rotate: -180 })
            .to(targets[1], { opacity: 0, duration: 0.5 }, '<')
            .to(targets[0], { rotate: 45, x: 1, scaleX: 1.12 }, '<')
            .to(targets[2], { rotate: -45, x: 1, scaleX: 1.12 }, '<')
        } else {
          tl.to(elIcon.value, { rotate: 0 })
            .to(targets[1], { opacity: 1, duration: 0.5 }, '<')
            .to(targets[0], { rotate: 0, x: 0, scaleX: 1 }, '<')
            .to(targets[2], { rotate: 0, x: 0, scaleX: 1 }, '<')
        }
      },
    )

    return { elIcon }
  },
}
</script>

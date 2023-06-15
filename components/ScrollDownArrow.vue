<template>
  <svg
    class="h-16"
    fill="none"
    stroke-width="0.2"
    stroke="currentColor"
    viewBox="0 0 2 12"
  >
    <path ref="elLine" d="M1,1V2" />
  </svg>
</template>

<script>
import gsap from 'gsap'

export default {
  setup () {
    const elLine = ref(null)

    onMounted(() => {
      gsap
        .timeline({ repeat: -1, repeatDelay: 1, defaults: { duration: 1 } })
        .fromTo(
          elLine.value,
          { y: 0, scaleY: 0 },
          { y: 5, scaleY: 10, ease: 'power2.in' },
        )
        .fromTo(
          elLine.value,
          { y: 5, scaleY: 10 },
          { y: 11, scaleY: 0, ease: 'power2.out' },
        )
    })

    return { elLine }
  },
}
</script>

<style>
</style>

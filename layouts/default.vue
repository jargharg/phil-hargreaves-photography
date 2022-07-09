<template>
  <div class="min-h-screen bg-[#EEE0CB] text-gray-900">
    <MainHeader />
    <MainMenu class="fixed bottom-8 left-8" />

    <main>
      <slot />
    </main>
  </div>
</template>
#
<script>
import MainMenu from '../components/MainMenu.vue'
import MainHeader from '@/components/MainHeader'

export default {
  components: {
    MainHeader,
    MainMenu,
  },
  scrollToTop: true,

}
</script>

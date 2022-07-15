<template>
  <div>
    <div
      v-if="isGridVisible"
      class="fixed z-50 w-full inset-0 pointer-events-none"
    >
      <div class="container w-full flex space-between gap-5">
        <div
          v-for="row in Array(12)"
          :key="row"
          class="
            flex-1
            border-l border-r border-red-500
            bg-red-300
            opacity-20
            h-screen
          "
        />
      </div>
    </div>

    <button class="fixed bottom-0 left-0 z-50" @click="toggleGrid">
      GRID
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const isGridVisible = ref(false)
    const toggleGrid = () => {
      isGridVisible.value = !isGridVisible.value
    }
    return { isGridVisible, toggleGrid }
  },
}
</script>

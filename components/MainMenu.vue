<template>
  <nav>
    <ul class="h-full flex flex-col justify-start text-sm">
      <li>
        <NuxtLink to="/About" class="nav-link">
          About
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/The-Studio" class="nav-link">
          The Studio
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/Portfolio" class="nav-link">
          Portfolio
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/Kind-Words" class="nav-link">
          Kind Words
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/Contact" class="nav-link">
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-link {
  @apply inline-block opacity-80 hover:opacity-100;
}
</style>

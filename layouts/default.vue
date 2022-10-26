<template>
  <div class="min-h-screen bg-brand-pink-light text-brand-primary">
    <SiteHeader />

    <main>
      <slot />
    </main>

    <SiteFooter />
    <GridOutline />
  </div>
</template>

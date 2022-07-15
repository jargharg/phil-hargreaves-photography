<template>
  <div class="min-h-screen bg-brand-secondary text-brand-primary">
    <SiteHeader />

    <main class="pb-8">
      <slot />
    </main>

    <SiteFooter />
    <GridOutline />
  </div>
</template>

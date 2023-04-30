<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo">
        <NuxtLink to="/" aria-label="Go to homepage">
          <LogoSmall ref="logo" class="h-14" />
        </NuxtLink>
      </div>

      <div class="footer__contact">
        <nuxt-link target="_blank" :href="$prismic.asLink(contact.mapLink)">
          <prismic-rich-text :field="contact.address" class="mb-4" />
        </nuxt-link>

        <a
          class="underline hover:no-underline"
          :href="`tel:${contact.number}`"
        >{{ contact.number }}</a>
        <a
          class="underline hover:no-underline"
          :href="`mailto:${contact.email}`"
        >{{ contact.email }}</a>
      </div>

      <div class="footer__menu">
        menu
      </div>

      <div class="footer__policies">
        policies
      </div>

      <div class="footer__social">
        social
      </div>
    </div>
  </footer>
</template>

<script>
import { useGlobalsStore } from '../stores/globals'

export default {
  setup () {
    const globalsStore = useGlobalsStore()

    const contact = toRef(globalsStore, 'contact')
    const footerPolicies = toRef(globalsStore, 'footerPolicies')
    const socialLinks = toRef(globalsStore, 'socialLinks')

    return { contact, footerPolicies, socialLinks }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  @apply w-full bg-brand-blue text-brand-cream text-sm py-10;

  &__container {
    @apply grid gap-5;

    grid-template:
      "logo"
      "contact"
      "menu"
      "policies"
      "social";

    @screen lg {
      grid-template:
        "logo contact menu"
        "policies contact social" /
        1fr 2fr 1fr;
    }
  }

  &__logo {
    @apply flex justify-center lg:justify-start;
    grid-area: logo;
  }

  &__contact {
    @apply text-sm-mobile text-center flex flex-col;
    grid-area: contact;
  }

  &__menu {
    @apply text-center lg:text-right;
    grid-area: menu;
  }

  &__policies {
    @apply text-sm-mobile flex flex-col items-center lg:items-start justify-end;
    grid-area: policies;
  }

  &__social {
    @apply flex flex-col items-center lg:items-end justify-end;
    grid-area: social;
  }
}
</style>

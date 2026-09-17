<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo">
        <NuxtLink to="/" aria-label="Go to homepage">
          <LogoSmall ref="logo" class="w-full" />
        </NuxtLink>
      </div>

      <div class="footer__contact">
        <nuxt-link target="_blank" :href="$prismic.asLink(contact.mapLink)"
          class="hover:underline flex flex-col gap-2 mb-4">
          <prismic-rich-text :field="contact.address" class="contents" />
        </nuxt-link>

        <a class="footer__contact__link" :href="`tel:${contact.number}`">{{
          contact.number
        }}</a>
        <a class="footer__contact__link" :href="`mailto:${contact.email}`">{{
          contact.email
        }}</a>
      </div>

      <ul class="footer__menu">
        <li v-for="({ link, label }, index) in menu" :key="index">
          <nuxt-link v-if="$prismic.asLink(link)" :to="$prismic.asLink(link)">
            {{ label }}
          </nuxt-link>
        </li>
      </ul>

      <ul class="footer__policies">
        <li v-for="({ link, label }, index) in footerPolicies" :key="index">
          <nuxt-link v-if="$prismic.asLink(link)" :to="$prismic.asLink(link)">
            {{ label }}
          </nuxt-link>
        </li>
      </ul>

      <SocialLinks icon-color="blue" circle-color="cream" class="footer__social" />
    </div>
  </footer>
</template>

<script>
import { useGlobalsStore } from '../stores/globals'

export default {
  setup() {
    const globalsStore = useGlobalsStore()

    const contact = toRef(globalsStore, 'contact')
    const footerPolicies = toRef(globalsStore, 'footerPolicies')
    const menu = toRef(globalsStore, 'menu')
    const socialLinks = toRef(globalsStore, 'socialLinks')

    return { contact, footerPolicies, menu, socialLinks }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  @apply w-full bg-blue text-cream text-sm py-10;

  &__container {
    @apply grid gap-10 lg:gap-5;

    grid-template:
      "logo"
      "menu"
      "contact"
      "social"
      "policies";

    @screen lg {
      grid-template:
        "logo     contact menu"
        "policies contact social" /
        1fr 2fr 1fr;
    }
  }

  a {
    @apply underline decoration-transparent hover:decoration-current transition-colors;
  }

  &__logo {
    @apply flex justify-center lg:justify-start;
    grid-area: logo;
  }

  &__contact {
    @apply text-sm text-center flex flex-col gap-2 items-center justify-start;
    grid-area: contact;
  }

  &__menu {
    @apply flex flex-col items-center lg:items-end justify-end gap-2;
    grid-area: menu;
  }

  &__policies {
    @apply text-sm flex flex-col gap-2 items-center lg:items-start justify-end;
    grid-area: policies;
  }

  &__social {
    @apply justify-center lg:justify-end;
    grid-area: social;
  }
}
</style>

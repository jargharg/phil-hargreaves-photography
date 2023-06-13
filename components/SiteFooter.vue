<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo">
        <PhpNuxtLink to="/" aria-label="Go to homepage">
          <LogoSmall ref="logo" class="w-full" />
        </PhpNuxtLink>
      </div>

      <div class="footer__contact">
        <nuxt-link
          target="_blank"
          :href="$prismic.asLink(contact.mapLink)"
          class="hover:underline"
        >
          <prismic-rich-text :field="contact.address" class="mb-4" />
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

      <SocialLinks
        icon-color="brand-blue"
        circle-color="brand-cream"
        class="footer__social"
      />
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
    const menu = toRef(globalsStore, 'menu')
    const socialLinks = toRef(globalsStore, 'socialLinks')

    return { contact, footerPolicies, menu, socialLinks }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  @apply w-full bg-brand-blue text-brand-cream text-sm py-10;

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

  &__logo {
    @apply flex justify-center lg:justify-start;
    grid-area: logo;
  }

  &__contact {
    @apply text-sm-mobile text-center flex flex-col items-center justify-start;
    grid-area: contact;

    &__link {
      @apply underline hover:no-underline;
    }
  }

  &__menu {
    @apply flex flex-col items-center lg:items-end justify-end gap-2;
    grid-area: menu;

    a {
      @apply underline hover:no-underline;
    }
  }

  &__policies {
    @apply text-sm-mobile flex flex-col items-center lg:items-start justify-end;
    grid-area: policies;

    a {
      @apply underline hover:no-underline;
    }
  }

  &__social {
    @apply justify-center lg:justify-end;
    grid-area: social;
  }
}
</style>

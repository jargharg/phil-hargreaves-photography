<template>
  <ul
    v-if="socialLinks && socialLinks.length"
    class="flex gap-2.5"
  >
    <li v-for="({ link, platform }, index) in socialLinks" :key="index">
      <a
        :href="$prismic.asLink(link)"
        target="_blank"
        :aria-label="platform"
        class="transition-opacity hover:opacity-80 focus:opacity-80"
      >
        <client-only>
          <font-awesome-layers class="fa-2xl">
            <font-awesome-icon
              :icon="['fa-solid', 'fa-circle']"
              :class="`text-${circleColor}`"
            />

            <font-awesome-icon
              :icon="['fa-brands', getFAClass(platform.toLowerCase())]"
              :class="`text-${iconColor}`"
              transform="shrink-8"
            />
          </font-awesome-layers>
          <template #placeholder>
            {{ platform }}
          </template>
        </client-only>
      </a>
    </li>
  </ul>
</template>

<script>
import { useGlobalsStore } from '~/stores/globals'

export default {
  props: {
    iconColor: {
      type: String,
      default: 'brand-blue',
    },

    circleColor: {
      type: String,
      default: 'brand-cream',
    },
  },

  setup () {
    const globalsStore = useGlobalsStore()

    const socialLinks = computed(() => globalsStore.socialLinks)

    const classMap = {
      facebook: 'facebook-f',
      linkedin: 'linkedin-in',
    }

    const getFAClass = platform =>
      classMap[platform] ? `fa-${classMap[platform]}` : `fa-${platform}`

    return { getFAClass, socialLinks }
  },
}
</script>

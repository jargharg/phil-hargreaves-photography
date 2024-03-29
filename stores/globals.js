import { defineStore } from 'pinia'

export const useGlobalsStore = defineStore('globals', {
  state: () => {
    return {
      contact: {},
      footerPolicies: [],
      menu: [],
      slides: [],
      socialLinks: [],
    }
  },

  actions: {
    async fetchGlobals ($prismic) {
      const { data } = await $prismic.client.getSingle('globals')

      this.contact = {
        ctaText: data.contactCtaText,
        number: data.contactNumber,
        email: data.contactEmailAddress,
        address: data.contactAddress,
        location: data.contactLocation,
        mapLink: data.contactMapLink,
      }

      this.footerPolicies = data.footerPolicies
      this.slides = data.slides.map(({ image }) => image)

      this.menu = data.menu
      this.socialLinks = data.socialLinks

      return this
    },
  },
})

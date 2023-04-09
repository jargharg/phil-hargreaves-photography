import { defineStore } from 'pinia'

export const useGlobalsStore = defineStore('globals', {
  state: () => {
    return {
      contact: {},
      footerPolicies: [],
      primaryNav: [],
      socialLinks: [],
    }
  },

  actions: {
    async fetchGlobals ($prismic) {
      const { data } = await $prismic.client.getSingle('globals')

      this.contact = {
        title: data.contactTitle,
        intro: data.contactIntro,
        ctaText: data.contactCtaText,
        number: data.contactNumber,
        emailAddress: data.contactEmailAddress,
        address: data.contactAddress,
        location: data.contactLocation,
        mapLink: data.contactMapLink,
      }

      this.footerPolicies = data.footerPolicies
      this.primaryNav = data.primaryNav
      this.socialLinks = data.socialLinks

      return this
    },
  },
})

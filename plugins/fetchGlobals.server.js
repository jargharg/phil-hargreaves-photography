import { useGlobalsStore } from '~/stores/globals'

export default defineNuxtPlugin(({ $prismic }) => {
  const globalsStore = useGlobalsStore()
  return globalsStore.fetchGlobals($prismic)
})

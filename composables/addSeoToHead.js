import { mapSeoMetaOptions } from '~/helpers/seo'

export function addSeoToHead (
  doc,
  overrideFullTitle = false,
  imageCropName = 'meta',
) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const links = { canonical: `${config.public.siteUrl}${route.path}` }

  useHead(() =>
    mapSeoMetaOptions(
      doc.value?.title,
      doc.value?.summary,
      doc.value?.primaryImage,
      links,
      overrideFullTitle,
      imageCropName,
    ),
  )
}

export default addSeoToHead

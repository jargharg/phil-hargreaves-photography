import { mapSeoMetaOptions } from '~/helpers/mapSeoMetaOptions'

export function addSeoToHead ({
  description,
  image,
  imageCropName = 'meta',
  nuxtApp,
  overrideFullTitle = false,
  path,
  siteUrl,
  title,
}) {
  nuxtApp.runWithContext(() => {
    useHead(() =>
      mapSeoMetaOptions({
        description,
        image,
        imageCropName,
        overrideFullTitle,
        title,
        links: { canonical: `${siteUrl}${path}` },
      }),
    )
  })
}

export default addSeoToHead

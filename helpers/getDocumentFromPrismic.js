import addSeoToHead from '~/helpers/addSeoToHead'
import errorLog from '~/helpers/errorLog'

export async function getDocumentFromPrismic (
  type,
  {
    dataMapFunction,
    graphQuery,
    overrideFullTitle = false,
    repeatable,
  } = {},
) {
  const nuxtApp = useNuxtApp()

  const route = useRoute()
  const { path, params } = route
  const { uid } = params

  const colorMode = useColorMode()

  const config = useRuntimeConfig()
  const { siteUrl } = config.public

  const { client } = usePrismic()

  const fetchId = repeatable ? `${type}-${uid}` : type
  const options = graphQuery ? { graphQuery } : {}

  const { data: doc } = await useAsyncData(fetchId, async () => {
    let response

    try {
      response = repeatable ? await client.getByUID(type, uid, options) : await client.getSingle(type, options)
    } catch (e) {
      errorLog(e, { type, uid, shouldThrow: true, statusCode: 404 })
      return {}
    }

    const { id, first_publication_date: publishedDate } = response
    let { data } = response

    if (data.heroTextColor) {
      colorMode.value = data.heroTextColor === 'Dark' ? 'blue' : 'cream'
    }

    if (dataMapFunction) {
      data = dataMapFunction(data)
    }

    return { ...data, id, publishedDate }
  })

  addSeoToHead({
    nuxtApp,
    overrideFullTitle,
    path,
    siteUrl,
    description: doc.value.metaDescription,
    image: doc.value.metaImage,
    title: doc.value.title,
  })

  return doc
}

export default getDocumentFromPrismic

import addSeoToHead from '~/composables/addSeoToHead'

export async function getDocumentFromPrismic (
  type,
  {
    repeatable,
    graphQuery,
    dataMapFunction,
    overrideFullTitle = false,
  } = {},
) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const { client } = usePrismic()
  const { uid } = route.params

  const fetchId = repeatable ? `${type}-${uid}` : type
  const options = graphQuery ? { graphQuery } : {}

  const { data: doc } = await useAsyncData(fetchId, async () => {
    let response

    if (repeatable) {
      response = await client.getByUID(type, uid, options)
    } else {
      response = await client.getSingle(type, options)
    }

    let { data } = response
    const { id, first_publication_date: publishedDate } = response

    if (dataMapFunction) {
      data = dataMapFunction(data)
    }

    addSeoToHead({ data, route, config, overrideFullTitle })
    return { ...data, id, publishedDate }
  })

  if (process.client) {
    addSeoToHead({ data: doc, route, config, overrideFullTitle })
  }

  return doc
}

export default getDocumentFromPrismic

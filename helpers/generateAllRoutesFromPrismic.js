import { createClient } from '@prismicio/client'
import fetch from 'node-fetch'

export default async function generateAllRoutesFromPrismic (apiEndpoint, linkResolver, lang = 'en-gb') {
  const getAllDocuments = async () => {
    const getDocumentsByPage = async (page) => {
      const client = createClient(apiEndpoint, { fetch })
      const pageSize = 100

      const {
        results,
        page: currentPage,
        total_pages: totalPages,
      } = await client.get({ pageSize, page, lang })

      const isFinalPage = currentPage >= totalPages
      return { isFinalPage, results }
    }

    let allDocuments = []
    let currentPage = 1
    let shouldFetchMoreDocuments = true

    while (shouldFetchMoreDocuments) {
      const { results, isFinalPage } = await getDocumentsByPage(currentPage)
      allDocuments = [...allDocuments, ...results]
      currentPage++
      shouldFetchMoreDocuments = !isFinalPage
    }

    return allDocuments
  }

  const documents = await getAllDocuments()

  const routes = documents.reduce((routes, document) => {
    const route = linkResolver(document)
    if (route && !routes.includes(route)) {
      routes.push(route)
    }
    return routes
  }, [])

  return routes
}

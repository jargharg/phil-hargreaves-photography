export function mapPrismicItems (items) {
  return items.map(item => mapPrismicItem(item))
}

export function mapPrismicItem (item) {
  const {
    data,
    first_publication_date: firstPublicationDate,
    id,
    type,
    uid,
  } = item

  const postDate = data?.postDate ?? firstPublicationDate

  return { id, postDate, type, uid, ...data }
}

export function mapPrismicResults (results) {
  if (!results?.length) {
    return []
  }

  return results
    .reduce((acc, item) => {
      if (!item || item.isBroken || !item.id) {
        return acc
      }

      acc.push(mapPrismicItem(item))

      return acc
    }, [])
}

export function mapPrismicContentRelationships (items, expectedType) {
  if (!items?.length) {
    return []
  }

  return items
    .reduce((acc, item) => {
      if (!item) {
        return acc
      }

      const [primaryKey] = Object.keys(item)

      if (!primaryKey) {
        return acc
      }

      const document = item[primaryKey]

      const isExpectedType = expectedType ? document.type === expectedType : true

      if (!isExpectedType || document.isBroken || !document.id) {
        return acc
      }

      acc.push(mapPrismicItem(document))
      return acc
    }, [])
}

export function mapPrismicIds (items) {
  return items.reduce((acc, item) => {
    if (!item) {
      return acc
    }

    if (item.id) {
      acc.push(item.id)
      return acc
    }

    const [primaryKey] = Object.keys(item)

    if (primaryKey && item[primaryKey]?.id) {
      acc.push(item[primaryKey].id)
      return acc
    }

    return acc
  }, [])
}

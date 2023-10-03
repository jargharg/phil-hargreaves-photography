import clientDetails from '~/clientDetails'

export function mapSeoMetaOptions (
  {
    title,
    description,
    image,
    links = {},
    overrideFullTitle = false,
    imageCropName = 'main',
  },
) {
  const { siteName } = clientDetails
  const titleString = overrideFullTitle ? title : `${title} | ${siteName}`

  const meta = [
    {
      hid: 'name',
      name: 'name',
      content: siteName,
    },
    {
      hid: 'title',
      name: 'title',
      content: titleString,
    },
    {
      hid: 'og:sitename',
      name: 'og:sitename',
      content: siteName,
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: titleString,
    },
  ]

  if (description) {
    meta.push(
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
    )
  }

  if (image && imageCropName in image && Object.keys(image[imageCropName]).length > 0) {
    meta.push(
      {
        hid: 'image',
        name: 'image',
        content: image[imageCropName]?.url || '',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: image[imageCropName]?.url || '',
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: image[imageCropName]?.dimensions?.width || '',
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: image[imageCropName]?.dimensions?.height || '',
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: image[imageCropName]?.alt || image.alt || '',
      },
    )
  }

  const link = []
  if (links.canonical) {
    link.push({ rel: 'canonical', href: links.canonical })
  }

  return {
    title: titleString,
    meta,
    link,
  }
}

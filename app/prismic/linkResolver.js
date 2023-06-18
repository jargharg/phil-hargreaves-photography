export const DOCUMENT_TYPES = {
  contact: 'contact',
  contentPage: 'contentPage',
  globals: 'globals',
  homepage: 'homepage',
  landingPage: 'landingPage',
  legal: 'legal',
}

const HOMEPAGE_DOC_TYPES = [
  DOCUMENT_TYPES.homepage,
  DOCUMENT_TYPES.globals,
]

export default function (doc) {
  if (doc.isBroken) {
    return null
  }

  if (HOMEPAGE_DOC_TYPES.includes(doc.type)) {
    return '/'
  }

  if (doc.type === DOCUMENT_TYPES.contact) {
    return '/contact/'
  }

  if (doc.type === DOCUMENT_TYPES.contentPage) {
    return `/${doc.uid}/`
  }

  if (doc.type === DOCUMENT_TYPES.landingPage) {
    return `/landing-page/${doc.uid}/`
  }

  if (doc.type === DOCUMENT_TYPES.legal) {
    return `/legal/${doc.uid}/`
  }

  return null
};

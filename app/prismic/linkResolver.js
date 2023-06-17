export const DOCUMENT_TYPES = {
  about: 'about',
  contact: 'contact',
  gallery: 'gallery',
  globals: 'globals',
  homepage: 'homepage',
  landingPage: 'landingPage',
  legal: 'legal',
  testimonials: 'testimonials',
  theStudio: 'theStudio',
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

  if (doc.type === DOCUMENT_TYPES.about) {
    return '/about/'
  }

  if (doc.type === DOCUMENT_TYPES.contact) {
    return '/contact/'
  }

  if (doc.type === DOCUMENT_TYPES.gallery) {
    return '/gallery/'
  }

  if (doc.type === DOCUMENT_TYPES.testimonials) {
    return '/testimonials/'
  }

  if (doc.type === DOCUMENT_TYPES.theStudio) {
    return '/the-studio/'
  }

  if (doc.type === DOCUMENT_TYPES.landingPage) {
    return `/landing-page/${doc.uid}/`
  }

  if (doc.type === DOCUMENT_TYPES.legal) {
    return `/legal/${doc.uid}/`
  }

  return null
};

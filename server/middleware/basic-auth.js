/* eslint-disable */
const DEFAULT_SKIP_PATHS = ['/preview', '/_nuxt', '/__nuxt_error']

function isPrerenderRequest(event) {
  const prerenderHeader = getHeader(event, 'x-nitro-prerender')
  const userAgent = (getHeader(event, 'user-agent') || '').toLowerCase()
  const host = (getHeader(event, 'host') || '').toLowerCase()
  const envPrerender =
    process.env.prerender === 'true' ||
    process.env.NITRO_PRERENDER === 'true' ||
    process.env.nitro_prerender === 'true'

  return (
    prerenderHeader === '1' ||
    userAgent.includes('nitro prerender') ||
    host.startsWith('localhost') ||
    host.startsWith('127.0.0.1') ||
    envPrerender
  )
}

function decodeBase64(value) {
  if (!value) {
    return ''
  }

  if (typeof globalThis.atob === 'function') {
    return globalThis.atob(value)
  }

  return Buffer.from(value, 'base64').toString('utf-8')
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  // Keep auth disabled unless explicitly enabled and credentials are set.
  if (!config.basicAuthEnabled || !config.basicAuthUsername || !config.basicAuthPassword) {
    return
  }

  if (config.basicAuthSkipPrerender && isPrerenderRequest(event)) {
    return
  }

  const { pathname } = getRequestURL(event)

  if (DEFAULT_SKIP_PATHS.some((skipPath) => pathname.startsWith(skipPath))) {
    return
  }

  const authorization = getHeader(event, 'authorization') || ''

  if (!authorization.startsWith('Basic ')) {
    setResponseHeader(event, 'WWW-Authenticate', `Basic realm="${config.basicAuthRealm}"`)
    throw createError({
      statusCode: 401,
      statusMessage: 'Authentication required',
    })
  }

  const encodedCredentials = authorization.slice('Basic '.length).trim()
  const decodedCredentials = decodeBase64(encodedCredentials)
  const separatorIndex = decodedCredentials.indexOf(':')

  if (separatorIndex === -1) {
    setResponseHeader(event, 'WWW-Authenticate', `Basic realm="${config.basicAuthRealm}"`)
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid authentication format',
    })
  }

  const username = decodedCredentials.slice(0, separatorIndex)
  const password = decodedCredentials.slice(separatorIndex + 1)

  if (username !== config.basicAuthUsername || password !== config.basicAuthPassword) {
    setResponseHeader(event, 'WWW-Authenticate', `Basic realm="${config.basicAuthRealm}"`)
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials',
    })
  }
})

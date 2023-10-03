import smConfig from '~/slicemachine.config.json'

export default function errorLog (e, { type, uid, statusCode, shouldThrow = false }) {
  const repeatableErrorAddition = uid ? ` with the UID "${uid}"` : ''
  const message = `WARNING: Couldn't find a "${type}" document${repeatableErrorAddition} in the Prismic repo "${smConfig.repositoryName}"`

  // eslint-disable-next-line no-console
  console.error(message)
  if (shouldThrow) {
    throw new Error(message, { statusCode })
  }
}

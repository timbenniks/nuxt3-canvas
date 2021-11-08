import contentful from 'contentful'
const { createClient } = contentful

import config from '#config'

export const getClient = () => {
  const client = createClient({
    space: config.contentful.SPACE_ID,
    environment: config.contentful.ENVIRONMENT,
    accessToken: config.contentful.CDA_ACCESS_TOKEN,
  })

  return client
}

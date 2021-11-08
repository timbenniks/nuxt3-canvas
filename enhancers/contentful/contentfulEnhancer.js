import { createContentfulEnhancer } from "@uniformdev/canvas-contentful";
import contentful from 'contentful'
const { createClient } = contentful

import config from '#config'

export const contentfulEnhancer = () => {
  const client = createClient({
    space: config.contentful.SPACE_ID,
    environment: config.contentful.ENVIRONMENT,
    accessToken: config.contentful.CDA_ACCESS_TOKEN,
  });

  const previewClient = createClient({
    space: config.contentful.SPACE_ID,
    environment: config.contentful.ENVIRONMENT,
    accessToken: config.contentful.CPA_ACCESS_TOKEN,
    host: "preview.contentful.com",
  });

  return createContentfulEnhancer({
    client,
    previewClient,
    useBatching: false,
    createQuery: ({ defaultQuery }) => {
      return {
        ...defaultQuery,
        select: "fields,metadata.tags",
        include: 1,
      };
    },
  });
};

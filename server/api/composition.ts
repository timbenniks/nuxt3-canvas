import { CanvasClient, enhance } from "@uniformdev/canvas";
import { enhancers } from '../../enhancers'

import config from '#config'

export default async () => {
  const client = new CanvasClient({
    apiKey: config.uniform.API_KEY,
    projectId: config.uniform.PROJECT_ID
  });

  const { composition } = await client.getCompositionBySlug({
    slug: "/about",
  });

  await enhance({
    composition,
    enhancers,
    context: {
      preview: false,
    },
  });

  return { composition };
}

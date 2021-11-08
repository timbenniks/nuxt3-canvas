import { CanvasClient, enhance } from "@uniformdev/canvas";
import { enhancers } from '../../enhancers'

export default async () => {
  const client = new CanvasClient({
    apiKey:
      process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID
  });

  const { composition } = await client.getCompositionBySlug({
    slug: "/about",
  });


  const context = {
    preview: false,
  };

  await enhance({
    composition,
    enhancers,
    context,
  });

  return { composition };
}
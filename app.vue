<template>dd</template>

<script>
import { CanvasClient } from "@uniformdev/canvas";

export default {
  async setup() {
    const { $config } = useNuxtApp();

    const client = new CanvasClient({
      apiKey: $config.UNIFORM_API_KEY,
      projectId: $config.UNIFORM_PROJECT_ID,
    });

    const { composition } = await client.getCompositionBySlug({
      slug: "/about",
    });

    return { composition };
  },
};
</script>

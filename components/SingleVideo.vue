<template>
  <VideoCard :video="video" :variant="variant" />
</template>

<script>
export default {
  props: {
    uniformData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    video() {
      const { slug, title, poster, description, tags, date } =
        this.uniformData.parameters.contentfulItem.value

      return {
        slug,
        title,
        description,
        tags,
        date,
        poster: {
          src: poster.src,
          alt: title,
          ratio: `${poster.width}:${poster.height}`,
        },
      }
    },

    variant() {
      return this.uniformData?.variant || 'small'
    },
  },
}
</script>

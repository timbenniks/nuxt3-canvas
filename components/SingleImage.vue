<template>
  <AtomsMedia
    :url="image.url"
    :alt="image.alt"
    :ratio="image.ratio"
    sizes="sm:300 md:592"
    class="with-fancy-bg"
    :class="variant"
  />
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
    image() {
      const { image } = this.uniformData.parameters.contentfulItem.value || {}

      return {
        alt: image.alt,
        url: image.src,
        ratio: `${image.width}:${image.height}`,
      }
    },

    variant() {
      const variant = this.uniformData.variant
      return variant === 'darkBackground' ? 'bg-blue-dark' : 'bg-blue-light'
    },
  },
}
</script>

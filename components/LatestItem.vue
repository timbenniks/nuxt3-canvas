<template>
  <div class="latest-item" :class="[bg, variant]">
    <VideoCard v-if="type === 'video'" :video="item" variant="featured" />
    <BlogCard v-if="type === 'blog'" :blog="item" variant="big" />
  </div>
</template>

<script>
export default {
  name: 'LatestItem',
  props: {
    uniformData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      return this.uniformData.parameters?.type?.value || 'video'
    },
    item() {
      return this.uniformData?.data?.item
    },
    variant() {
      const variant = this.uniformData.variant
      return variant === 'withPadding' ? 'p-8' : 'p-0'
    },
    bg() {
      const tint = this.uniformData.parameters.backgroundColour.value
      return tint === 'dark' ? 'bg-blue-darker' : 'bg-blue-comp'
    },
  },
}
</script>

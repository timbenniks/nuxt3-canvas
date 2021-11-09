<template>
  <div class="rich-text prose" v-html="content"></div>
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
    content() {
      const { content } = this.uniformData.parameters.contentfulItem.value
      return content
    },
  },
}
</script>

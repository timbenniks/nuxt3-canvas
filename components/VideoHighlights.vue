<template>
  <div class="video-highlights p-8" :class="bg">
    <AtomsHeading
      tag="h2"
      :title="title"
      class="title bg-red text-2xl sm:text-4xl mb-2"
    />

    <p v-if="description" class="mb-8 prose" v-html="description"></p>
    <div class="video-highlights-videos">
      <slot-content
        v-if="uniformData"
        slot-name="featured"
        :uniform-data="uniformData.slots"
      />
      <slot-content
        v-if="uniformData"
        slot-name="videos"
        :uniform-data="uniformData.slots"
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8"
      />
    </div>
  </div>
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
    bg() {
      const tint = this.uniformData.parameters.backgroundColour.value
      return tint === 'dark' ? 'bg-blue-darker' : 'bg-blue-comp'
    },

    title() {
      return this.uniformData.parameters?.title?.value
    },

    description() {
      return this.uniformData.parameters?.description?.value
    },
  },
}
</script>

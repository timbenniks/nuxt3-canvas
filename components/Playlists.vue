<template>
  <div class="playlists p-8" :class="bg">
    <AtomsHeading
      tag="h3"
      :title="title"
      class="title bg-red text-2xl sm:text-4xl mb-4"
    />
    <p class="mb-8">
      <nuxt-link to="/playlists" class="link link-cta"
        >SEE ALL PLAYLISTS</nuxt-link
      >
    </p>
    <slot-content
      v-if="uniformData"
      slot-name="playlists"
      :uniform-data="uniformData.slots"
      class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
    />
  </div>
</template>

<script>
export default {
  name: 'Playlists',
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
  },
}
</script>

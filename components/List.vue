<template>
  <div class="list p-8" :class="bg">
    <AtomsHeading
      v-if="title !== ''"
      tag="h3"
      :title="title"
      class="title bg-blue-light text-xl sm:text-3xl mb-4"
    />

    <div v-if="withFilters" class="mb-8 bg-blue-dark p-4">
      <p class="font-bold text-lg">
        {{ items.length }} Results.
        <nuxt-link v-if="activeTags.length > 0" to="/tags" class="underline"
          >Clear filters</nuxt-link
        >
      </p>
      <ul class="mt-4">
        <AtomsTag
          v-for="tag in tags"
          :key="tag"
          :title="tag"
          :selected="activeTags.includes(tag)"
        />
      </ul>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12"
      :class="{
        'lg:grid-cols-2': type === 'talk',
        'lg:grid-cols-3': type !== 'talk',
      }"
    >
      <template v-for="item in items">
        <video-card
          v-if="item.videoId"
          :key="`/videos/${item.slug}`"
          :video="item"
          variant="small"
        />
        <playlist-card
          v-else-if="item.videos"
          :key="`/playlist/${item.slug}`"
          :playlist="item"
          variant="small"
        />
        <talk-card
          v-else-if="item.link"
          :key="`/talk/${item.slug}`"
          :talk="item"
        />
        <blog-card
          v-else
          :key="`/writings/${item.slug}`"
          :blog="item"
          variant="list"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    uniformData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    withFilters() {
      return this.uniformData.variant === 'withFilters'
    },
    tags() {
      return this.uniformData.data?.list?.tags || []
    },
    activeTags() {
      const tag = this.uniformData.data?.list?.tag || false

      if (!tag) {
        return []
      }

      let result = [tag]

      if (tag.includes(',')) {
        result = tag.split(',')
      }

      return result
    },
    items() {
      return this.uniformData.data?.list?.items || []
    },
    title() {
      return this.uniformData.parameters?.title?.value
    },
    type() {
      return this.uniformData.parameters?.type?.value
    },
    bg() {
      const tint = this.uniformData.parameters.backgroundColour.value
      return tint === 'dark' ? 'bg-blue-darker' : 'bg-blue-comp'
    },
  },
}
</script>

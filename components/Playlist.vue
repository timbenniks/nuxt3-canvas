<template>
  <playlist-card :playlist="playlist" />
</template>

<script>
import PlaylistCard from './PlaylistCard.vue'
export default {
  name: 'Playlist',
  components: { PlaylistCard },
  props: {
    uniformData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    playlist() {
      const { slug, title, poster } =
        this.uniformData.parameters.contentfulItem.value

      return {
        slug,
        title,
        poster,
      }
    },
  },
}
</script>

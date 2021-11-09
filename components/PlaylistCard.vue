<template>
  <div class="playlist">
    <nuxt-link :to="`/playlists/${playlist.slug}`" class="block">
      <AtomsMedia
        :url="playlist.poster.src"
        :alt="playlist.title"
        :ratio="playlist.poster.ratio"
        sizes="sm:300 md:500 lg:700"
        class="w-full mr-4 mb-6 with-fancy-bg"
      />
      <h3 class="title text-lg bg-red mb-4">
        {{ playlist.title }}
      </h3>
      <div
        v-if="playlist.description"
        class="prose mb-4 line-clamp-3"
        v-html="playlist.description"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
}
</script>

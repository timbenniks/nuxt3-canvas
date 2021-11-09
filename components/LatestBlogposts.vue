<template>
  <div class="latest-blogposts">
    <h3 class="title text-2xl md:text-4xl mb-8">{{ title }}</h3>
    <ul>
      <li v-for="post in posts" :key="post.slug" class="mb-12">
        <BlogCard :blog="post" variant="small" />
      </li>
    </ul>
    <p>
      <nuxt-link to="/writings" class="link link-selected"
        >SEE ALL WRITING</nuxt-link
      >
    </p>
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
    posts() {
      return this.uniformData.data.posts
    },
    title() {
      return this.uniformData.parameters.title.value
    },
  },
}
</script>

<style lang="postcss">
.article-list-item {
  @apply w-full;

  @screen sm {
    width: calc(100% - theme('width.48'));
  }
}
</style>

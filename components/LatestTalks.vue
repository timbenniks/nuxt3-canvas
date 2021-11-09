<template>
  <div class="latest-talks">
    <h3 class="title text-2xl md:text-4xl mb-8">{{ title }}</h3>
    <ul>
      <li v-for="talk in talks" :key="talk.slug" class="mb-12">
        <TalkCard :talk="talk" />
      </li>
    </ul>

    <p>
      <nuxt-link to="/speaking" class="link link-selected"
        >SEE ALL TALKS</nuxt-link
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
    talks() {
      return this.uniformData.data.talks
    },
    title() {
      return this.uniformData.parameters?.title?.value || ''
    },
  },
}
</script>
<style lang="postcss">
.talk-title {
  box-shadow: -8px 0 0 theme('colors.blue.light');
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  white-space: initial;
  position: relative;
  left: 6px;
}

.talk-list-item {
  width: calc(100% - theme('width.24'));
}
</style>

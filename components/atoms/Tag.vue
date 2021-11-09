<template>
  <component
    :is="tag"
    class="link text-sm mr-2 px-2 mb-2 inline-block uppercase"
    :class="{ 'bg-blue-light': selected, 'bg-red': !selected }"
  >
    <nuxt-link :to="`/tags/${title}`">{{ title }}</nuxt-link>
  </component>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tag: {
      type: String,
      default: 'li',
    },
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <figure
    :class="wrapperClasses"
    :style="{ 'aspect-ratio': ratio.replace(':', '/') }"
  >
    <nuxt-img
      :src="url"
      :alt="alt"
      :sizes="sizes"
      :provider="provider"
      :loading="loadingType"
      :width="parseRatioForWH(ratio, 'width')"
      :height="parseRatioForWH(ratio, 'height')"
      :class="classes"
      fit="fill"
    />

    <slot />
  </figure>
</template>

<script>
export default {
  name: 'Media',
  props: {
    alt: { type: String, required: true },
    url: { type: String, required: true },
    sizes: { type: String, required: false, default: '' },
    loadingType: { type: String, required: false, default: 'lazy' },
    ratio: { type: String, required: true },
    provider: { type: String, required: false, default: 'cloudinary' },
    classes: { type: String, required: false, default: '' },
    wrapperClasses: { type: String, required: false, default: '' },
  },

  methods: {
    parseRatioForWH(ratio, which) {
      return Number(ratio.split(':')[which === 'width' ? 0 : 1])
    },
  },
}
</script>

<style lang="postcss">
.with-fancy-bg {
  @apply relative;

  img {
    @apply absolute z-10;
  }
}

.with-fancy-bg:before {
  content: '';
  @apply absolute w-full h-full -bottom-2 -right-2 bg-blue-dark z-0;
}

.with-fancy-bg.bg-blue-light:before {
  content: '';
  @apply bg-blue-light;
}
</style>

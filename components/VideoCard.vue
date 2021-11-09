<template>
  <div class="single-video">
    <template v-if="variant === 'big'">
      <div class="flex flex-col md:flex-row pb-8">
        <AtomsMedia
          :url="video.poster.src"
          :alt="video.poster.alt"
          :ratio="video.poster.ratio"
          sizes="sm:400 md:729"
          class="with-fancy-bg bg-blue-dark w-full md:w-3/5 relative"
        >
          <AtomsPlay />
        </AtomsMedia>

        <div class="w-full mt-4 md:mt-0 md:w-2/5 md:pr-4 md:pl-8">
          <nuxt-link :to="`/videos/${video.slug}`">
            <AtomsHeading
              tag="h4"
              :title="video.title"
              class="text-3xl uppercase font-black mb-4"
            />
          </nuxt-link>
          <ul class="mb-4 md:hidden lg:block">
            <AtomsDate
              :day="video.date.day"
              :month="video.date.month"
              :year="video.date.year"
              tag="li"
              type="small"
            />

            <AtomsTag v-for="tag in video.tags" :key="tag" :title="tag" />
          </ul>
          <p class="line-clamp-2 mb-8">
            {{ video.description }}
          </p>
          <p>
            <nuxt-link :to="`/videos/${video.slug}`" class="link link-cta px-2"
              >WATCH VIDEO</nuxt-link
            >
          </p>
        </div>
      </div>
    </template>

    <template v-if="variant === 'featured'">
      <AtomsHeading
        tag="h2"
        :title="video.title"
        class="title text-3xl bg-red inline pl-0 featured-title"
      />
      <div class="flex flex-col md:flex-row mt-8">
        <AtomsMedia
          :url="video.poster.src"
          :alt="video.poster.alt"
          :ratio="video.poster.ratio"
          sizes="sm:400 md:729"
          class="with-fancy-bg bg-blue-dark w-full md:w-3/5 relative"
        >
          <AtomsPlay />
        </AtomsMedia>

        <div class="w-full mt-4 md:mt-0 md:w-2/5 md:pr-4 md:pl-8">
          <ul class="mb-4 md:hidden lg:block">
            <AtomsDate
              :day="video.date.day"
              :month="video.date.month"
              :year="video.date.year"
              tag="li"
              type="small"
            />
            <AtomsTag v-for="tag in video.tags" :key="tag" :title="tag" />
          </ul>
          <div class="prose mb-8" v-html="video.content"></div>
        </div>
      </div>
    </template>
    <template v-if="variant === 'small'">
      <div class="flex flex-col">
        <nuxt-link :to="`/videos/${video.slug}`">
          <AtomsMedia
            :url="video.poster.src"
            :alt="video.poster.alt"
            :ratio="video.poster.ratio"
            sizes="sm:373 lg:592"
            class="with-fancy-bg bg-blue-dark relative"
          >
            <AtomsPlay />
          </AtomsMedia>
        </nuxt-link>
        <nuxt-link :to="`/videos/${video.slug}`">
          <AtomsHeading
            tag="h4"
            :title="video.title"
            class="text-xl uppercase my-4 line-clamp-1 font-black"
          />
        </nuxt-link>

        <ul>
          <AtomsDate
            :day="video.date.day"
            :month="video.date.month"
            :year="video.date.year"
            tag="li"
            type="small"
          />
          <AtomsTag v-for="tag in video.tags" :key="tag" :title="tag" />
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: 'small',
    },
  },
}
</script>

<style lang="postcss" scoped>
.featured-title {
  box-shadow: -8px 0 0 theme('colors.red');
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  white-space: initial;
  position: relative;
  left: 6px;
  top: 5px;
}
</style>

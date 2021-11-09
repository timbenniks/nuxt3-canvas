<template>
  <div class="single-blog">
    <template v-if="variant === 'big'">
      <div class="pb-8">
        <AtomsHeading
          tag="h2"
          :title="blog.title"
          class="title text-3xl bg-red inline pl-0 featured-title"
        />
        <div class="flex flex-col md:flex-row pb-8 mt-8">
          <AtomsMedia
            :url="blog.poster.src"
            :alt="blog.poster.alt"
            :ratio="blog.poster.ratio"
            sizes="sm:400 md:700 lg:900"
            class="with-fancy-bg bg-blue-dark w-full md:w-3/5 relative"
          />

          <div class="w-full mt-4 md:mt-0 md:w-2/5 md:pr-4 md:pl-8">
            <AtomsHeading
              tag="h4"
              :title="blog.subTitle"
              class="text-lg lg:text-xl line-clamp-3 uppercase font-black mb-4"
            />

            <ul class="mb-4 md:hidden lg:block">
              <AtomsDate
                :day="blog.date.day"
                :month="blog.date.month"
                :year="blog.date.year"
                tag="li"
                type="small"
              />
              <AtomsTag v-for="tag in blog.tags" :key="tag" :title="tag" />
            </ul>
            <div
              class="prose line-clamp-4 mb-8"
              v-html="blog.description"
            ></div>
            <p>
              <nuxt-link
                :to="`/writings/${blog.slug}`"
                class="link link-cta px-2"
                >READ THE ARTICLE</nuxt-link
              >
            </p>
          </div>
        </div>
      </div>
    </template>
    <template v-if="variant === 'list'">
      <div class="flex flex-col">
        <nuxt-link :to="`/writings/${blog.slug}`">
          <AtomsMedia
            :url="blog.poster.src"
            :alt="blog.poster.alt"
            ratio="400:225"
            sizes="sm:373 lg:592"
            class="with-fancy-bg bg-blue-dark relative"
          />
        </nuxt-link>
        <nuxt-link :to="`/writings/${blog.slug}`">
          <AtomsHeading
            tag="h4"
            :title="blog.title"
            class="text-xl uppercase my-4 line-clamp-2 font-black underline"
          />
        </nuxt-link>

        <ul>
          <AtomsDate
            :day="blog.date.day"
            :month="blog.date.month"
            :year="blog.date.year"
            tag="li"
            type="small"
          />
          <AtomsTag v-for="tag in blog.tags" :key="tag" :title="tag" />
        </ul>
      </div>
    </template>
    <template v-if="variant === 'small'">
      <nuxt-link :to="`/writings/${blog.slug}`" class="block sm:flex">
        <AtomsMedia
          :url="blog.poster.src"
          :alt="blog.title"
          ratio="400:225"
          sizes="xs:186"
          class="w-full sm:w-48 mr-4 with-fancy-bg"
        />
        <article class="article-list-item">
          <p class="text-xs uppercase my-2 text-blue-subtle">
            {{ blog.publicationDate }}
          </p>
          <h4 class="title text-sm bg-blue-dark inline pl-0 flowing-title">
            {{ blog.title }}
          </h4>
          <p class="mt-1 line-clamp-1">{{ blog.description }}</p>
        </article>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
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

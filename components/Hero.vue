<template>
  <div
    class="hero w-full relative z-0 mt-20 md:mt-0"
    :class="{ 'no-image': variant === 'noImage' }"
  >
    <AtomsMedia
      v-if="variant !== 'noImage' && fields.image"
      :url="fields.image.src"
      :alt="fields.image.alt"
      ratio="160:80"
      wrapper-classes="w-full h-auto block"
      sizes="xs:400 sm:900 lg:1280"
      class="absolute"
      loading-type="eager"
    />
    <article
      class="hero-copy-wrapper"
      :class="{ 'center-it': variant !== 'noImage' }"
    >
      <ol
        v-if="variant === 'noImage'"
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
      >
        <li
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <nuxt-link
            to="/"
            itemtype="https://schema.org/Thing"
            itemprop="item"
            class="underline"
          >
            <span itemprop="name">Home</span>
          </nuxt-link>
          <meta itemprop="position" content="1" />
        </li>
        <li
          v-for="(crumb, index) in crumbs"
          :key="crumb.path"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <nuxt-link
            :to="crumb.to.includes('/tag/') ? `/videos${crumb.to}` : crumb.to"
            itemtype="https://schema.org/Thing"
            itemprop="item"
            class="underline"
          >
            <span itemprop="name">{{ crumb.text }}</span>
          </nuxt-link>

          <meta :content="index + 2" itemprop="position" />
        </li>
      </ol>

      <h1 class="overflow-hidden">
        <span
          v-if="fields.chapeau"
          class="title block float-left sm:text-xl md:text-2xl lg:text-3xl"
          >{{ fields.chapeau }}</span
        >
        <span
          v-if="fields.title"
          class="
            title
            block
            float-left
            clear-left
            text-2xl
            sm:text-3xl
            md:text-6xl
            lg:text-7xl
          "
          :class="{
            'bg-blue-dark': variant !== 'noImage',
            'bg-blue-light': variant === 'noImage',
          }"
          >{{ fields.title }}</span
        >
      </h1>

      <h2 v-if="fields.subTitle" class="title bg-red mb-4">
        {{ fields.subTitle }}
      </h2>

      <p
        v-if="fields.description"
        class="description clear-left text-base"
        :class="{
          'mt-4': variant === 'noImage',
          'max-w-sm': variant !== 'noImage',
          'text-shadow': variant !== 'noImage',
        }"
        v-html="fields.description"
      ></p>

      <section
        v-if="fields.showSocialIcons"
        class="social-icons flex mt-2 clear-left"
      >
        <AtomsIcon icon="twitter" url="https://twitter.com/timbenniks" />
        <AtomsIcon icon="youtube" url="https://youtube/timbenniks" />
        <AtomsIcon icon="github" url="https://github.com/timbenniks" />
        <AtomsIcon icon="linkedin" url="https://linkedin.com/in/timbenniks" />
      </section>
    </article>
    <svg
      v-if="variant !== 'noImage'"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      class="
        absolute
        hidden
        md:block
        left-2/4
        bottom-8
        w-9
        h-9
        -translate-x-1/2
      "
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.0002 45.8331C13.5002 45.8331 4.16687 36.479 4.16687 24.9998C4.16687 13.4998 13.5002 4.16646 25.0002 4.16646C36.4794 4.16646 45.8335 13.4998 45.8335 24.9998C45.8335 36.479 36.4794 45.8331 25.0002 45.8331ZM33.3335 20.8748C32.7085 20.2706 31.7294 20.2706 31.1252 20.8956L25.0002 27.0415L18.8752 20.8956C18.271 20.2706 17.271 20.2706 16.6669 20.8748C16.0419 21.4998 16.0419 22.479 16.6669 23.0831L23.896 30.354C24.1877 30.6456 24.5835 30.8123 25.0002 30.8123C25.4169 30.8123 25.8127 30.6456 26.1044 30.354L33.3335 23.0831C33.646 22.7915 33.7919 22.3956 33.7919 21.9998C33.7919 21.5831 33.646 21.1873 33.3335 20.8748Z"
        fill="white"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'Hero',
  props: {
    uniformData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    crumbs() {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        if (path) {
          breadcrumbArray.push({
            path,
            to: breadcrumbArray[idx - 1]
              ? '/' + breadcrumbArray[idx - 1].path + '/' + path
              : '/' + path,
            text: path
              .replace(/-/g, ' ')
              .toLowerCase()
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' '),
          })
        }
        return breadcrumbArray
      }, [])
      return breadcrumbs
    },

    variant() {
      return this.uniformData.variant
    },
    fields() {
      const {
        chapeau,
        title,
        subTitle,
        image,
        description,
        showSocialIcons,
        showNavigation,
        showSearch,
      } = this.uniformData.parameters.contentfulItem.value || {}

      return {
        chapeau,
        title,
        subTitle,
        image,
        description,
        showSocialIcons,
        showNavigation,
        showSearch,
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  aspect-ratio: 16/8;
}

.center-it {
  @apply absolute bottom-4 left-4 sm:left-12 sm:top-2/4 sm:-translate-y-2/4 sm:bottom-auto lg:left-20;
}

.hero.no-image {
  aspect-ratio: unset;
}

@supports not (aspect-ratio: 16/8) {
  .hero {
    @apply aspect-w-16 aspect-h-8;
  }
}

.no-image article {
  @apply mt-20 pt-8 ml-8 pb-8 xl:ml-0;
}

.description,
.social-icons {
  @media (max-width: 840px) {
    @apply sr-only;
  }
}

.hero-copy-wrapper {
  font-size: 0;
}

ol {
  @apply flex text-base mr-3 mb-2 text-blue-subtle;

  li {
    @apply mr-6 relative;
  }

  li:before {
    content: '›';
    @apply font-black -left-3 absolute top-0;
  }

  li:last-child {
    @apply m-0;
  }

  li:first-child::before {
    @apply hidden;
  }
}
</style>

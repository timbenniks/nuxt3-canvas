<template>
  <header class="bg-blue-nav h-20 bg-opacity-80 fixed w-full top-0 left-0 z-20">
    <div class="mx-auto max-w-screen-xl h-20 flex justify-between">
      <nuxt-link to="/">
        <AtomsMedia
          class="w-12 ml-4 mt-4"
          url="/icon.png"
          alt="Logo Tim Benniks"
          provider="static"
          ratio="88:88"
          sizes="sm:88"
          classes="rounded-full border-white border-2"
      /></nuxt-link>

      <ul class="space-x-6 leading-8 items-center mr-4 hidden lg:flex">
        <li>
          <nuxt-link rel="noopener" to="/about" class="link">ABOUT</nuxt-link>
        </li>
        <li>
          <nuxt-link rel="noopener" to="/videos" class="link"
            >VIDEO CREATOR</nuxt-link
          >
        </li>
        <li>
          <nuxt-link rel="noopener" to="/speaking" class="link"
            >SPEAKER</nuxt-link
          >
        </li>
        <li>
          <nuxt-link rel="noopener" to="/writings" class="link"
            >BLOGGER</nuxt-link
          >
        </li>
        <li class="inline-flex">
          <AtomsIcon icon="twitter" url="https://twitter.com/timbenniks" />
          <AtomsIcon icon="github" url="https://github.com/timbenniks" />
          <AtomsIcon icon="linkedin" url="https://linkedin.com/in/timbenniks" />
        </li>
        <li>
          <nuxt-link rel="noopener" to="/contact" class="link link-selected"
            >LET'S CHAT</nuxt-link
          >
        </li>
      </ul>

      <button
        class="w-12 h-12 relative mr-4 mt-3 lg:hidden"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span class="sr-only">Open main menu</span>
        <div
          class="
            block
            w-6
            absolute
            left-1/2
            top-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
          "
        >
          <span
            aria-hidden="true"
            class="hamburger-bar"
            :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
          ></span>
          <span
            aria-hidden="true"
            class="hamburger-bar"
            :class="{ 'opacity-0': open }"
          ></span>
          <span
            aria-hidden="true"
            class="hamburger-bar"
            :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
          ></span>
        </div>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
header {
  backdrop-filter: blur(6px);
}

.hamburger-bar {
  @apply block
        absolute
        h-0.5
        w-6
        bg-white
        transform
        transition
        duration-500
        ease-in-out;
}
</style>

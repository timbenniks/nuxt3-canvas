<template>
  <footer class="px-6 py-6 mx-auto max-w-screen-xl bg-blue-darker">
    <nav class="flex justify-between">
      <ul
        class="lg:space-x-6 leading-8 lg:items-center flex flex-col lg:flex-row"
      >
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
        <li>
          <nuxt-link rel="noopener" to="/contact" class="link"
            >LET'S CHAT</nuxt-link
          >
        </li>
        <li>
          <nuxt-link rel="noopener" to="/feed.xml" class="link"
            >RSS FEED</nuxt-link
          >
        </li>
      </ul>

      <ul class="flex flex-col lg:flex-row">
        <li class="inline-flex">
          <AtomsIcon icon="twitter" url="https://twitter.com/timbenniks" />
          <AtomsIcon icon="github" url="https://github.com/timbenniks" />
          <AtomsIcon icon="linkedin" url="https://linkedin.com/in/timbenniks" />
        </li>
        <li>
          <a
            href="https://www.buymeacoffee.com/timbenniks"
            target="_blank"
            rel="noopener"
            title="Buy Tim Benniks a Coffee"
          >
            <AtomsMedia
              class="w-36 mt-2 lg:mt-0 lg:ml-4"
              url="/bmac.png"
              alt="Buy me a coffee"
              provider="static"
              ratio="545:153"
              sizes="sm:140 lg:300"
            />
          </a>
        </li>
      </ul>
    </nav>
    <div class="mt-4 lg:justify-between flex flex-col lg:flex-row">
      <p>
        Made with <em class="text-red not-italic">♥</em> by Tim Benniks 2021
      </p>
      <AtomsMedia
        class="w-36 mt-2 lg:mt-0 lg:ml-4"
        url="/built-with-nuxt.png"
        alt="Build with Nuxt"
        provider="static"
        ratio="336:44"
        sizes="sm:140 lg:336"
      />
    </div>
  </footer>
</template>

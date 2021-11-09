<template>
  <a :href="talk.link" class="flex w-full" rel="noopener" target="_blank">
    <AtomsDate
      :day="talk.date.day"
      :month="talk.date.month"
      :year="talk.date.year"
      class="w-24"
    />
    <article class="talk-list-item mt-1">
      <h4>
        <span class="title text-sm bg-blue-light inline pl-0 talk-title">
          {{ talk.conference }}
        </span>
        <span
          v-if="talk.date.upcoming"
          class="title text-sm bg-red inline pl-2 talk-title"
        >
          UPCOMING
        </span>
      </h4>

      <p class="mt-1 line-clamp-2">{{ talk.talk }}</p>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    talk: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <component :is="tag" class="date-field inline-block">
    <template v-if="type === 'large'">
      <div class="mr-4 item-date">
        <div
          class="
            date-wrap
            bg-blue-dark
            py-2
            px-4
            text-white
            uppercase
            text-center
            font-black
          "
        >
          <span class="block leading-none text-4xl pb-1">{{ day }}</span>
          <span class="block leading-none text-lg pb-1 uppercase">{{
            month
          }}</span>
          <span class="block leading-none text-lg pb-1">{{ year }}</span>
        </div>
      </div>
    </template>

    <template v-if="type === 'small'">
      <span
        class="
          text-black
          uppercase
          bg-yellow
          font-bold
          py-1
          mr-1
          px-2
          block
          text-sm
        "
        >{{ day }} {{ month }} {{ year }}</span
      >
    </template>
  </component>
</template>

<script>
export default {
  name: 'Date',
  props: {
    day: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'large',
    },
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
  },
}
</script>

<style scoped lang="postcss">
.item-date {
  @apply relative;
  aspect-ratio: 6/7;

  .date-wrap {
    @apply relative z-10;
  }
}

.item-date:before {
  content: '';
  @apply absolute w-full h-full -bottom-1 -right-1 bg-blue-light z-0;
}
</style>

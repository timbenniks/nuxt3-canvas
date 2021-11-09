<template>
  <div class="two-column flex flex-col md:flex-row p-8" :class="bg">
    <slot-content
      v-if="uniformData"
      slot-name="itemA"
      :uniform-data="uniformData.slots"
      class="pb-8 md:pb-0 md:pr-4"
      :class="variant.left"
    />
    <slot-content
      v-if="uniformData"
      slot-name="itemB"
      :uniform-data="uniformData.slots"
      class="md:pl-4"
      :class="variant.right"
    />
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
    variant() {
      const { variant } = this.uniformData
      let left = 'w-full md:w-2/4'
      let right = 'w-full md:w-2/4'

      if (variant === 'smallRight') {
        left = 'w-full md:w-3/5'
        right = 'w-full md:w-2/5'
      }

      if (variant === 'smallLeft') {
        left = 'w-full md:w-2/5'
        right = 'w-full md:w-3/5'
      }

      return {
        left,
        right,
      }
    },

    bg() {
      const tint = this.uniformData.parameters.backgroundColour.value
      return tint === 'dark' ? 'bg-blue-darker' : 'bg-blue-comp'
    },
  },
}
</script>

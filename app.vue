<template>
  <composition :composition="data.composition">
    <template #default>
      <pre>{{ data.composition }}</pre>
    </template>
  </composition>
</template>
<script>
import { composition, slotContent } from "@uniformdev/canvas-vue";
export default defineComponent({
  components: {
    composition,
    slotContent,
  },
  async setup() {
    const { data } = await useAsyncData("c", () => $fetch("/api/composition"));

    return {
      data,
    };
  },
});
</script>

<template>{{ data }}</template>

<script setup>
const { data } = await useAsyncData("composition", () =>
  $fetch("/api/composition")
);
</script>

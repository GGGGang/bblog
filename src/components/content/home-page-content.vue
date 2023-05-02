<template lang="pug">
.home-page-content
  hot-list
  article-block(:params = "params")
</template>

<script setup>
import { ref, reactive } from "vue";
const params = {
  isNew: true,
};
</script>

<style scoped lang="scss"></style>

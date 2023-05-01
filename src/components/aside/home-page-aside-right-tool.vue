<template lang="pug">
.home-page-aside-right-tool 
  aside-large-button(v-bind = "toolConfig1")
  nav-right-user-center(v-bind = "toolConfig1")
  aside-large-button(v-bind = "toolConfig2")
  aside-adv(v-bind = "toolConfig2")
</template>
<script setup>
import { ref, reactive } from "vue";
const toolConfig1 = reactive({
  toolTitle: "BBlog漫游指南",
  toolText: "帮助开发者记录与成长的社区",
});
const toolConfig2 = reactive({
  selfIconText: "告",
  toolTitle: "版本更新",
  toolText: "本次更新内容包含 1. 新增摘录功能 2. 文章支持MD编辑器...",
});
</script>
<style lang="scss" scoped></style>

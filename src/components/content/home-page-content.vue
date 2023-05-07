<template lang="pug">
.home-page-content
  hot-list(v-if="showHotList")
  article-block
</template>

<script setup>
import { ref, watch } from "vue";
import { useTabIndex } from "@/store/tab";
const store = useTabIndex();
let showHotList = ref(false);
//初始化热门列表
function init(currentIndex) {
  showHotList.value = false;
  if (currentIndex.indexOf("hot") !== -1) {
    showHotList.value = true;
  }
}
watch(
  () => store.currentTabIndex,
  (toParams, previousParams) => {
    init(toParams);
  },
  { deep: true }
);
init(store.currentTabIndex);
</script>

<style scoped lang="scss"></style>

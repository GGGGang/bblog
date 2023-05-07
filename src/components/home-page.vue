<template lang="pug">
.home__container
  el-container
    el-header
      home-page-header
    el-main
      .home-page__main
        .home-page__main-content
          home-page-tab(v-if="showChildTab")
          router-view
        .home-page__main-tool
          home-page-aside-right-tool 
  </template>
<script setup>
import { ref, reactive, getCurrentInstance, watch } from "vue";
import { useTabIndex } from "@/store/tab";
const store = useTabIndex();
const { proxy } = getCurrentInstance();

let showChildTab = ref(true);

//初始化热门列表
function init(currentIndex) {
  showChildTab.value = true;
  if (
    currentIndex.indexOf("follow") !== -1 ||
    currentIndex.indexOf("answer") !== -1
  ) {
    showChildTab.value = false;
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

<style lang="scss" scoped>
.el-header {
  width: 100%;
  box-shadow: 0px -9px 15px 8px rgba(38, 57, 77, 0.3);
  display: flex;
  background-color: #fff;
  justify-content: center;
  position: fixed;
  z-index: 99;
}
.el-main {
  display: flex;
  justify-content: center;
  padding-top: 70px;
}
.home-page {
  &__main {
    display: flex;
    justify-content: space-between;
    width: calc(775px + 412px + 10px);
  }
}
.home__container {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #f6f6f6;
}
</style>

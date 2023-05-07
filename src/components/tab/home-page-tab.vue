<template lang="pug">
.home-page-tab
  el-menu(:default-active="tabIndex" active-text-color= "#056DE8" :router="true" :ellipsis="false" mode="horizontal" )
      el-menu-item(v-for="tab in tabs" :key="tab.index" :index="tab.index") {{ tab.label }}
</template>

<script setup>
import { ref, reactive, getCurrentInstance, watch } from "vue";
import { useTabIndex } from "@/store/tab";
const store = useTabIndex();
const { proxy } = getCurrentInstance();
const tabs = reactive([
  {
    label: "推荐",
    name: "recommend",
    index: "/article/recommend",
  },
  {
    label: "最新",
    name: "new",
    index: "/article/new",
  },
  {
    label: "热门",
    name: "recommend",
    index: "/article/hot",
  },
  {
    label: "回答",
    name: "comment",
    index: "/comment",
  },
]);
let tabIndex = ref("/article/recommend");

// 初始化tabIndex
function initIndex() {
  const type = proxy.$route.params.type;
  tabs.forEach((item) => {
    if (item.index.indexOf(type) !== -1) {
      tabIndex = item.index;
      store.changeTabIndex(item.index);
    }
  });
}
// 切换tab
watch(
  () => proxy.$route.fullPath,
  (toParams) => {
    store.changeTabIndex(toParams);
  },
  { deep: true }
);
initIndex();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-page-tab {
  background-color: white;
  border: 1px solid #f6f6f6;
  width: 775px;
  height: 64px;
}
.el-menu-item {
  font-size: 20px;
  font-weight: bolder;
}
.el-menu--horizontal {
  border-bottom: none;
  margin-top: 7px;
}
</style>

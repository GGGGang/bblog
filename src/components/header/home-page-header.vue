<template lang="pug">
.home-page-header
  .home-page-header__app-name BBlog
  el-menu(:default-active="tabIndex" active-text-color= "#056DE8" :router="true" :ellipsis="false" mode="horizontal" )
    el-menu-item(v-for="tab in tabs" :key="tab.index" :index="tab.index") {{ tab.label }}
  .home-page-header__avatar
    el-avatar.home-page-header__avatar-img(:size= "50" :src="require('@/assets/touxiang.png')")
    .home-page-header__avatar-name admin
</template>

<script setup>
import { ref, reactive, getCurrentInstance, watch } from "vue";
const { proxy } = getCurrentInstance();
import { useTabIndex } from "@/store/tab";
const store = useTabIndex();
let tabIndex = ref("/article/recommend");
const tabs = reactive([
  {
    label: "首页",
    name: "recommend",
    index: "/article/recommend",
  },
  {
    label: "关注",
    name: "new",
    index: "/follow",
  },
  {
    label: "评论",
    name: "answer",
    index: "/answer",
  },
]);

// 初始化tabIndex
function initIndex() {
  const type = proxy.$route.fullPath;
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
<style lang="scss" scoped>
.home-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 1440px;
  &__app-name {
    font-size: 24px;
    font-weight: bolder;
    display: inline-block;
    width: auto;
    height: auto;
    cursor: pointer;
  }

  &__avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-img {
      margin-right: 12px;
    }
    &-name {
      font-weight: 700;
    }
  }
  .el-menu--horizontal {
    border-bottom: none;
  }
}
.el-menu-item {
  font-size: 20px;
  font-weight: bolder;
}
</style>

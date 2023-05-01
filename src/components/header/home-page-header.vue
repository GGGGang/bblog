<template lang="pug">
.home-page-header
  .home-page-header__app-name BBlog
  el-menu(:default-active="activeIndex" active-text-color= "#056DE8" :router="true" :ellipsis="false" mode="horizontal" @select="handleSelect")
    el-menu-item(v-for="tab in tabs" :key="tab.index" :index="tab.index") {{ tab.label }}
  .home-page-header__avatar
    el-avatar.home-page__avatar-img(:size= "50" :src="require('@/assets/touxiang.png')")
    .home-page-header__avatar-name admin
</template>

<script setup>
import { ref, reactive } from "vue";
const activeIndex = ref("/HomePageContent");
const tabs = reactive([
  {
    label: "首页",
    name: "homePage",
    index: "/HomePageContent",
  },
  {
    label: "关注",
    name: "follow",
    index: "/about",
  },
  {
    label: "评论",
    name: "recommend",
    index: "3",
  },
]);
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
  }

  &__avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-img {
      margin-right: 12px;
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

<template lang="pug">
.home__container
  el-container
    el-header
      .home-page
        .home-page__app-name BBlog
        el-menu(:default-active="activeIndex" active-text-color= "#056DE8" :router="true" :ellipsis="false" mode="horizontal" @select="handleSelect")
          el-menu-item(v-for="tab in tabs" :key="tab.index" :index="tab.index") {{ tab.label }}
        .home-page__avatar
          el-avatar.home-page__avatar-img(:size= "50" :src="require('@/assets/logo.png')")
          .home-page__avatar-name admin
    el-main
      .home-page__main
        .home-page__main-content
          home-page-tab
          router-view
        .home-page__main-tool
          nav-right-tool(v-bind = "toolConfig1")
          nav-right-user-center(v-bind = "toolConfig1")
          nav-right-tool(v-bind = "toolConfig2")
  </template>
<script>
export default {
  name: "home-page",
  data() {
    return {
      activeIndex: "/HomePageContent",
      tabs: [
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
      ],
      toolConfig1: {
        toolTitle: "BBlog漫游指南",
        toolText: "帮助开发者记录与成长的社区",
      },
      toolConfig2: {
        selfIconText: "告",
        toolTitle: "版本更新",
        toolText: "本次更新内容包含 1. 新增摘录功能 2. 文章支持MD编辑器...",
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  box-shadow: 2px 12px 14px -11px rgba(38, 57, 77, 0.6);
  display: flex;
  background-color: #fff;
  justify-content: center;
}
.el-main {
  display: flex;
  justify-content: center;
  margin-top: 18px;
  padding: 0px 0px;
}
.home-page {
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
  &__main {
    display: flex;
    justify-content: space-between;
    width: calc(775px + 412px + 10px);
  }

  &__tab {
    width: 775px;
    height: 64px;
    background-color: red;
  }
}
.el-menu-item {
  font-size: 20px;
  font-weight: bolder;
}

.home__container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #f6f6f6;
}
</style>

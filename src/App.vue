<template lang="pug">
el-container.home__container
  el-header
    .home-page
      .home-page__app-name BBlog
      el-menu(:default-active="activeIndex" active-text-color= "#056DE8" :router="true" :ellipsis="false" mode="horizontal" @select="handleSelect")
        el-menu-item(v-for="tab in tabs" :key="tab.index" :index="tab.index") {{ tab.label }}
      .home-page__avatar
        el-avatar.home-page__avatar-img(:size= "50" :src="require('@/assets/logo.png')")
        .home-page__avatar-name admin
  el-main
    router-view
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/",
      tabs: [
        {
          label: "首页",
          name: "homePage",
          index: "/",
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
.el-main {
  margin-top: 18px;
}
.el-header {
  box-shadow: 2px 12px 14px -11px rgba(38, 57, 77, 0.6);
  display: flex;
  justify-content: center;
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
}
.el-menu-item {
  font-size: 20px;
  font-weight: bolder;
}

.el-main {
  background-color: #fff;
  color: #000;
  text-align: center;
}
</style>

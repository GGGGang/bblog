<template lang="pug">
.home-page-tab
  el-menu(:default-active="activeIndex" active-text-color= "#056DE8" :router="true" :ellipsis="false" mode="horizontal" @select="handleSelect")
      el-menu-item(v-for="tab in tabs" :key="tab.index" :index="tab.index") {{ tab.label }}
</template>

<script>
export default {
  name: "home-page-tab",
  props: {
    msg: String,
  },
  data() {
    return {
      activeIndex: "/",
      tabs: [
        {
          label: "推荐",
          name: "homePage",
          index: "/",
        },
        {
          label: "最新",
          name: "follow",
          index: "/about",
        },
        {
          label: "热门",
          name: "recommend",
          index: "3",
        },
        {
          label: "回答",
          name: "recommend2",
          index: "3",
        },
      ],
    };
  },
};
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

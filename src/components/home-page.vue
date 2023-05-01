<template lang="pug">
.home__container
  el-container
    el-header
      home-page-header
    el-main
      .home-page__main
        .home-page__main-content
          home-page-tab
          router-view
        .home-page__main-tool
          home-page-aside-right-tool 
  </template>
<script>
export default {
  name: "home-page",
};
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

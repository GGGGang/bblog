<template lang="pug">
.home-page-content(v-for="tab in tabs" :key="tab.name")
  el-skeleton( :rows="5" animated)
</template>

<script>
export default {
  name: "home-page-content",
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
        {
          label: "回答",
          name: "recommend3",
          index: "3",
        },
        {
          label: "回答",
          name: "recommend5",
          index: "3",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-page-content {
  background-color: white;
  border: 1px solid #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 775px;
  height: 300px;
}
.el-skeleton {
  margin: 24px;
}
</style>

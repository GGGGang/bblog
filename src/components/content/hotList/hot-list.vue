<template lang="pug">
.hot-list
  .hot-list-table(v-for="item in hotList")
    .hot-list-table__title 
      i(class="iconfont icon-yuanquan iconfont-hot") 
      .hot-list-table__title-text {{ item }}
    .hot-list-table__content
      hot-list-no(v-for="row in tableData" :row = "row")
</template>

<script setup>
import { ref, reactive } from "vue";
const hotList = reactive(["热门文章", "热门评论"]);
const tableData = reactive([
  {
    no: "1",
    content: "LOGO要这样排，你得PPT颜值不用愁",
  },
  {
    no: "2",
    content: "内涵青年最后的吐槽街区：知乎APP",
  },
  {
    no: "3",
    content: "薄如蝉翼的金华火腿，每一口都是时间的味道",
  },
  {
    no: "4",
    content: "从硅谷火到中国特斯拉发布全新半挂卡车Semi。",
  },
  {
    no: "5",
    content: "无聊青年最后的对话阵地：网易新闻评论区",
  },
]);
</script>

<style scoped lang="scss">
.hot-list {
  background-color: white;
  border: 1px solid #f6f6f6;
  display: flex;
  width: 775px;
  &-table {
    &__title {
      display: flex;
      justify-items: center;
      width: 200px;
      margin: 10px 0px 5px 20px;
      &-text {
        line-height: 38.33px;
      }
    }
  }
}
.iconfont {
  &-hot {
    font-size: 35px;
    font-weight: bolder;
    color: #ff0000;
  }
}
</style>

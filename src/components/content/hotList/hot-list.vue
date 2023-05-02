<template lang="pug">
.hot-list
  .hot-list-table
    .hot-list-table__title 
      i(class="iconfont icon-yuanquan iconfont-hot") 
      .hot-list-table__title-text 热门文章
    .hot-list-table__content
      el-table.hot-list-table__content-text(:data="tableData" :show-header="false")
        el-table-column(prop="no" width="80")
          template(#default="scope")
            hot-list-no(:row = "scope.row")
        el-table-column(prop="content" width="200")
</template>

<script setup>
import { ref, reactive } from "vue";
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

  width: 775px;
  height: 300px;
  &-table {
    &__title {
      display: flex;
      justify-items: center;
      width: 200px;
      &-text {
        line-height: 38.33px;
      }
    }
    &__content-text {
      font-size: 14px;
      color: #000;
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

<template lang="pug">
.article-block( v-for="article in list.articleList" :key="article.id")
    el-card(shadow="never")
      .article-block__publish-info 曹万华·{{ fmtDate(article.publishDate) }} 发表了一片文章 
      .article-block__title {{ article.title}}
      .article-block__content 
        img(src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image")
        .article-block__content-text {{ limitTextCount(article.summary) }} 
          el-button(text type='primary') 阅读全文 
            i(class="iconfont icon-youjiantou")
      .article-block__operation 
        el-button-group
          el-button(text)
            i(class="iconfont icon-shoucang iconfont-operation" style ="color:#e18a3b") 收藏
          el-button(text)
            i(class="iconfont icon-dianzan iconfont-operation" style ="color:#c8161d") 点赞
          el-button(text)
            i(class="iconfont icon-fenxiang iconfont-operation" style = "color:#056DE8") 分享
     
//- article-skeleton-block(v-else)
</template>

<script setup>
import { ref, reactive, getCurrentInstance, computed } from "vue";
let isLoad = ref(false);
let list = reactive({
  articleList: [],
});
const { proxy } = getCurrentInstance();
async function init() {
  isLoad = false;
  list.articleList = [];
  const { data } = await proxy.$https.getRequest("/article/get-list/by-page");
  if (data?.length) {
    list.articleList = data;
    isLoad = true;
  }
}

init();
function fmtDate(date) {
  return proxy.$moment(date).format("YYYY-MM-DD");
}
function limitTextCount(val) {
  let res = val;
  if (val?.length > 190) {
    res = val.substring(0, 190) + "...";
  }
  return res;
}
</script>

<style scoped lang="scss">
.article-block {
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

.image {
  width: 480px;
  height: 160px;
  border-radius: 8px;
  display: block;
  object-fit: cover;
}
.article-block {
  &__publish-info {
    color: #808080;
  }
  &__title {
    font-size: 24px;
    font-weight: bolder;
    padding: 8px 0px;
  }
  &__content {
    display: flex;
    &-text {
      padding-left: 8px;
      word-break: break-all;
      width: -webkit-fill-available;
    }
  }
  &__operation {
    padding-top: 8px;
  }
}
</style>

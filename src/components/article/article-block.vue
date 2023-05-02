<template lang="pug">
.article-block( v-for="article in list.articleList" :key="article.id")
  .article-block-item
    .article-block__publish-info {{ article.nickname}}·{{ fmtDate(article.publishDate) }} 发表了一片文章 
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
import { ref, reactive, getCurrentInstance, watch } from "vue";
let isLoad = ref(false);
let list = reactive({
  articleList: [],
});
const { proxy } = getCurrentInstance();

const props = defineProps({
  params: Object,
});

let initParams = Object.assign({ pageSize: 5 }, props?.params);

//初始化数据
async function init() {
  isLoad = false;
  list.articleList = [];
  const { data } = await proxy.$https.getRequest(
    "/article/get-list/by-page",
    initParams
  );
  if (data?.length) {
    list.articleList = data;
    isLoad = true;
  }
}

// 格式时间
function fmtDate(date) {
  return proxy.$moment(date).format("YYYY-MM-DD");
}

// 文字缩略信息
function limitTextCount(val) {
  let res = val;
  if (val?.length > 190) {
    res = val.substring(0, 190) + "...";
  }
  return res;
}

init();

// 监听当前页面路由状态改变列表数据
watch(
  () => proxy.$route.params.type,
  (toParams, previousParams) => {
    delete initParams.isNew;
    if (toParams === "new") {
      initParams.isNew = true;
    }
    init();
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.image {
  width: 480px;
  height: 160px;
  border-radius: 8px;
  display: block;
  object-fit: cover;
}
.article-block {
  background-color: white;
  border: 1px solid #f6f6f6;

  width: 775px;
  height: 300px;

  &-item {
    display: flex;
    flex-direction: column;
    margin: 24px;
  }
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

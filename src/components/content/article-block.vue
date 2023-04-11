<template lang="pug">
.article-block(v-if="!isLoad" v-for="article in articleList" :key="article.id")
  div {{ article.uid }} 发表了一片文章
article-skeleton-block(v-else)
</template>

<script>
export default {
  name: "article-block",
  props: {
    msg: String,
    queryUrl: {
      type: String,
      default: "/article/get-list/by-page",
    },
  },
  data() {
    return {
      isLoad: false,
      articleList: [],
    };
  },
  methods: {
    async init() {
      debugger;
      this.isLoad = false;
      this.articleList = [];
      const { data } = await this.$https.getRequest(this.queryUrl);
      if (data?.length) {
        this.articleList = data;
        this.isLoad = true;
      }
    },
  },
  created() {
    this.init();
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

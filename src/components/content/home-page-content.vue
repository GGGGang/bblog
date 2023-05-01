<template lang="pug">
.home-page-content
  article-block(:config = "config")
</template>

<script>
export default {
  name: "home-page-content",
  props: {
    msg: String,
  },
  data() {
    return {
      isLoading: true,
      articleList: [],
    };
  },
  methods: {
    async init() {
      debugger;
      this.isLoading = true;
      const { data } = await this.$https.getRequest(
        "/article/get-list/by-page"
      );
      if (data?.length) {
        this.articleList = data;
        this.isLoading = false;
      }
    },
  },
  created() {
    // this.init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-page-content {
}
</style>

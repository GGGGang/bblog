<template lang="pug">
.article-skeleton-block
  el-skeleton(:rows="20" animated)
</template>

<script>
export default {
  name: "article-skeleton-block",
};
</script>

<style scoped lang="scss">
.article-skeleton-block {
  background-color: white;
  border: 1px solid #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 775px;
  height: calc(100vh - 148px);
}
.el-skeleton {
  margin: 24px;
}
</style>

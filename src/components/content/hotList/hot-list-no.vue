<template lang="pug">
.hot-list-no 
  .hot-list-no__item(:style="getBackgroundColor(row.no)") {{ row.no }}
  .hot-list-no__content {{ row.content }}
</template>

<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  row: Object,
});
function getBackgroundColor(no) {
  if (no === "1") {
    return { "background-color": "#FF0000" };
  }
  if (no === "2") {
    return { "background-color": "#FF8D1A" };
  }
  if (no === "3") {
    return { "background-color": "#FFC300" };
  }
  return { color: "#000000" };
}
</script>

<style scoped lang="scss">
.hot-list {
  background-color: white;
  border: 1px solid #f6f6f6;

  width: 775px;
  height: 300px;
}
.hot-list-no {
  display: flex;
  margin-bottom: 12px;
  margin-left: 24px;
  &__item {
    width: 26px;
    height: 26px;
    color: #fff;

    font-size: 18px;
    line-height: 26px;
    display: flex;
    justify-content: center;
  }
  &__content {
    margin-left: 12px;
    font-size: 14px;
    line-height: 26px;
    color: #000;
  }
}
</style>

<template lang="pug">
.hot-list-no 
  .hot-list-no__item(:style="getBackgroundColor(row.no)") {{ row.no }}
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
  &__item {
    width: 26px;
    height: 26px;
    color: #fff;

    font-size: 18px;
    line-height: 26px;
    display: flex;
    justify-content: center;
  }
}
</style>

<template lang="pug">
.nav-right-tool(v-if = "toolTitle" @click="jump")
  .nav-right-tool__icon {{ selfIconText || iconText }}
  .nav-right-tool__text 
    .nav-right-tool__text-title {{ toolTitle }}
    .nav-right-tool__text-content {{ toolText }}
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const props = defineProps({
  toolTitle: String,
  toolText: String,
  selfIconText: String,
});
function jump() {
  debugger;
}
const iconText = computed(() => {
  return props.toolTitle.substring(0, 1);
});
</script>

<style lang="scss" scoped>
.nav-right-tool {
  width: 412px;
  // height: 128px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  margin-bottom: 10px;
  &__icon {
    width: 80px;
    height: 80px;
    background-color: #157efa;
    color: #fff;
    font-size: 48px;
    font-weight: bold;
    margin: 24px;
    text-align: center;
    line-height: 80px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    width: calc(412px - 80px - 48px);
    &-title {
      font-size: 24px;
      font-weight: 400;
      margin-top: 24px;
    }

    &-content {
      font-size: 14px;
      color: #7ca1cf;
      margin: 4px 24px 0px 0px;
    }
  }
}
</style>

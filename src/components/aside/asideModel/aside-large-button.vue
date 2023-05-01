<template lang="pug">
.aside-large-button.aside-box-shadow-animation(v-if = "toolTitle" @click="jump")
  .aside-large-button__item
    .aside-large-button__item-icon {{ selfIconText || iconText }}
    .aside-large-button__item-text 
      .aside-large-button__item-text-title {{ toolTitle }}
      .aside-large-button__item-text-content {{ toolText }}
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
.aside-large-button {
  width: 412px;
  background-color: #fff;
  margin-bottom: 10px;
  overflow: hidden;
  cursor: pointer;
  &__item {
    display: flex;
    margin: 24px;
    &-icon {
      width: 80px;
      height: 80px;
      background-color: #157efa;
      color: #fff;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      line-height: 80px;
    }
    &-text {
      display: flex;
      flex-direction: column;
      // width: calc(412px - 80px - 48px);
      margin: 4px 0px 0px 12px;
      &-title {
        font-size: 24px;
        font-weight: 400;
      }
      &-content {
        font-size: 14px;
        color: #7ca1cf;
        margin: 4px 0px 0px 0px;
        width: 270px;
      }
    }
  }
}
</style>

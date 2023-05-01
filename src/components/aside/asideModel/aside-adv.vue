<template lang="pug">
.aside-adv.aside-box-shadow-animation(v-if = "toolTitle" @click="jump")
  el-image.aside-adv__img(:fit="full"  :src = "require('@/assets/login-bg.png')")
  .aside-adv__content
    .aside-adv__content-title 广告位招租中～
    .aside-adv__content-desc 为了借助社交产品的流量，让用户主动分享...
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
.aside-adv {
  width: 412px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 10px;
  &__img {
    width: 364px;
    height: 184px;
    margin: 24px 24px 12px 24px;
  }
  &__content {
    margin: 0px 24px 24px 24px;
    &-title {
      font-size: 24px;
      font-weight: 500;
    }
    &-desc {
      font-size: 14px;
    }
  }
}
</style>

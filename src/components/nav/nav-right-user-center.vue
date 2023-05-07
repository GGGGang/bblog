<template lang="pug">
.nav-right-user-center(v-if = "toolTitle" @click="jump")
  .nav-right-user-center__button.bg-animation(v-for = "button in buttons" :key="button.buttonTitle" :style="button?.style")
    .nav-right-user-center__icon
      i(:class="'iconfont iconfont-center-tool icon-'+button.icon" style ="color:#fff")
    .nav-right-user-center__text 
      .nav-right-user-center__text-title {{ button.buttonTitle }}
      .nav-right-user-center__text-content {{ button.buttonDesc }}
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const props = defineProps({
  toolTitle: String,
  toolText: String,
  selfIconText: String,
});

const buttons = reactive([
  {
    icon: "shoucang2",
    buttonTitle: "收藏",
    buttonDesc: "收藏的文章都在这里",
    style: {
      margin: "24px 12px 12px 24px",
    },
  },
  {
    icon: "guangbiaoyidong",
    buttonTitle: "摘录",
    buttonDesc: "文章片段",
    style: {
      margin: "24px 24px 12px 12px",
    },
  },
  {
    icon: "bijijilu",
    buttonTitle: "笔记",
    buttonDesc: "有趣的灵魂",
    style: {
      margin: "12px 12px 24px 24px",
    },
  },
  {
    icon: "biaoqian",
    buttonTitle: "标签",
    buttonDesc: "总有你感兴趣",
    style: {
      margin: "12px 24px 24px 12px",
    },
  },
]);
function jump() {}
const iconText = computed(() => {
  return props.toolTitle.substring(0, 1);
});
</script>

<style lang="scss" scoped>
.nav-right-user-center {
  width: 412px;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  margin-bottom: 10px;

  &__button {
    display: flex;
    width: 170px;
    height: 50px;
  }

  &__icon {
    width: 50px;
    height: 50px;
    background-color: #157efa;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    margin: 4px 0px 0px 12px;
    &-title {
      font-size: 14px;
      font-weight: 400;
    }

    &-content {
      font-size: 12px;
      color: #7ca1cf;
    }
  }
}
</style>

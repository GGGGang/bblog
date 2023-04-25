<template lang="pug">
.nav-right-user-center(v-if = "toolTitle" @click="jump")
  .nav-right-user-center__button(v-for = "button in buttons" :key="button.buttonTitle")
    .nav-right-user-center__icon {{ button.buttonIcon }}
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
    buttonIcon: "收",
    buttonTitle: "收藏",
    buttonDesc: "收藏的文章都在这里",
  },
  {
    buttonIcon: "收",
    buttonTitle: "收藏1",
    buttonDesc: "收藏的文章都在这里",
  },
  {
    buttonIcon: "收",
    buttonTitle: "收藏2",
    buttonDesc: "收藏的文章都在这里",
  },
  {
    buttonIcon: "收",
    buttonTitle: "收藏3",
    buttonDesc: "收藏的文章都在这里",
  },
]);
function jump() {
  debugger;
}
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
    margin: 6px;
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
      margin: 4px 24px 0px 0px;
    }
  }
}
</style>

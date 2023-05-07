<template lang="pug">
.answer-list(v-for="val in 6")
  .answer-list-item 
    .answer-list-item__theme 文艺青年最后的音乐据点：网易云音乐评论区
  //-   .answer-list-item__content(v-for="item in 3")
  //-     el-avatar.answer-list-item__content-avatar-front(v-if="item%2 === 0" :size= "50" :src="require('@/assets/touxiang.png')")
  //-     .empty-avatar(v-if="item%2 !== 0")
  //-     .answer-list-item__content-bg 
  //-       .answer-list-item__content-text 我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户增长，所以会更加...
  //-     el-avatar.answer-list-item__content-avatar-end(v-if="item%2 !== 0" :size= "50" :src="require('@/assets/touxiang.png')")
  //- .answer-list-item__expend.bg-animation 
  //-   i(class="iconfont icon-xuanzeqizhankai" style = "color:#A6A6A6;font-size:16px ;line-height:41px") 展开
</template>

<script setup>
import { ref, reactive } from "vue";
</script>

<style scoped lang="scss">
.empty-avatar {
  height: 50px;
  width: 50px;
  background-color: #fff;
}
.answer-list {
  background-color: #fff;
  overflow: hidden;
  width: 775px;
  &-item {
    display: flex;
    flex-direction: column;

    &__theme {
      height: 60px;

      background-color: #edebeb;
      color: #000;
      font-size: 24px;
      font-weight: 700;
      line-height: 60px;
      padding-left: 24px;
      border: 1px solid #f6f6f6;
    }
    &__content {
      display: flex;
      margin: 12px 24px;
      &-bg {
        width: 619px;
        height: 60px;
        font-size: 12px;
        background-color: #f2f3f5;
        margin: 0px 5px;
        border-radius: 5px;
      }
      &-text {
        width: 597px;
        height: 34px;
        margin: 12px;
      }
    }
    &__expend {
      display: flex;
      justify-content: center;
      cursor: pointer;
      width: 100%;
      height: 41px;
      border: 1px solid #f6f6f6;
    }
  }
}
</style>

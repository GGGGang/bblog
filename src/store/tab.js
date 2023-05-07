import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useTabIndex = defineStore("tabIndex", () => {
  let currentTabIndex = ref("/article/recommend");
  function changeTabIndex(currentTab) {
    currentTabIndex.value = currentTab;
  }
  return { currentTabIndex, changeTabIndex };
});

<template>
  <div>
    <div class="basic_title">
      <img class="basic_logo" src="/cb-ui/dist/image/icon.png" alt="logo" />
      <div>面向 Vue3 的移动端组件库</div>
    </div>

    <div v-for="(item, index) in menu" :key="index">
      <div class="basic_head">{{ item.title }}</div>
      <div v-for="(cItem, cindex) in item.children" :key="cindex" class="basic_cell" @click="goPage(cItem.url)">
        <div>
          <span>{{ formatTitle(cItem.url) }}</span>
          <span style="margin-left:6px;"> {{ cItem.name }}</span>
        </div>
        <cb-icon name="right" size="default" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import config from "@/config"
import { reactive, ref, defineComponent, Ref, watch, toRefs } from "vue"
import router from "@/router"
import { useRoute } from "vue-router"
import { useCommon } from "../../../plugins/common"

export default defineComponent({
  name: "AppSidebar",
  props: {},
  emits: ["change"],
  setup(props, { emit }) {
    const menu = ref(config.componentsMenu)
    const stateCommon = {}
    const commonData = useCommon("")

    //格式化标题
    const formatTitle = (title: String) => {
      const formatArray = title.split("")
      if (formatArray.length > 0) {
        formatArray[0] = formatArray[0].toUpperCase()
      }
      return formatArray.join("")
    }

    const goPage = (url: String) => {
      window.parent.open(commonData.pathname + "#doc/" + url, "_self")
    }

    return {
      ...toRefs(stateCommon),
      goPage,
      formatTitle,
      menu
    }
  }
})
</script>

<style scoped lang="scss">
.basic_title {
  padding: 20px;
  background: white;
  margin-top: 5px;
  height: 61px;
  display: flex;
  flex-direction: row;
  background-image: -webkit-linear-gradient(left, #e2b820, #fb3110, #5187ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
}

.basic_logo {
  width: 35px;
  height: 40px;
  margin-right: 12px;
  flex-shrink: 0;
}
.basic_head {
  text-align: cener;
  display: none;
}
.basic_cell {
  display: flex;
  background: white;
  padding: 15px 25px;
  border-bottom: 1px solid #f3f3f3;
  align-items: center;
  font-size: 14px;
  flex: 1;
  justify-content: space-between;
  color: gray;
}
.basic_icon {
  width: 20px;
}
</style>

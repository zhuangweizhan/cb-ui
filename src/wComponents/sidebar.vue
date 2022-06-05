<template>
  <div :class="b">
    <div v-for="(item, index) in menu" :key="index">
      <div v-if="item.children.length === 0" :class="`${be}title`">{{ item.title }}</div>

      <div v-else>
        <div :class="`${be}title`">{{ item.title }}</div>
        <template v-if="item.type === 'basic'">
          <div
            v-for="(cItem, cIndex) in item.children"
            :key="cIndex"
            :class="[`${be}item`, '/basic/' + cItem.url === routePath ? `${be}item-active` : '']"
            @click="changeRoute(cItem, item.type)"
          >
            {{ cItem.name }}
          </div>
        </template>

        <div
          v-for="(cItem, cIndex) in item.children"
          v-else
          :key="cIndex"
          :class="[`${be}item`, '/doc/' + cItem.url === routePath ? `${be}item-active` : '']"
          @click="changeRoute(cItem, item.type)"
        >
          <span :class="`${be}url`">{{ formatTitle(cItem.url) }}</span> {{ cItem.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import config from "@/config"
import { reactive, ref, defineComponent, Ref, watch, toRefs } from "vue"
import router from "@/router"
import { useRoute } from "vue-router"
import { useCommon } from "../plugins/common"

export default defineComponent({
  name: "AppSidebar",
  props: {},
  emits: ["change"],
  setup(props, { emit }) {
    const menu = ref([...config.basicMenu, ...config.componentsMenu])
    const stateCommon = useCommon("sidebar")

    const route = useRoute()

    const routePath = ref(route.path)
    const changeRoute = (item: Menu, type: String) => {
      // if (item.type === MenuTypes.TITLE || props.menuName === item.doc) {
      //   return
      // }
      if (type === "basic") {
        router.push("/basic/" + item.url)
      } else {
        router.push("/doc/" + item.url)
      }
      // emit('change', item)
    }

    //格式化标题
    const formatTitle: String = (title: String) => {
      const formatArray = title.split("")
      if (formatArray.length > 0) {
        formatArray[0] = formatArray[0].toUpperCase()
      }
      return formatArray.join("")
    }

    watch(
      () => route.path,
      val => {
        routePath.value = val
      }
    )
    return {
      ...toRefs(stateCommon),
      formatTitle,
      menu,
      routePath,
      changeRoute
    }
  }
})
</script>

<style scoped lang="scss">
@import "../styles/common.scss";

@include b(sidebar) {
  padding: 0 0 15px;
  position: fixed;
  width: 220px;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 99;
  overflow-y: scroll;
  box-shadow: 0 8px 12px var(--site-config-color-shadow);
  background: white;

  &::-webkit-scrollbar {
    display: none;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    padding: 0 30px;
  }

  &__item {
    margin: 0;
    user-select: none;
    padding: 10px 30px;
    color: #898989;
    font-size: 14px;
  }

  &__link {
    cursor: pointer;
    font-size: 14px;
    transition: color 0.2s;
    font-weight: normal;
  }

  &__item-active {
    background: #5187ea30;
    position: relative;
    color: #5187ea;
  }

  &__item-active .xdoc-sidebar__url {
    color: #5187ea;
    font-weight: 600;
  }

  &__item-active::before {
    display: block;
    content: "";
    background: #5187ea;
    width: 4px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
  }

  @include e(url) {
    color: #5d5b5b;
    font-weight: 500;
  }
}
</style>

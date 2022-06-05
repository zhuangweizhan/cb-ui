<template>
  <div :class="`${b}`">
    <svg v-if="back" viewBox="0 0 1000 1000" :class="`${be}icon`" @click="backFn()">
      <path
        fill="white"
        fill-rule="evenodd"
        d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"
      ></path>
    </svg>
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue"
import { useCommon } from "../plugins/common"

export default defineComponent({
  name: "mobile",
  props: {
    //是否有内容
    isContent: {
      type: Boolean,
      default: true
    },
    back: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    const stateCommon = useCommon("mobile-header")

    const backFn = () => {
      // const pathname = window.location.pathname === "/" ? "" : window.location.pathname
      const pathname = "https://zhuangweizhan.github.io/cb-ui/dist/index.html"

      window.parent.open(pathname + "#/", "_self")
    }

    return {
      ...toRefs(stateCommon),
      backFn
    }
  }
})
</script>

<style lang="scss">
@import "../styles/common.scss";

@include b(mobile-header) {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #5187ea;
  color: white;
  transition: background-color 0.25s;
  font-weight: bold;

  @include e(icon) {
    position: absolute;
    top: 18px;
    left: 12px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: white;
  }
}
</style>

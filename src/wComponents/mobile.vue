<template>
  <div :class="b">
    <div :class="`${be}content`">
      <slot v-if="isContent"></slot>
      <div v-else :class="`${be}default`">
        <img src="/image/work.gif" :class="`${be}img`" style="" />
        <div :class="`${be}text`">暂无案例，小伙子正在赶工中</div>
      </div>
    </div>
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
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    const stateCommon = useCommon("mobile")

    return {
      ...toRefs(stateCommon)
    }
  }
})
</script>

<style lang="scss">
@import "../styles/common.scss";

@include b(mobile) {
  padding: 0 2px 2px 2px;
  @include e(content) {
    background: #f3f3f3;
    height: calc(100vh - 45px);
    padding: 20px 0px;
    box-shadow: 0 3px 1px -2px rgb(239 148 11 / 40%), 0 2px 2px rgb(234 136 14 / 30%), 0 1px 5px rgb(236 160 21 / 15%);
    border-radius: 0 0 10px 10px;
    overflow-y: scroll;
  }

  @include e(default) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  @include e(img) {
    width: 170px;
  }
  @include e(text) {
    margin-top: 30px;
    color: #b7b7b7;
  }
}
</style>

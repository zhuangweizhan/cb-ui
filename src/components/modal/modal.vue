<template>
  <div v-if="visible" :class="`${be}overlay`" :style="{ 'z-index': zIndex }" @click="() => cancel()"></div>

  <div v-if="visible" :class="b" :style="{ 'z-index': zIndex + 1 }">
    <div :class="`${be}header`">{{ title }}</div>
    <div :class="`${be}content`">
      <slot></slot>
    </div>

    <div v-if="footerType !== 'no'" :class="`${be}footer`">
      <cb-button :class="`${be}footer-left`" type="link" size="large" @click="cancel()">取消</cb-button>
      <cb-button :class="`${be}footer-right`" type="link" size="large" @click="ok()"> {{ btnOkName }}</cb-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
import { props } from "./props"
import { useCommon, useProvide } from "../common/hooks/index"

//弹窗
export default defineComponent({
  // 支持快速弹出
  name: "Modal",
  components: {},
  props,
  /*
   * ok：确认事件回调
   * cancel：取消事件回调
   */
  emits: ["ok", "update:visible", "cancel"],
  setup(props, { emit }) {
    const { width, zIndex } = props
    const stateCommon = useCommon("modal")
    const state = reactive({
      localWidth: width,
      zIndex,
      maskClosable: true,
      ok() {
        emit("ok")
      },
      cancel() {
        emit("update:visible", false)
        emit("cancel")
      }
    })

    useProvide({ xModal: true })

    return {
      ...toRefs(state),
      ...toRefs(stateCommon)
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

@include b(modal) {
  position: fixed;
  max-height: 100%;
  top: 45%;
  left: 50%;
  width: 320px;
  overflow: hidden;
  font-size: $font-large;
  background: white;
  border-radius: 20px;
  backface-visibility: hidden;
  transition-property: transform, opacity;
  max-height: 100%;
  transform: translate3d(-50%, -50%, 0);

  @include e(overlay) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  @include e(header) {
    padding-top: 10px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  @include e(footer) {
    display: flex;
    overflow: hidden;
    -webkit-user-select: none;
    user-select: none;
    width: 100%;
  }

  @include e(footer-left) {
    width: 50%;
    min-width: 0;
    padding: 0;
  }

  @include e(footer-right) {
    width: 50%;
    color: $color-primary;
    min-width: 0;
    padding: 0;
  }
}
</style>

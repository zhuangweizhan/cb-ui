<template>
  <template v-if="rightIcon">
    <span style="display:flex;">
      <span
        :class="[
          b,
          `${be}size_${size}`,
          `${be}color_${type}`,
          isFormIndent && !rightIcon ? `${be}index` : '',
          ellipsis > 0 ? `${be}ellipsis` : ``
        ]"
        :style="{ lineClamp: ellipsis }"
        @click="click"
      >
        <slot></slot>
      </span>
      <x-icon name="right" size="small" @click="click"></x-icon>
    </span>
  </template>
  <template v-else>
    <span
      :class="[
        b,
        `${be}size_${size}`,
        `${be}color_${type}`,
        isFormIndent && !rightIcon ? `${be}index` : '',
        ellipsis > 0 ? `${be}ellipsis` : ``
      ]"
      :style="{ lineClamp: ellipsis }"
      @click="click"
    >
      <slot></slot>
    </span>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch, reactive } from "vue"
import { useCommon } from "../common/hooks/index"
import { props } from "./props"

// 文本
export default defineComponent({
  // 用于文本的显示
  name: "Text",
  props,
  /*
   * click：点击事件监听
   */
  emits: ["click"],
  setup(props, { emit }) {
    const stateCommon = useCommon("text")

    const click = () => {
      emit("click")
    }

    const stateComp = reactive({
      type: props.type,
      size: props.size
    })

    watch(
      () => props.type,
      () => {
        stateComp.type = props.type
      }
    )

    return {
      ...toRefs(stateCommon),
      ...toRefs(stateComp),
      click
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

$size: (
  small: 14,
  normal: 16,
  large: 18,
  larger: 20
);

$color: (
  normal: #333333,
  danger: #f5222d,
  success: #068b11,
  gray: #8c8c8c,
  primary: #f0780e,
  info: #306ef0,
  white: #ffffff,
  placeholder: #d0cccc
);

@include b(text) {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  @include e(ellipsis) {
    overflow: hidden;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  @each $size-name, $font-size in $size {
    @include e("size_" + $size-name) {
      font-size: #{$font-size}px;
    }
  }

  @each $color-name, $color-value in $color {
    @include e("color_" + $color-name) {
      color: $color-value;
    }
  }
}
</style>

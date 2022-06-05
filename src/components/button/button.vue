<template>
  <div
    :class="[
      b,
      isBlock ? `${be}isBlock` : '',
      `${be}size-${size}`,
      `${be}type-${type}`,
      plain ? `${be}plain-${type}` : '',
      disabled ? `${be}disabled` : ''
    ]"
    :style="[baseStyles]"
    @click="onClick"
  >
    <span v-if="loading" :class="`${be}loading`" />
    <img v-else-if="icon" :class="`${be}img`" :src="icon" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue"
import { useCommon } from "../common/hooks/index"
import { props } from "./props"

// 按钮
export default defineComponent({
  // 按钮组件，用于事件触发
  name: "Button",
  props,
  /*
   * click：点击事件监听
   */
  emits: ["click"],
  setup(props) {
    const stateCommon = useCommon("button")

    const baseStyles = ref(props.radius !== -1 ? { borderRadius: props.radius + "px" } : {})

    const loading = ref(props.loading)

    const onClick = async e => {
      if (loading.value) {
        return
      }
      if (props.autoLoading) {
        loading.value = true
        await props.onClick(e)
        loading.value = false
        // 最长防重复点击
        setTimeout(() => {
          if (loading.value) {
            loading.value = false
          }
        }, 5000)
      } else {
        props.onClick(e)
      }
      if (props.isStopPropagation) {
        e.stopPropagation()
      }
    }
    return {
      ...toRefs(stateCommon),
      baseStyles,
      loading,
      onClick
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

$size-array: (
    key: "small",
    fontSize: 12,
    minWidth: 30,
    height: 20,
    borderRadius: 10,
    padding: "0 4px"
  ),
  (
    key: "normal",
    fontSize: 14,
    minWidth: 70,
    height: 30,
    borderRadius: 15,
    padding: "0 6px"
  ),
  (
    key: "large",
    fontSize: 16,
    minWidth: 80,
    height: 40,
    borderRadius: 20,
    padding: "0 8px"
  );

$color-array: (
    key: "primary",
    mainColor: #5187ea,
    fontColor: #f8f8f8
  ),
  (
    key: "gray",
    mainColor: #b9b9b9,
    fontColor: #f8f8f8
  ),
  (
    key: "info",
    mainColor: #00afef,
    fontColor: #f8f8f8
  ),
  (
    key: "danger",
    mainColor: #f44336,
    fontColor: #f8f8f8
  ),
  (
    key: "warning",
    mainColor: #ff9f00,
    fontColor: #f8f8f8
  ),
  (
    key: "link",
    mainColor: #00000000,
    fontColor: #5187ea
  );

@include b(button) {
  display: flex;
  align-items: center;
  justify-content: center;
}

@for $i from 1 through length($size-array) {
  $item: nth($size-array, $i);

  @include e("size") {
    @include m(map-get($item, key)) {
      font-size: #{map-get($item, fontSize)}px;
      min-width: #{map-get($item, minWidth)}px;
      height: #{map-get($item, height)}px;
      line-height: #{map-get($item, height)}px;
      border-radius: #{map-get($item, borderRadius)}px;
      padding: #{map-get($item, padding)};
      flex: 0 0 auto;
    }
  }
}

@for $i from 1 through length($color-array) {
  $item: nth($color-array, $i);
  @include e("type") {
    @include m(map-get($item, key)) {
      background: #{map-get($item, mainColor)};
      color: #{map-get($item, fontColor)};
      border: 1px solid #{map-get($item, mainColor)};
    }
  }
}

@for $i from 1 through length($color-array) {
  $item: nth($color-array, $i);
  @include e("plain") {
    @include m(map-get($item, key)) {
      background: #{map-get($item, fontColor)};
      color: #{map-get($item, mainColor)};
      border: 1px solid #{map-get($item, mainColor)};
    }
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@include b(button) {
  @include e(disabled) {
    opacity: 0.7;
  }

  @include e(img) {
    width: 20px;
    height: 20px;
    margin: 0 2px;
  }

  @include e(isBlock) {
    flex: 1;
    width: 100%;
  }

  @include e(loading) {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    background: transparent;
    border-top: 2px solid rgb(205, 202, 202);
    border-right: 2px solid transparent;
    border-radius: 50%;
    animation: 1s spin linear infinite;
  }
}
</style>

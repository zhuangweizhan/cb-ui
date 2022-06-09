<template>
  <div :class="[b, `${be}size-${size}`, `${be}type-${type}`, plain ? `${be}plain-${type}` : '']"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue"
import { useCommon } from "../common/hooks/index"
import { props } from "./props"

// 标签
export default defineComponent({
  //用于标记关键词和概括主要内容
  name: "Tag",
  props,
  setup(props, context) {
    const stateCommon = useCommon("tag")

    return {
      ...toRefs(stateCommon)
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

$size-array: (
    key: "small",
    fontSize: 12,
    minWidth: 55,
    padding: 2
  ),
  (
    key: "normal",
    fontSize: 14,
    minWidth: 70,
    padding: 7
  ),
  (
    key: "large",
    fontSize: 16,
    minWidth: 80,
    padding: 7
  );

// mainColor：主色
// assistColor: 背景色
// borderColor

$color-array: (
    key: "info",
    borderColor: #e7f3fc,
    assistColor: #e7f3fc,
    mainColor: #306ef0
  ),
  (
    key: "primary",
    borderColor: #f0780e,
    assistColor: #fff4eb,
    mainColor: #f0780e
  ),
  (
    key: "danger",
    borderColor: #f5222d,
    assistColor: #fff4eb,
    mainColor: #f5222d
  ),
  (
    key: "gray",
    borderColor: #f8f8f8,
    assistColor: #ececec,
    mainColor: #8c8c8c
  );

@include b(tag) {
  text-align: center;
  border-radius: 3px;
  line-height: normal;
}
@for $i from 1 through length($size-array) {
  $item: nth($size-array, $i);

  .cb-tag__size-#{map-get($item, key)} {
    font-size: #{map-get($item, fontSize)}px;
    min-width: #{map-get($item, minWidth)}px;
    padding: #{map-get($item, padding)}px 0;
  }
}

@for $i from 1 through length($color-array) {
  $item: nth($color-array, $i);

  .cb-tag__type-#{map-get($item, key)} {
    background: #{map-get($item, assistColor)};
    color: #{map-get($item, mainColor)};
  }
}

@for $i from 1 through length($color-array) {
  $item: nth($color-array, $i);

  .cb-tag__plain-#{map-get($item, key)} {
    background: white;
    color: #{map-get($item, mainColor)};
    border: 1px solid #{map-get($item, borderColor)};
  }
}
</style>

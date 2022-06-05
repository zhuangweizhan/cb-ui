<template>
  <div :class="b">
    <div :class="`${be}name`">{{ name }}</div>
    <div :class="`${be}remark`">
      <slot name="remark"></slot>
    </div>
    <div :class="`${be}code`">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue"
import { useCommon } from "../plugins/common"

export default defineComponent({
  name: "card",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  setup() {
    const stateCommon = useCommon("card")

    return {
      ...toRefs(stateCommon)
    }
  }
})
</script>

<style lang="scss">
@import "../styles/common.scss";

@include b(card) {
  border-radius: 4px;
  background: white;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 1px 5px rgb(0 0 0 / 12%);

  @include e(name) {
    position: relative;
    font-weight: 400;
    line-height: 1.5;
    font-size: 18px;
  }

  @include e(remark) {
    margin: 14px 0 0;
    font-size: 15px;
  }

  @include e(code) {
    background: #fafafa !important;
    padding: 0 !important;
    transition: all 0.25s;
  }
}
</style>

<style lang="scss">
@import "../styles/common.scss";

@include b(card) {
  div {
    line-height: 32px;
  }
}
</style>

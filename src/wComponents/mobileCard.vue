<template>
  <div :class="[`${b}`, isFull ? `${be}full` : '']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue"
import { useCommon } from "../plugins/common"

export default defineComponent({
  name: "mobileCard",
  props: {
    isFull: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const stateCommon = useCommon("mobile-card")
    return {
      ...toRefs(stateCommon)
    }
  }
})
</script>

<style lang="scss">
@import "../styles/common.scss";

@include b(mobile-card) {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: white;
  flex-direction: row;
  flex: 1;

  @include e(full) {
    padding: 15px;
  }
}
</style>

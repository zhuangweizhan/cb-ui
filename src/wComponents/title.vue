<template>
  <div :class="b">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue"
import { useCommon } from "../plugins/common"

export default defineComponent({
  name: "title",
  setup() {
    const stateCommon = useCommon("title")

    return {
      ...toRefs(stateCommon)
    }
  }
})
</script>

<style lang="scss">
@import "../styles/common.scss";

@include b(title) {
  line-height: 40px;
  font-size: 30px;
  cursor: default;
  font-weight: 400;
  margin: 15px 0;
}
</style>

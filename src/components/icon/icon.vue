<template>
  <x-img :class="b" :width="width" :src="`/static/image/clound_crm_h5/icon/${imgName}.png`"></x-img>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, watch } from "vue"
import { useCommon } from "../common/hooks/index"
import { props } from "./props"

// 图标
export default defineComponent({
  // 用于图标的展示
  name: "Icon",
  props,
  setup(props, { emit }) {
    const stateCommon = useCommon("icon")
    const stateComp = reactive({ width: "", imgName: props.name })

    watch(
      () => props.name,
      val => {
        stateComp.imgName = val
      }
    )

    const sizeObj = {
      smaller: 12,
      small: 14,
      default: 16,
      large: 20,
      larger: 24
    }

    stateComp.width = sizeObj[props.size] ? sizeObj[props.size] + "px" : sizeObj.default + "px"

    return {
      ...toRefs(stateCommon),
      ...toRefs(stateComp)
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

@include b(icon) {
  @include e(text) {
    margin-left: 5px;
    line-height: auto;
  }
}
</style>

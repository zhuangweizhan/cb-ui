<template>
  <div :class="[b, pKey == modelVal ? `d-show` : `d-none`]"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, onMounted, inject } from "vue"
import { useCommon } from "../../common/hooks/index"
import { Emitter } from "../../common/emitter"
import { tabEmitterKey } from "../tab.vue"
import { props } from "./props"

// 选项卡Item
export default defineComponent({
  // 搭配Tab组件，快速布局
  name: "TabItem",
  props,
  setup(props, context) {
    const stateCommon = useCommon("tab-item")
    const tabItemState = reactive({
      modelVal: ""
    })

    onMounted(() => {
      const emitter = inject<Emitter>(tabEmitterKey, null)
      emitter && emitter.emit("acceptTabItemFn", { key: props.value, label: props.label })
    })

    return {
      ...toRefs(stateCommon),
      ...toRefs(tabItemState)
    }
  }
})
</script>

<style lang="scss">
@import "../../common/scss/common.scss";
@include b(tab-item) {
  flex-shrink: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  opacity: 1;
  -webkit-transition: opacity 0.45s;
  transition: opacity 0.45s;
}
</style>

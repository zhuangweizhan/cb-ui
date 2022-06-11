<template>
  <span :class="b" @click="() => select()">
    <x-icon :class="`${be}icon`" size="larger" :name="name"></x-icon>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive } from "vue"
import { useCommon } from "../common/hooks/index"
import { props } from "./props"
// 复选框
export default defineComponent({
  // 复选框，用于标记是否选择
  name: "CheckBox",
  props,
  /*
   * change：数据变化监听
   */
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const stateCommon = useCommon("check-box")
    const stateComp = reactive({
      isChecked: props.value,
      name: "",
      reloadName: () => {
        const icon = props.value ? props.activeIcon : props.inactiveIcon
        stateComp.name = (props.disabled ? props.disabledIcon : icon) + ""
      },
      select: () => {
        stateComp.isChecked = !stateComp.isChecked
        stateComp.reloadName()
        emit("update:value", stateComp.isChecked)
        emit("change", stateComp.isChecked)
      }
    })

    stateComp.reloadName()

    return {
      ...toRefs(stateCommon),
      ...toRefs(stateComp)
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

@include b(check-box) {
  display: flex;
  @include e(icon) {
    margin-right: 8px;
  }
}
</style>

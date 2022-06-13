<template>
  <span :class="b" @click="select">
    <cb-img width="24px" :class="`${be}img`" :src="name === groupValue ? activeIcon : inactiveIcon" />
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch, inject, reactive, onMounted } from "vue"
import { useCommon } from "../common/hooks/index"
import { props } from "./props"
import { Emitter } from "../common/emitter"
import { emitterKey } from "./radio-group/radio-group.vue"

//单选框
export default defineComponent({
  // 用于单选选择
  name: "Radio",
  props,
  setup(props, { emit }) {
    const emitterInject = inject<Emitter>(emitterKey, null)
    const stateCommon = useCommon("radio")

    onMounted(() => {
      emitterInject && emitterInject.emit("acceptRadioFn", stateComp.parentUpdate)
    })

    const acceptRadioGroup = inject<Function>("acceptRadioGroup", null)
    const stateComp = reactive({
      groupValue: inject("xRadioGroupValue"),
      select: () => {
        acceptRadioGroup(props.name)
      },
      parentUpdate: (value: any) => {
        if (stateComp.groupValue !== value) {
          stateComp.groupValue = value
        }
      }
    })

    return {
      ...toRefs(stateCommon),
      ...toRefs(stateComp)
    }
  }
})
</script>

<style scoped lang="scss">
@import "../common/scss/common.scss";

@include b(radio) {
  display: flex;
  @include e(img) {
    margin-right: 10px;
  }
}
</style>

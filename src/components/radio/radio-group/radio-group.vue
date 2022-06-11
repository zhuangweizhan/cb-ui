<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch, provide } from "vue"
import { useCommon, useProvide } from "../../common/hooks/index"
import { props } from "./props"
import { Emitter } from "../../common/emitter"

export const emitterKey = Symbol()

//单选框组合
export default defineComponent({
  //用于包裹radio快速区分单选条件
  name: "RadioGroup",
  props,
  // 绑定对应的值
  emits: ["update:value"],
  setup(props, { emit }) {
    const stateCommon = useCommon("radio-group")

    const stateComp = reactive({
      groupValue: props.value,
      updateRadioStatusFnList: [] as any[],
      setVisableList: () => {
        //通知对应所有的编辑状态关闭
        stateComp.updateRadioStatusFnList.map(fn => {
          fn(stateComp.groupValue)
        })
      }
    })

    const acceptRadioGroup = (name: string) => {
      stateComp.groupValue = name
      emit("update:value", name)
      stateComp.setVisableList() //同步所有的子选项
    }

    const emitter = new Emitter()

    emitter.on("acceptRadioFn", (updateFunc: any) => {
      stateComp.updateRadioStatusFnList.push(updateFunc)
      console.log(`stateComp.updateRadioStatusFnList====`, stateComp.updateRadioStatusFnList)
    })

    // 公用提供子集调用
    useProvide({ xRadioGroupValue: stateComp.groupValue, acceptRadioGroup })
    provide(emitterKey, emitter)

    return {
      ...toRefs(stateCommon),
      ...toRefs(stateComp)
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../common/scss/common.scss";

@include b(radio-group) {
}
</style>

<template>
  <w-page>
    <template #pc>
      <w-card name="更新记录">
        <template #remark>
          <div>* 1) <b>新增Button控件</b></div>
          <div>* 2) <b>新增Input控件</b></div>
          <div>* 3) <b>新增Tag控件</b></div>
        </template>
      </w-card>
    </template>

    <template #mobile>
      <m-header title="CB-UI" :back="false" />
      <iframe :src="`${pathname}#/basic/mobile`" style="width:385px;height:677px;" />
    </template>
  </w-page>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs } from "vue"
import { useCommon } from "../../../plugins/common"

export default defineComponent({
  name: "mobile",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    const commonData = useCommon("")

    return {
      ...toRefs(commonData)
    }
  }
})
</script>

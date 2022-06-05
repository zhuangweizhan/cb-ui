<template>
  <w-page>
    <template #pc>
      <w-card name="更新记录">
        <template #remark>
          <div>* 1) <b>手写Button</b></div>
        </template>
      </w-card>
    </template>

    <template #mobile>
      <m-header title="CB-UI" :back="false" />
      <iframe :src="`${pathname}/#/basic/mobile`" style="width:385px;height:677px;" />
    </template>
  </w-page>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs } from "vue"

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
    const pathname = window.location.pathname === "/" ? "" : window.location.pathname

    return {
      pathname
    }
  }
})
</script>

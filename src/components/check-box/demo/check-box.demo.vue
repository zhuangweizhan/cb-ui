<webdoc>
  <title>基础案例</title>
</webdoc>

<template>
  <m-card>
    <cb-check-box v-model:value="value">选我没错，点击选择我吧</cb-check-box>
  </m-card>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue"

export default defineComponent({
  setup(props, context) {
    const value = ref("1")
    return {
      value
    }
  }
})
</script>

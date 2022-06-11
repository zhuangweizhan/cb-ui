<webdoc>
  <title>基础案例</title>
</webdoc>

<template>
  <x-text>请选择你最喜欢做的事情:</x-text>
  <m-card>
    <cb-radio-group v-model:value="value">
      <cb-radio name="1">加班</cb-radio>
      <cb-radio name="2">干活</cb-radio>
      <cb-radio name="3">工作</cb-radio>
    </cb-radio-group>
  </m-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup(props, context) {
    const value = ref("1")
    return {
      value
    }
  }
})
</script>

<style scoped>
.x-column {
  padding: 15px;
}
</style>

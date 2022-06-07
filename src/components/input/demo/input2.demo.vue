<webdoc>
  <title>数字类型</title>
</webdoc>

<template>
  <m-card>
    <cb-input type="number" placeholder="普通数字框" />
    <cb-input type="number" :to-fixed="0" placeholder="限制整数" />
    <cb-input type="number" :to-fixed="2" placeholder="限制两位小数" />
    <cb-input type="number" :min="10" placeholder="最小值为10" />
    <cb-input type="number" :max="99" placeholder="最大值为99" />
  </m-card>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue"

export default defineComponent({
  setup(props, context) {
    return {}
  }
})
</script>

<style scoped>
.cb-input {
  margin-bottom: 10px;
}
</style>

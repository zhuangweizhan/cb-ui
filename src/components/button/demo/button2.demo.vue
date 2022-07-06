<webdoc>
  <title>透明模式</title>
</webdoc>

<template>
  <m-card>
    <cb-button :plain="true" type="primary">默认主题</cb-button>
    <cb-button :plain="true" type="gray">灰色主题</cb-button>
    <cb-button :plain="true" type="info">信息按钮</cb-button>
    <cb-button :plain="true" type="danger">危险按钮</cb-button>
    <cb-button :plain="true" type="warning">警告按钮</cb-button>
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
.cb-button {
  width: 25%;
  margin: 5px;
}
</style>

<webdoc>
  <title>块级模式</title>
</webdoc>

<template>
  <m-card>
    <cb-button :is-block="true">块级模式</cb-button>
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

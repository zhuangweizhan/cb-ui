<webdoc>
  <title>常用图标</title>
</webdoc>

<template>
  <m-card>
    <x-col v-for="(item, index) in iconList" :key="index">
      <x-icon :name="item" />
      <x-text size="small">{{ item }}</x-text>
    </x-col>
  </m-card>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    const iconList = [
      "delete",
      "filter",
      "left",
      "right",
      "selected",
      "unselected",
      "disselected",
      "company",
      "close",
      "tip",
      "add",
      "price",
      "address",
      "selfTake",
      "true",
      "top",
      "bottom"
    ]
    return {
      iconList
    }
  }
})
</script>

<style scoped>
.x-column {
  width: 25%;
}
.x-icon {
  margin: 5px;
}
</style>

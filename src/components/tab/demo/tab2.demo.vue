<webdoc>
  <title>tag模式</title>
</webdoc>

<template>
  <m-card>
    small:
    <cb-tab v-model:value="tabActive" size="small" type="tag" @onChange="onChange">
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="`${item.value}`"></cb-tab-item>
    </cb-tab>

    normal:
    <cb-tab v-model:value="tabActive" size="normal" type="tag" @onChange="onChange">
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="`${item.value}`"></cb-tab-item>
    </cb-tab>

    larger:
    <cb-tab v-model:value="tabActive" size="large" type="tag" @onChange="onChange">
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="`${item.value}`"></cb-tab-item>
    </cb-tab>
  </m-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const tabActive = ref(1)
    const tabList = ref([
      { key: 1, value: "待确认" },
      { key: 2, value: "待发货" },
      { key: 3, value: "待收货" }
    ])

    const onChange = val => {
      console.log(`val==`, val)
      tabActive.value = val
    }

    return {
      tabActive,
      tabList,
      onChange
    }
  }
})
</script>

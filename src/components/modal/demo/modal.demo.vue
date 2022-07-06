<webdoc>
  <title>普通案例</title>
</webdoc>

<template>
  <m-card>
    <cb-button @click="() => (show = true)">普通弹窗</cb-button>
    <cb-button @click="() => (show2 = true)">无底部</cb-button>
  </m-card>

  <cb-modal v-model:visible="show" title="提醒" @ok="success">
    <cb-row>
      <cb-text>确定要拯救地球吗？</cb-text>
    </cb-row>
  </cb-modal>

  <cb-modal v-model:visible="show2" title="提醒" footer-type="no">
    <cb-row>
      <cb-text>没得选，你只能拯救了地球</cb-text>
    </cb-row>
  </cb-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const show = ref(false)
    const show2 = ref(false)

    const success = () => {
      alert("恭喜你已经拯救地球")
      show.value = false
    }

    return {
      show,
      show2,
      success
    }
  }
})
</script>

<style scoped>
.cb-button {
  width: 12%;
  margin: 5px;
}
</style>

<webdoc>
  <title>图标案例</title>
</webdoc>

<template>
  <m-card>
    <cb-button :plain="true" icon="/cb-ui/dist/image/icon.png">嵌入图标</cb-button>
    <cb-button :loading="true">加载状态</cb-button>
    <cb-button :radius="5">自定义圆角</cb-button>
    <cb-button :auto-loading="true" @click="test">支持异步</cb-button>
  </m-card>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue"

export default defineComponent({
  setup(props, context) {
    const test = () => {
      return new Promise((resovle, reject) => {
        setTimeout(() => {
          alert("点击成功")
          resovle(true)
        }, 1000)
      })
    }
    return {
      test
    }
  }
})
</script>

<template>
  <span :class="b">
    <template v-if="isPreview">
      <viewer v-if="typeof src === 'string'" :images="[showImg]">
        <img :src="showImg" :style="style" @error="imgError($event)" />
      </viewer>
      <viewer v-else :images="showImg">
        <img v-for="(item, index) in showImg" :key="index" :src="item" :style="style" @error="imgError($event)" />
      </viewer>
    </template>
    <img v-if="!isPreview" :src="showImg" :style="style" @error="imgError($event)" />
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, watch } from "vue"
import { useCommon, useFormatImg } from "../common/hooks/index"
import { props } from "./props"

// 图片
export default defineComponent({
  // 用于图片的展示
  name: "Image",
  props,
  setup(props, context) {
    const stateCommon = useCommon("image")
    const stateComp: { style: Object; showImg: any } = reactive({
      style: {},
      showImg: "" as any
    })

    watch(
      () => props.src,
      val => {
        stateComp.showImg = useFormatImg(val, true)
      }
    )

    const { width, height } = toRefs(props)
    stateComp.style = { width, height }

    const imgError = (event: any) => {
      // const img = event.srcElement
      // img.src = ""
      // img.onerror = null // 防止闪图
    }

    stateComp.showImg = useFormatImg(props.src, true)

    return {
      ...toRefs(stateCommon),
      ...toRefs(stateComp),

      imgError
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

@include b(image) {
  display: flex;
  align-items: center;
}
</style>

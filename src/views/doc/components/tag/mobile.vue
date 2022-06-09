<template>
  <w-mobile :title="nameEn" :is-content="!!demo.demo">
    <div v-for="(item, index) in demo" :key="index">
      <w-preview :component="item" type="mobile" />
    </div>
  </w-mobile>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs } from "vue"
import { useGetDoc } from "./index"

export default defineComponent({
  name: "mobile",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    const stateData = reactive(useGetDoc())

    return {
      ...toRefs(stateData)
    }
  }
})
</script>

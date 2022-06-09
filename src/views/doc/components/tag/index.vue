<template>
  <w-page>
    <template #pc>
      <w-title>{{ nameEn }} {{ name }} </w-title>
      <w-card name="介绍">
        <template #remark>
          {{ desc }}
        </template>
      </w-card>

      <w-card v-if="children.length > 0" name="该组件包含组件">
        <template #remark>
          <div v-for="item in children" :key="item.name" class="text">
            * <b>{{ item.nameEn }}</b
            >({{ item.name }})：{{ item.desc }}
          </div>
        </template>
      </w-card>

      <div v-for="(item, index) in demo" :key="index">
        <w-preview :component="item" />
      </div>

      <w-table :data-source="dataSource"></w-table>
    </template>

    <template #mobile>
      <m-header :title="nameEn" />
      <iframe :src="`${pathname}#${mobileRoute}`" style="width:385px;height:677px;" />
    </template>
  </w-page>
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
    // const pathname = window.location.pathname === "/" ? "" : window.location.pathname
    const pathname = "https://zhuangweizhan.github.io/cb-ui/dist/index.html"

    return {
      ...toRefs(stateData),
      pathname
    }
  }
})
</script>

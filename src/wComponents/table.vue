<template>
  <w-title>API</w-title>
  <w-card v-for="(item, index) in dataSource" :key="index" :name="item.title">
    <div :class="b">
      <div v-for="(cItem, cIndex) in item.data" :key="cIndex" :class="`${be}row`">
        <template v-if="cIndex === 0">
          <div
            v-for="(sItem, sIndex) in cItem"
            :key="sIndex"
            :class="`${be}head`"
            :style="{ flex: sIndex === 1 ? 3 : 1 }"
          >
            {{ sItem }}
          </div>
        </template>
        <template v-else>
          <div
            v-for="(sItem, sIndex) in cItem"
            :key="sIndex"
            :class="`${be}col`"
            :style="{ flex: sIndex === 1 ? 3 : 1 }"
          >
            {{ sItem }}
          </div>
        </template>
      </div>
    </div>
  </w-card>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue"
import { useCommon } from "../plugins/common"

export default defineComponent({
  name: "mobile",
  props: {
    type: {
      type: String,
      default: "pc" // 'pc' | 'mobile'
    },
    dataSource: {
      type: Array,
      required: true
    },
    component: Object
  },
  setup(props) {
    const stateCommon = useCommon("table")

    return {
      ...toRefs(stateCommon)
    }
  }
})
</script>

<style lang="scss">
@import "../styles/common.scss";

@include b(table) {
  background: white;

  @include e(row) {
    display: flex;
  }

  @include e(head) {
    font-size: 12px;
    margin: 10px 5px;
    color: #8b8686;
  }

  @include e(col) {
    padding: 15px 5px;
    border-top: 1px solid #f3f3f3;
    color: #5a5858;
    font-size: 15px;
  }
}
</style>

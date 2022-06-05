<template>
  <w-card v-if="type === 'pc'" :name="component.__sourceTitle" :class="b">
    <div :class="`${be}content`">
      <pre class="language-html" v-html="html" />
    </div>
  </w-card>
  <div v-if="type === 'mobile'" :class="`${be}mobile`">
    <div :class="`${be}mobile_title`">
      {{ component.__sourceTitle }}
      <span :class="`${be}mobile_remark`">{{ component.__sourceRemark }}</span>
    </div>
    <div :class="`${be}mobile_card`">
      <component :is="component" />
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs"
import "prismjs/themes/prism.css"
import { computed, defineComponent, toRefs } from "vue"
import { useCommon } from "../plugins/common"

export default defineComponent({
  name: "mobile",
  props: {
    type: {
      type: String,
      default: "pc" // 'pc' | 'mobile'
    },
    component: Object
  },
  setup(props) {
    const Prism = (window as any).Prism
    const stateCommon = useCommon("preview")

    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, "html")
    })

    return {
      ...toRefs(stateCommon),
      html
    }
  }
})
</script>

<style lang="scss">
@import "../styles/common.scss";

@include b(preview) {
  padding: 4px 16px;
  border-top: 1px dashed #f3f3f3;

  > pre {
    line-height: 1.1;
    font-family: Consolas, "Courier New", Courier, monospace;
    margin: 0;
    background-color: rgb(250, 250, 250);
  }

  @include e(title) {
  }

  @include e(content) {
  }

  @include e(mobile) {
    line-height: 32px;
  }

  @include e(mobile_title) {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    align-items: baseline;
    color: #888;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 5px;
  }

  @include e(mobile_remark) {
    font-size: 14px;
  }

  @include e(mobile_card) {
    // padding-bottom: 10px;
    margin-bottom: 10px;
    // background: white;
    border-bottom: 1px solid #eaeaea;
    margin: 10px 0;
    // padding: 10px 0;
  }
}
</style>

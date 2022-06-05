<template>
  <div>
    <w-header></w-header>
    <div class="xui_page_content">
      <div class="xui_pc">
        <slot name="pc"></slot>
      </div>

      <div class="xui_mobile">
        <slot name="mobile"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import wHeader from "@/wComponents/header.vue"

export default defineComponent({
  components: { wHeader },
  async setup(props, context) {}
})
</script>

<style lang="scss">
.xui_page_content {
  display: flex;
  width: 100%;
}
.xui_pc {
  margin-left: 10px;
  width: calc(100vw - 665px);
  height: calc(100vh - 90px);
  overflow-y: scroll;
  margin-right: 10px;
}

.xui_pc::-webkit-scrollbar {
  display: none;
}

.xui_pc ::scrollbar {
  display: none;
}
.xui_mobile {
  width: 385px;
}
</style>

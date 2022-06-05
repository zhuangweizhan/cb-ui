<template>
  <div>
    <w-header></w-header>

    <div class="xui_layout">
      <w-sidebar></w-sidebar>

      <div class="xui_content">
        <router-view v-slot="{ Component }">
          <keep-alive :include="includeCache">
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import wHeader from "@/wComponents/header.vue"
import wSidebar from "@/wComponents/sidebar.vue"

export default defineComponent({
  components: { wHeader, wSidebar },
  async setup(props, context) {}
})
</script>

<style lang="scss" scoped>
.xui_layout {
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
  margin-top: 70px;
}
.xui_content {
  margin-left: 225px;
  // background: white;
  width: 100%;
}
</style>

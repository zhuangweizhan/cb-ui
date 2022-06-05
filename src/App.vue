<template>
  <div class="app">
    <suspense>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
body {
  background: #f8f8f8;
}

iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}
</style>

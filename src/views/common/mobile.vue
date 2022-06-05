<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeCache">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  components: {},
  async setup(props, context) {}
})
</script>

<style>
body {
  margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>

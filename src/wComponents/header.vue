<template>
  <div class="xui-header">
    <div class="xui-header__lead">
      <img class="xui-header__logo" :src="logo" alt="logo" />
      <span class="xui-header__name">CB-UI</span>
    </div>
    <div class="xui-header__title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import config from "@/config"

import { ref, computed, defineComponent } from "vue"
import { useRouter } from "vue-router"
import { Ref, ComputedRef } from "vue"

export default defineComponent({
  name: "header",
  setup() {
    const title: Ref<string> = ref(config.title)
    const desc: Ref<string> = ref(config.desc)
    const logo: Ref<string> = ref(config.logo)

    return {
      logo,
      title,
      desc
    }
  }
})
</script>

<style scoped lang="scss">
.xui-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  justify-content: flex-start;
  user-select: none;
  z-index: 996;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  background: white;

  &__lead {
    display: flex;
    align-items: center;
  }

  &__name {
    margin-right: 12px;
    flex-shrink: 0;
    font-size: 25px;
    font-weight: bolder;
    background-image: -webkit-linear-gradient(left, #e2b820, #fb3110, #5187ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__logo {
    height: 40px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  &__title {
    font-size: 16px;
  }
}
</style>

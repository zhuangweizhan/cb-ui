<template>
  <div :class="b">
    <ul v-if="type === 'default'" :class="`${be}header_list`">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="[`${be}item`, item.key == modelVal ? `${be}item-select` : ``]"
        :style="`width: calc(100% / ${list.length || 1})`"
        @click="onClick(index)"
      >
        <div :class="item.key == modelVal ? `${be}item-select-label` : ``">
          <cb-text :size="size" :type="item.key == modelVal ? 'primary' : 'normal'">{{ item.label }}</cb-text>
        </div>
      </li>
    </ul>

    <div v-if="type === 'tag'" :class="`${be}header_tag`">
      <cb-tag
        v-for="(item, index) in list"
        :key="index"
        :size="size"
        :plain="true"
        :type="item.key == modelVal ? 'primary' : 'gray'"
        :n="[`${be}item`, item.key == modelVal ? `${be}item-select` : ``]"
        @click="onClick(index)"
      >
        {{ item.label }}
      </cb-tag>
    </div>
    <div :class="`${be}content`">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, provide, watch } from "vue"
import { useCommon, useProvide } from "../common/hooks/index"
import { Emitter } from "../common/emitter"
import { props } from "./props"

export const tabEmitterKey = Symbol()

// 选项卡
export default defineComponent({
  // 用于快速集成选项卡
  name: "Tab",
  props,
  /*
   * change：值变化监听
   */
  emits: ["update:input", "change"],
  setup(props, context) {
    const emitter = new Emitter()

    const stateCommon = useCommon("xtab")

    const stateComp = reactive({
      list: [],
      modelVal: props.value
    })

    // useProvide({ XTab: true })

    emitter.on("acceptTabItemFn", (item: any) => {
      stateComp.list.push(item)
    })

    provide(tabEmitterKey, emitter)

    const onClick = (index: number) => {
      context.emit("update:input", stateComp.list[index].key)
      context.emit("change", { index, key: stateComp.list[index].key })
      stateComp.modelVal = stateComp.list[index].key
    }

    return {
      ...toRefs(stateCommon),
      ...toRefs(stateComp),
      onClick
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

@include b(xtab) {
  width: 100%;
  @include e(header_list) {
    display: flex;
    justify-content: flecb-start;
    bocb-sizing: border-box;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    list-style: none;
    background: #fff;
    outline: none;
    bocb-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    zoom: 1;
    line-height: 34px;
    white-space: nowrap;
    border: 0;
    bocb-shadow: none;
    // margin-bottom: 7px;
    border-bottom: 2px solid #f3f3f3;

    overflow-y: auto;
  }

  @include e(header_tag) {
    display: flex;
    justify-content: flecb-start;
    bocb-sizing: border-box;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    list-style: none;
    outline: none;
    bocb-shadow: 0 2px 8px rgb(0 0 0 / 15%);
    transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    zoom: 1;
    line-height: 24px;
    white-space: nowrap;
    border: 0;
    bocb-shadow: none;
    overflow-y: auto;
  }

  @include e(item) {
    margin: 0;
    padding: 8px 20px 0;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    position: relative;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  @include e(item-select) {
    color: #f0780e;
    // border-bottom: 2px solid #f0780e;

    &-label {
      position: relative;
      display: inline-block;
    }

    &-label::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      display: inline-block;
      width: 100%;
      height: 3px;
      background: #f0780e;
      border-radius: 2px;
    }

    // @include e(label-select) {
    //   position: relative;
    //   display: inline-block;
    // }
  }

  @include e(content) {
    width: 100%;
    background: #eff0f1;
  }
}
</style>

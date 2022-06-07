<template>
  <div :class="[b, disabled ? `${be}disabled` : '', `${be}size-${size}`]">
    <img v-if="leftIcon" :class="`${be}img`" :src="leftIcon" />
    <input
      ref="inputRef"
      :type="type"
      :value="modelVal"
      :disabled="disabled"
      :class="[`${be}ref`]"
      :style="inputStyle"
      autocomplete="off"
      :maxlength="maxLength"
      :readonly="disabled"
      :placeholder="placeholder"
      @input="onChange"
      @blur="onBlur"
      @focus="onFocus"
    />
    <img v-if="rightIcon" :class="`${be}img`" :src="rightIcon" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, inject, onMounted, watch, nextTick } from "vue"
import { useCommon, useDealDigit } from "../common/hooks/index"
import { props } from "./props"

// 文本框
export default defineComponent({
  // 用于文本框的输入
  name: "Input",
  props,
  /*
   * change：值变化监听事件
   * blur：失焦事件监听
   * focus：聚焦事件监听
   */
  emits: ["change", "blur", "focus", "update:value"],
  setup(props, { emit }) {
    const stateCommon = useCommon("input")
    const modelVal = ref(props.value)
    const inputRef = ref()

    const updateValue = (value: any) => {
      // 判断是数字类型
      if (props.type === "number") {
        if (value !== undefined) {
          const dotArray = value.toString().split(".") //小数长度
          // 如果是有小数点限制，需格式化小数点
          if (dotArray.length > 1 && dotArray[1].length > 0) {
            props.toFixed >= 0 && (value = useDealDigit(Number(value), props.toFixed))
          }
        }
        // 如果有最小值限制
        if (props.min !== undefined && value !== "" && value !== undefined && props.min > Number(value)) {
          value = props.min
        }
        // 如果有最大值限制
        if (props.max !== undefined && value !== "" && value !== undefined && props.max < Number(value)) {
          value = props.max
        }
      }

      // 同步显示的ref
      if (inputRef.value && inputRef.value.value !== value) {
        inputRef.value.value = value
      }
      // 更新modelVal
      if (modelVal.value !== value) {
        modelVal.value = value
        emit("update:value", value)
        emit("change", value)
      }
    }

    watch(
      () => props.value,
      value => {
        updateValue(value)
      },
      {
        immediate: true
      }
    )

    const onChange = () => {
      emit("update:value", modelVal.value)
      emit("blur", modelVal.value)
    }

    const onBlur = (e: Event) => {
      let { value }: any = e.target as HTMLInputElement
      updateValue(value)

      emit("update:value", modelVal.value)
      emit("blur", modelVal.value)
    }

    const onFocus = () => {
      emit("update:value", modelVal.value)
      emit("focus", modelVal.value)
    }

    return {
      ...toRefs(stateCommon),
      inputRef,
      onChange,
      onBlur,
      onFocus,
      modelVal
    }
  }
})
</script>

<style lang="scss">
@import "../common/scss/common.scss";

$size-array: (
    key: "small",
    fontSize: 12,
    height: 20,
    borderRadius: 4
  ),
  (
    key: "normal",
    fontSize: 14,
    height: 28,
    borderRadius: 8
  ),
  (
    key: "large",
    fontSize: 16,
    height: 32,
    borderRadius: 10
  );

@include b(input) {
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  border: 1px solid #f3f3f3;

  @include e(ref) {
    position: relative;
    width: 100%;

    background-image: none;
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 15px;
    color: rgb(51, 54, 57);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    // border: 1px solid #f3f3f3;

    &:hover {
      border-color: #c0c4cc;
    }
    &:active,
    &:focus {
      outline: none;
      border-color: #0099dd;
      box-shadow: 0 0 0 2px #e8c2a0;
    }

    &::placeholder {
      color: rgb(213, 215, 220);
      font-size: inherit;
    }
  }

  @include e(img) {
    height: 25px;
    margin: 5px 10px;
  }

  @include e(disabled) {
    background: #f3f3f3;
  }

  @for $i from 1 through length($size-array) {
    $item: nth($size-array, $i);

    @include e("size") {
      @include m(map-get($item, key)) {
        font-size: #{map-get($item, fontSize)}px;
        height: #{map-get($item, height)}px;
        line-height: #{map-get($item, height)}px;
        border-radius: #{map-get($item, borderRadius)}px;

        & input {
          border-radius: #{map-get($item, borderRadius)}px;
        }
      }
    }
  }
}
</style>

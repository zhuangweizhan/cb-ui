import { PropType } from "vue"

export type SizeItem = "small" | "normal" | "large" | "larger" //"smaller" |
export type TypeItem = "normal" | "danger" | "success" | "gray" | "primary" | "info" | "white" | "placeholder"

export const props = {
  // 尺寸大小
  size: {
    type: String as PropType<SizeItem>,
    default: "normal",
    validator: (str: string) => {
      return ["small", "normal", "large", "larger"].includes(str)
    }
  },
  // 文本类型
  type: {
    type: String as PropType<TypeItem>,
    default: "normal",
    validator: (str: string) => {
      return ["normal", "danger", "success", "gray", "primary", "info", "white", "placeholder"].includes(str)
    }
  },
  // 省略号行数，默认不开启
  ellipsis: {
    type: Number,
    default: 0
  },
  // 是否显示右侧点击按钮
  rightIcon: {
    type: Boolean,
    default: false
  },
  // form表单开启默认缩进
  isFormIndent: {
    type: Boolean,
    default: true
  }
}

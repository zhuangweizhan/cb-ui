import { PropType } from "vue"

export type SizeItem = "small" | "normal" | "large" //"smaller" | | "larger"
export type TypeItem = "danger" | "gray" | "primary" | "info"

export const props = {
  // 类型
  type: {
    type: String as PropType<TypeItem>,
    default: "primary",
    validator: (str: string) => {
      return ["danger", "gray", "primary", "info"].includes(str)
    }
  },
  // 大小
  size: {
    type: String as PropType<SizeItem>,
    default: "normal",
    validator: (str: string) => {
      return ["small", "normal", "large"].includes(str)
    }
  },
  // 是否透明
  plain: {
    type: Boolean,
    default: false
  }
}

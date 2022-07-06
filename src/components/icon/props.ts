import { PropType } from "vue"

type IconType =
  | "delete"
  | "filter"
  | "left"
  | "right"
  | "selected"
  | "unselected"
  | "disselected"
  | "company"
  | "close"
  | "tip"
  | "add"
  | "price"
  | "address"
  | "selfTake"

type SizeType = "smaller" | "small" | "default" | "large" | "larger"

export const props = {
  // 图标标识，当前读取cdn
  name: {
    type: String as PropType<IconType>,
    require: true,
    validator: (str: string) => {
      return [
        "delete",
        "filter",
        "left",
        "right",
        "selected",
        "unselected",
        "disselected",
        "company",
        "close",
        "tip",
        "add",
        "price",
        "address",
        "selfTake"
      ].includes(str)
    }
  },
  // 图标大小
  size: {
    type: String as PropType<SizeType>,
    default: "default",
    validator: (str: string) => {
      return ["smaller", "small", "default", "large", "larger"].includes(str)
    }
  }
}

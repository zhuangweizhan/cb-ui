import { PropType } from "vue"

type TypeProp = "default" | "tag"
type Item = {
  label: String
  key: String | Number
}
export type SizeItem = "small" | "normal" | "large" | "larger" //"smaller" |

export const props = {
  // 绑定的值
  value: [String, Number],
  // 标签类型
  type: {
    type: String as PropType<TypeProp>,
    default: "default",
    validator: (str: string) => {
      return ["default", "tag"].includes(str)
    }
  },
  // 大小
  size: {
    type: String as PropType<SizeItem>,
    default: "normal",
    validator: (str: string) => {
      return ["small", "normal", "large", "larger"].includes(str)
    }
  }
}

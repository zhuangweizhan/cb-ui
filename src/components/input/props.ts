import { PropType } from "vue"
export type SizeItem = "small" | "normal" | "large" //"smaller" | "larger"

export const props = {
  // 双向绑定的值
  value: [String, Number],
  // 长度限制
  maxLength: {
    type: Number,
    default: 999
  },
  // 按钮大小
  size: {
    type: String as PropType<SizeItem>,
    default: "normal",
    validator: (str: string) => {
      return ["small", "normal", "large"].includes(str)
    }
  },
  // 文本类型，支持普通输入，与数字输入
  type: {
    type: String,
    default: "text",
    validator: (str: string) => {
      return ["text", "number", "password"].includes(str)
    }
  },
  // 提示语
  placeholder: {
    type: String,
    default: "请输入"
  },
  // 最小数限制，不传不限制
  min: {
    type: Number
  },
  // 最大数限制，不传不限制
  max: {
    type: Number
  },
  // 保留小数位数，当type=number生效, -1时表示不生效
  toFixed: {
    type: Number,
    default: -1
  },
  // 禁止输入
  disabled: {
    type: Boolean,
    default: false
  },
  // 左侧图标
  leftIcon: {
    type: String,
    default: ""
  },
  // 右侧图标
  rightIcon: {
    type: String,
    default: ""
  },
  // 自定义Input的样式
  inputStyle: {
    type: Object,
    default: () => {
      return {}
    }
  }
}

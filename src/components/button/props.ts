import { PropType } from "vue"
export type ThemeType = "primary" | "info" | "danger" | "warning " | "link"
export type SizeItem = "small" | "normal" | "large" //"smaller" | "larger"

export const props = {
  // 类型
  type: {
    type: String as PropType<ThemeType>,
    default: "primary",
    validator: (str: string) => {
      return ["primary", "info", "danger", "warning", "link"].includes(str)
    }
  },
  // 是否加载状态
  loading: {
    type: Boolean,
    default: false
  },
  // 是否禁止点击
  disabled: {
    type: Boolean,
    default: false
  },
  // 字体大小
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
  },
  //嵌入图标
  icon: {
    type: String,
    default: ""
  },
  //嵌入图标
  isBlock: {
    type: Boolean,
    default: false
  },
  //是否支持冒泡
  isStopPropagation: {
    type: Boolean,
    default: true
  },
  // 自动loading模式
  autoLoading: {
    type: Boolean,
    default: false
  },
  //点击事件
  onClick: {
    type: Function as PropType<(e: Event) => void | Promise<any>>
  },
  //圆角,单位px
  radius: {
    type: Number,
    default: -1
  }
}

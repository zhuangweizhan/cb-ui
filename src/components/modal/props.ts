export const props = {
  // 弹窗标题
  title: {
    type: String,
    default: ""
  },
  // 确认按钮名称
  btnOkName: {
    type: String,
    default: "确定"
  },
  // 宽度
  width: {
    type: String,
    default: "500px"
  },
  // 是否显示
  visible: {
    type: Boolean,
    default: false
  },
  // 底部类型
  footerType: {
    type: Boolean,
    default: "default",
    validator: (str: string) => {
      return ["no", "default"].includes(str)
    }
  },
  // 弹窗层级
  zIndex: {
    type: Number,
    default: 3000
  }
}

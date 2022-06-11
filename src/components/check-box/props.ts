export const props = {
  // 当前是否选中
  value: Boolean,
  // 是否禁止选择
  disabled: {
    type: Boolean,
    default: false
  },
  // 选中图标
  activeIcon: {
    type: String,
    default: "selected"
  },
  // 非选中图标
  inactiveIcon: {
    type: String,
    default: "unselected"
  },
  // 禁止选择图标
  disabledIcon: {
    type: Boolean,
    default: "disselected"
  }
}

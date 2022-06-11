export const props = {
  // 是否选中
  name: {
    type: [String, Number],
    default: ""
  },
  activeIcon: {
    type: String,
    default: "/static/image/clound_crm_h5/icon/selected.png"
  },
  inactiveIcon: {
    type: String,
    default: "/static/image/clound_crm_h5/icon/unselected.png"
  }
}

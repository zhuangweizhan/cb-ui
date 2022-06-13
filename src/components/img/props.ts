export const props = {
  // 图片路径
  src: {
    type: [String, Array]
  },
  // 是否支持预览
  isPreview: {
    type: Boolean,
    default: false
  },
  // 图片宽度
  width: {
    type: [String, Number],
    default: "100%"
  },
  // 图片高度，当不传时，默认拿宽度的值
  height: {
    type: [String, Number],
    default: ""
  }
}

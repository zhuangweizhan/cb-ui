import { reactive } from "vue"
import demo from "../../../../components/button/demo/index"

export function useGetDoc() {
  const obj = {
    name: " 按钮",
    nameEn: "Button",
    children: [],
    desc: " 按钮组件，用于事件触发",
    dataSource: [
      {
        title: "参数",
        data: [
          ["参数名", "说明", "类型", "默认值"],
          ["type", " 类型，可选值为: primary info danger warning link", "String", "primary"],
          ["loading", " 是否加载状态", "Boolean", false],
          ["disabled", " 是否禁止点击", "Boolean", false],
          ["size", " 字体大小，可选值为: small normal large", "String", "normal"],
          ["plain", " 是否透明", "Boolean", false],
          ["icon", "嵌入图标", "String", ""],
          ["isBlock", "嵌入图标", "Boolean", false],
          ["isStopPropagation", "是否支持冒泡", "Boolean", true],
          ["autoLoading", " 自动loading模式", "Boolean", false],
          ["onClick", "点击事件", "Function", "-"],
          ["radius", "圆角,单位px", "Number", "-"]
        ]
      },
      {
        title: "插槽",
        data: [
          ["插槽名", "说明", "参数"],
          ["default", "默认插槽", "-"]
        ]
      },
      {
        title: "回调",
        data: [
          ["回调名称", "说明"],
          ["click", "点击事件监听"]
        ]
      }
    ],
    mobileRoute: "/mobile/button"
  }
  return reactive({ ...obj, demo })
}

export default {}

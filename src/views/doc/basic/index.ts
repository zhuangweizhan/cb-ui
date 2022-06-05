import { reactive } from "vue"
import demo from "../../../components/button/demo/index"

export function useGetDoc() {
  const obj = {
    name: " 按钮",
    nameEn: "Button",
    desc: " 按钮组件，用于事件触发",
    dataSource: [
      {
        title: "参数",
        data: [
          ["参数名", "说明", "类型", "默认值"],
          ["type", " 类型，可选值为: primary", "String", "primary"],
          ["loading", " 是否加载状态", "Boolean", false],
          ["disabled", " 是否禁止点击", "Boolean", false],
          ["size", " 字体大小，可选值为: small normal large", "String", "normal"],
          ["plain", " 是否透明", "Boolean", false]
        ]
      },
      {
        title: "插槽",
        data: [
          ["插槽名", "说明", "参数"],
          ["default", "默认插槽", "-"]
        ]
      },
      { title: "方法" },
      {
        title: "事件",
        data: [
          ["事件名称", "说明"],
          ["click", null]
        ]
      }
    ],
    mobileRoute: "/mobile/button"
  }
  return reactive({ ...obj, demo })
}

export default {}

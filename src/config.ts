const config = {
  title: "一款基于 Vue3 + Typescript 移动端开源组件库",
  logo: "/cb-ui/dist/image/icon.png",
  desc: "一款基于vue3 + typescript开源组件库",
  basicMenu: [
    {
      title: "开发指南",
      type: "basic",
      children: [
        { name: "基本介绍", url: "introduce" },
        { name: "更新记录", url: "update" }
      ]
    }
  ],
  componentsMenu: [
    {
      title: "基础组件",
      children: [
        { name: "按钮", url: "button" },
        { name: "输入框", url: "input" },
        { name: "标签", url: "tag" },
        { name: "选项栏", url: "tab", children: ["tabItem"] },
        { name: "文本", url: "text" },
        { name: "单选框", url: "radio", children: ["radioGroup"] },
        { name: "弹窗", url: "model" }
      ]
    }
  ]
}
export default config

import { reactive } from "vue"  
  import demo from "../../../../components/tab/demo/index"

  export function useGetDoc() {
    const obj = {"name":" 选项卡","nameEn":"Tab","children":[{"name":" 选项卡Item","nameEn":"TabItem","desc":" 搭配Tab组件，快速布局"}],"desc":" 用于快速集成选项卡","dataSource":[{"title":"参数","data":[["参数名","说明","类型","默认值"],["value"," 绑定的值","String,Number","-"],["type"," 标签类型，可选值为: default tag","String","default"],["size"," 大小，可选值为: small normal large larger","String","normal"]]},{"title":"插槽","data":[["插槽名","说明","参数"],["default","默认插槽","-"]]},{"title":"回调","data":[["回调名称","说明"],["change","值变化监听"]]},{"title":"TabItem参数","data":[["参数名","说明","类型","默认值"],["value"," 绑定的值",null,"-"],["label"," 名称","String","key"]]},{"title":"TabItem插槽","data":[["插槽名","说明","参数"],["default","默认插槽","-"]]}],"mobileRoute":"/mobile/tab"}
    return reactive({ ...obj, demo })
  }
      
  export default {}
  
import { reactive } from "vue"  
  import demo from "../../../../components/tag/demo/index"

  export function useGetDoc() {
    const obj = {"name":" 标签","nameEn":"Tag","children":[],"desc":"用于标记关键词和概括主要内容","dataSource":[{"title":"参数","data":[["参数名","说明","类型","默认值"],["type"," 类型，可选值为: danger gray primary info","String","primary"],["size"," 大小，可选值为: small normal large","String","normal"],["plain"," 是否透明","Boolean",false]]},{"title":"插槽","data":[["插槽名","说明","参数"],["default","默认插槽","-"]]}],"mobileRoute":"/mobile/tag"}
    return reactive({ ...obj, demo })
  }
      
  export default {}
  
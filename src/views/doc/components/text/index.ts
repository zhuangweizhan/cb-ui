import { reactive } from "vue"  
  import demo from "../../../../components/text/demo/index"

  export function useGetDoc() {
    const obj = {"name":" 文本","nameEn":"Text","children":[],"desc":" 用于文本的显示","dataSource":[{"title":"参数","data":[["参数名","说明","类型","默认值"],["size"," 尺寸大小，可选值为: small normal large larger","String","normal"],["type"," 文本类型，可选值为: normal danger success gray primary info white placeholder","String","normal"],["ellipsis"," 省略号行数，默认不开启","Number",0],["rightIcon"," 是否显示右侧点击按钮","Boolean",false],["isFormIndent"," form表单开启默认缩进","Boolean",true]]},{"title":"插槽","data":[["插槽名","说明","参数"],["default","默认插槽","-"],["default","默认插槽","-"]]},{"title":"回调","data":[["回调名称","说明"],["click","点击事件监听"]]}],"mobileRoute":"/mobile/text"}
    return reactive({ ...obj, demo })
  }
      
  export default {}
  
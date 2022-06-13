import { reactive } from "vue"  
  import demo from "../../../../components/img/demo/index"

  export function useGetDoc() {
    const obj = {"name":" 图片","nameEn":"Image","children":[],"desc":" 用于图片的展示","dataSource":[{"title":"参数","data":[["参数名","说明","类型","默认值"],["src"," 图片路径","String,Array","-"],["isPreview"," 是否支持预览","Boolean",false],["width"," 图片宽度","String,Number","100%"],["height"," 图片高度，当不传时，默认拿宽度的值","String,Number",""]]}],"mobileRoute":"/mobile/img"}
    return reactive({ ...obj, demo })
  }
      
  export default {}
  
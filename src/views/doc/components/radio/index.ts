import { reactive } from "vue"  
  import demo from "../../../../components/radio/demo/index"

  export function useGetDoc() {
    const obj = {"name":"单选框","nameEn":"Radio","children":[{"name":"单选框组合","nameEn":"RadioGroup","desc":"用于包裹radio快速区分单选条件"}],"desc":" 用于单选选择","dataSource":[{"title":"参数","data":[["参数名","说明","类型","默认值"],["name"," 是否选中","String,Number",""],["activeIcon","","String","/static/image/clound_crm_h5/icon/selected.png"],["inactiveIcon","","String","/static/image/clound_crm_h5/icon/unselected.png"]]},{"title":"插槽","data":[["插槽名","说明","参数"],["default","默认插槽","-"]]},{"title":"RadioGroup参数","data":[["参数名","说明","类型","默认值"],["v-model:value"," 是否选中","String,Number",""]]},{"title":"RadioGroup插槽","data":[["插槽名","说明","参数"],["default","默认插槽","-"]]}],"mobileRoute":"/mobile/radio"}
    return reactive({ ...obj, demo })
  }
      
  export default {}
  
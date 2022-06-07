import { reactive } from "vue"  
  import demo from "../../../../components/input/demo/index"

  export function useGetDoc() {
    const obj = {"name":" 文本框","nameEn":"Input","children":[],"desc":" 用于文本框的输入","dataSource":[{"title":"参数","data":[["参数名","说明","类型","默认值"],["v-model:value"," 双向绑定的值","String,Number","-"],["maxLength"," 长度限制","Number",999],["size"," 按钮大小，可选值为: small normal large","String","normal"],["type"," 文本类型，支持普通输入，与数字输入，可选值为: text number password","String","text"],["placeholder"," 提示语","String","请输入"],["min"," 最小数限制，不传不限制","Number","-"],["max"," 最大数限制，不传不限制","Number","-"],["toFixed"," 保留小数位数，当type=number生效, -1时表示不生效","Number","-"],["disabled"," 禁止输入","Boolean",false],["leftIcon"," 左侧图标","String",""],["rightIcon"," 右侧图标","String",""],["inputStyle"," 自定义Input的样式","Object","{}"]]},{"title":"回调","data":[["回调名称","说明"],["change","值变化监听事件"],["blur","失焦事件监听"],["focus","聚焦事件监听"]]}],"mobileRoute":"/mobile/input"}
    return reactive({ ...obj, demo })
  }
      
  export default {}
  
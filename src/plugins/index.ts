import { reactive, ref } from "vue"

// 公用_对象
export function useCommon(name: string) {
  const b = ref(`x-${name}`)
  const be = ref(`x-${name}__`)
  return reactive({ b, be })
}

export { setupComponents } from "@/plugins/module/components"
export { setupWComponents } from "@/plugins/module/wComponents"

export default {}

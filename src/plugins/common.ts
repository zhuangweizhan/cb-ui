import { reactive, ref } from "vue"

// 公用_对象
export function useCommon(name: string) {
  const b = ref(`xdoc-${name}`)
  const be = ref(`xdoc-${name}__`)
  return reactive({ b, be })
}

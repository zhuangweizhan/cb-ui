import { reactive, ref } from "vue"

// 公用_对象
export function useCommon(name: string) {
  const b = ref(`xdoc-${name}`)
  const be = ref(`xdoc-${name}__`)
  const pathname =
    window.location.pathname === "/"
      ? "https://zhuangweizhan.github.io/cb-ui/dist/index.html"
      : window.location.pathname
  // const pathname = window.location.pathname
  return reactive({ b, be, pathname })
}

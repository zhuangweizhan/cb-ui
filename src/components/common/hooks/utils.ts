// 防抖
export const debounce = (func: Function, delay = 500) => {
  let timeout: any = null
  let prev = Date.now()
  return function() {
    const now = Date.now()
    const remaining = delay - (now - prev)
    clearTimeout(timeout)
    if (remaining <= 0) {
      func(arguments)
      prev = Date.now()
    } else {
      timeout = setTimeout(func, remaining)
    }
  }
}

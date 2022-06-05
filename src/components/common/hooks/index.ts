import { getCurrentInstance, provide, reactive, ref } from "vue"

// 公用_对象
export function useCommon(name: string) {
  const b = ref(`cb-${name}`)
  const be = ref(`cb-${name}__`)
  return reactive({ b, be })
}

// 公用_暴露方法
export function useExpose<T>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    Object.assign(instance.proxy, apis)
  }
}

// 公用_注入方法
export function useProvide<T>(funs: T): void {
  for (const [key, val] of Object.entries(funs)) {
    provide(key, val)
  }
}
// 公用_获取权限
export const useIsShow = (item: any) => {
  const { show, permission } = item
  const showFlag = show !== undefined ? show : true //不传默认显示
  const permissionFlag = permission !== undefined ? isPermissionUtil(permission) : true //不传默认显示
  return showFlag && permissionFlag
}

// 公用_格式化你的rules
export function useFormatRules(rules: any | any[], extra: any) {
  let result: any = []
  const requiredMessageTip = `请输入${extra.titleBak}`
  if (Array.isArray(rules)) {
    // 说明是数组
    result = rules.map((item: any) => {
      return item.required && !item.message ? { ...item, message: requiredMessageTip } : item
    })
  } else if (typeof rules === "object") {
    // 说明是对象
    result = rules.required && !rules.message ? { ...rules, message: requiredMessageTip } : rules
  }
  return result
}

// 公用_保留两位小数
export function useDealDigit(value: any, digitLength = 2) {
  const num: any = Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value)
  const hasPointLen: any = String(num).split(".")[1] || 0
  const setCurrLen: any = hasPointLen > digitLength ? digitLength : hasPointLen
  return num.toFixed(setCurrLen) * 1 || 0
}

export const formartSingleImg = (val: String) => {
  let imgSrc = ""
  if (!val || val === "" || val === undefined) {
    // 说明图片为空
    imgSrc = ""
  } else if (val.indexOf("http://") !== -1 || val.indexOf("https://") !== -1) {
    // 说明是已经是网络图片
    imgSrc = val + ""
  } else if (val.indexOf("/static/image") !== -1) {
    // 说明是本地静态资源
    imgSrc = `${val}`
  }
  return imgSrc.replace(/;/g, ",")
}

// 公用_初始化你的图片路径
export function useFormatImg(url: String | String[], isFormatArray: Boolean = false) {
  let result: String[] | String = []
  if (typeof url === "string") {
    result = isFormatArray ? [formartSingleImg(url)] : formartSingleImg(url)
  } else if (Array.isArray(url)) {
    result = url.map((item: String) => {
      return formartSingleImg(item)
    })
  }
  return result
}

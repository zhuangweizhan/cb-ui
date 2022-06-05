import AsyncValidator, { ValidateError } from "async-validator"
import { ref } from "vue"
const formatRuleSingle = (array: any[], rules: any, result: any = {}) => {
  const key = array[0]
  array.shift()
  // 当前的key是否存在
  const typeName = !isNaN(key) ? "object" : "array"
  if (!result[key]) {
    if (array.length === 0) {
      // 最后一个
      result[key] = rules
    } else {
      // 说明还需要递归
      const fields = formatRuleSingle(array, rules, result[key] ? result[key].fields : {})
      result[key] = {
        type: typeName,
        fields
      }
    }
  } else {
    // 说明已有
    if (array.length === 0) {
      // 最后一个
      result.fields[key] = rules
    } else {
      // 说明还需要递归
      const obj = formatRuleSingle(array, rules, result[key].fields)
      result[key].fields = { ...obj }
    }
  }
  return result
}

const formatRule = (rules: any) => {
  let result: any = {}
  Object.keys(rules).forEach(key => {
    // 先将[0]转换为.0
    if (key.includes(".")) {
      const keySplitArray = key.split(".")
      result = formatRuleSingle(keySplitArray, rules[key + ""], result)
      // 说明是多级
      // return { ...prev, [curr]: rules[curr + ""] }
    } else {
      result[key] = rules[key + ""]
    }
  })
  return result
}

export function useValidator(model: any, rules: any) {
  const rulesRef = ref(rules ? rules : {})

  const modelRef = ref({})
  let validator: any = null

  const reloadModel = (model: any) => {
    modelRef.value = model ? model : {}
    validator = new AsyncValidator(formatRule(rulesRef.value))
  }

  reloadModel(model) //首次进来需要刷新一次；

  const updateRules = ({ key, rules }: { key: string; rules: any[] | Object }) => {
    rulesRef.value[key] = Array.isArray(rules) ? rules : [rules]
    validator = new AsyncValidator(formatRule(rulesRef.value))
  }

  const resetFields = () => {}

  const clearValidate = () => {}

  const validateField = (key: string, value: any, rules: object) => {
    return new Promise((resolve, reject) => {
      const singleValidator = new AsyncValidator({ [key]: rules })
      const nowModel = { [key]: value }
      singleValidator.validate(nowModel, { firstFields: true }, (errors: ValidateError[]) => {
        // 报错的情况
        if (errors !== null) {
          reject(errors)
        } else {
          console.log(`成功`)
          resolve(true)
        }
      })
    })
  }

  const validateInfos = () => {}

  const validate = () => {
    return new Promise((resolve, reject) => {
      console.log(`validato的model`, modelRef.value)
      console.log(`validato的rules最终`, formatRule(rulesRef.value))

      validator.validate(modelRef.value, { firstFields: true }, (errors: ValidateError[]) => {
        // 报错的情况
        if (errors !== null) {
          console.log(`失败=========`, errors)
          reject(errors)
        } else {
          console.log(`成功`)
          resolve(true)
        }
        // this.validateState = !errors ? "success" : "error"
        // this.validateMessage = errors ? errors[0].message : ""
        // callback(this.validateMessage)
      })
    })

    // validator.validate(model, { firstFields: true }, errors => {
    //   console.log(`errors=========`, errors)
    //   // this.validateState = !errors ? "success" : "error"
    //   // this.validateMessage = errors ? errors[0].message : ""
    //   // callback(this.validateMessage)
    // })
  }

  return {
    resetFields,
    clearValidate,
    validateField,
    validate,
    validateInfos,
    updateRules,
    reloadModel
  }
}

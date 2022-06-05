// 组件类型
export type PropTypes = {
  disable?: boolean
  placeholder?: string
}

// 公用枚举类型
export type RequestEnumType = {
  name: String
  module: String
  [prop: string]: any
}

// 公用枚举类型
export type CommonEnumType = {
  key: String
  value: String | number
  [prop: string]: any
}

// 表格组件提供的方法
export type TableActionType = {
  validate: Function // 提供表格校验方法
  resetDataSource: Function //刷新表格数据的方法
  getSelectedRowKeys: Function // 获取表格已选数据, 包括selectedRowKeys,electedRows
}

// 表单组件提供的方法
export type FormActionType = {
  validate: Function //校验表单
  resetFields: Function // 重置所有表单
  clearValidate: Function // 清空所有表单
}

<webdoc>
  <title>透明模式</title>
</webdoc>

<template>
  <m-card>
    <cb-tag :plain="true" type="danger">危险类型</cb-tag>
    <cb-tag :plain="true" type="gray">灰色类型</cb-tag>
    <cb-tag :plain="true" type="primary">主题类型</cb-tag>
    <cb-tag :plain="true" type="info">详情类型</cb-tag>
  </m-card>
</template>

<style scoped>
.cb-tag {
  margin-right: 10px;
}
</style>

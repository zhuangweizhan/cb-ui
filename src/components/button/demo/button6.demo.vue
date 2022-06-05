<webdoc>
  <title>禁止点击</title>
</webdoc>

<template>
  <m-card>
    <cb-button :disabled="true" type="primary">默认主题</cb-button>
    <cb-button :disabled="true" type="gray">灰色主题</cb-button>
    <cb-button :disabled="true" type="info">信息按钮</cb-button>
    <cb-button :disabled="true" type="danger">危险按钮</cb-button>
    <cb-button :disabled="true" type="warning">警告按钮</cb-button>
    <cb-button :disabled="true" type="link">链接按钮</cb-button>
  </m-card>
</template>

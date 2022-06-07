<webdoc>
  <title>基础案例</title>
</webdoc>

<template>
  <m-card>
    <cb-input left-icon="/image/icon.png" placeholder="左侧图标" />
    <cb-input right-icon="/image/icon.png" placeholder="右侧图标" />
    <cb-input :disabled="true" placeholder="禁止输入" />
    <cb-input type="password" placeholder="密码模式" />
    <cb-input :max-length="5" placeholder="长度限制为5" />
  </m-card>
</template>

<style scoped>
.cb-input {
  margin-bottom: 10px;
}
</style>

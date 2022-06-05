<template>
  <w-page>
    <template #pc>
      <w-card name="介绍">
        <template #remark>
          <div>该组件库为移动端UI框架，基于<b>Vue3 + TypeScript</b>封装而成，开源项目分享搭建组件库过程。</div>
        </template>
      </w-card>

      <w-card name="CB-UI 名称来源">
        <template #remark>
          <div>每个组件库都有自己的命名，笔者也给这套组件库取了个名称: <b>CB-UI</b>。</div>
          <div>它有三层的含义:</div>
          <div>* 1) <b>Come Back</b>, 表示该组件库的意图，回顾或回归自己的专业知识。</div>
          <div>* 2) <b>Compensation Benefit</b>, 表示组件库的期望，不断的争取更美好的生活。</div>
          <div>* 3) <b>Cut Boy</b>, 则表示自己的身份，普通的切图仔。</div>
        </template>
      </w-card>

      <w-card name="CB-UI 的意义">
        <template #remark>
          <div>
            * 1) <b>能力扩展</b>,
            笔者也同时在搭建，企业内部级别的内部组件库。但企业内部组件库，更倾向解决内部的需求，保证需求与稳定为准，因为技术而影响企业系统的稳定性，是种"作死"行为。SO,
            CB-UI用于笔者可以同时用它来突破组件库各种好玩的东西。
          </div>
          <div>* 2) <b>记录发展</b>, 记录自己开发组件库的过程，是一件十分有意义的事情。</div>
          <div>
            * 3) <b>开源分享</b>, 也希望能帮助正想帮助企业搭建内部组件库的你们。当然，思维或者写法不对，也欢迎提出矫正
          </div>
        </template>
      </w-card>

      <w-card name="CB-UI 的介绍">
        <template #remark>
          <div>
            * 1) <b>框架的基本组成</b>, CB-UI是基于Vue3 + Vite +
            TypeScript。没有采用Setup的语法，是为了Vue2.0的小伙伴们，也能快速的理解，参与到项目中来。
          </div>
          <div>
            * 2) <b>文档代码同时并行</b>, github为分析源码使用，如需了解搭建过程，可关注掘金:
            <a href="https://juejin.cn/user/4195392104696519" target="_black">逐步前行</a>。
          </div>
        </template>
      </w-card>
    </template>

    <template #mobile>
      <m-header title="CB-UI" :back="false" />
      <iframe :src="`${pathname}#/basic/mobile`" style="width:385px;height:677px;" />
    </template>
  </w-page>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs } from "vue"

export default defineComponent({
  name: "mobile",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    // const pathname = window.location.pathname === "/" ? "" : window.location.pathname

    const pathname = "https://zhuangweizhan.github.io/cb-ui/dist/index.html"

    return {
      pathname
    }
  }
})
</script>

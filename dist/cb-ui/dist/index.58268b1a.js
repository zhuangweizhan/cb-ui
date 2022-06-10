var y=Object.defineProperty,x=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(u,n,e)=>n in u?y(u,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[n]=e,s=(u,n)=>{for(var e in n||(n={}))v.call(n,e)&&_(u,e,n[e]);if(d)for(var e of d(n))B.call(n,e)&&_(u,e,n[e]);return u},m=(u,n)=>x(u,D(n));import{_ as a,k as t,o as l,p,m as i,l as r,d as A,x as $}from"./index.f4e20d17.js";function b(u){u.__sourceCode=`<template>\r
  <m-card>\r
    <cb-input left-icon="/cb-ui/dist/image/icon.png" placeholder="\u5DE6\u4FA7\u56FE\u6807" />\r
    <cb-input right-icon="/cb-ui/dist/image/icon.png" placeholder="\u53F3\u4FA7\u56FE\u6807" />\r
    <cb-input :disabled="true" placeholder="\u7981\u6B62\u8F93\u5165" />\r
    <cb-input type="password" placeholder="\u5BC6\u7801\u6A21\u5F0F" />\r
    <cb-input :max-length="5" placeholder="\u957F\u5EA6\u9650\u5236\u4E3A5" />\r
  </m-card>\r
</template>\r
\r
<style scoped>\r
.cb-input {\r
  margin-bottom: 10px;\r
}\r
</style>`,u.__sourceTitle="\u57FA\u7840\u6848\u4F8B",u.__sourceRemark=""}const h={};function k(u,n){const e=t("cb-input"),o=t("m-card");return l(),p(o,null,{default:i(()=>[r(e,{"left-icon":"/cb-ui/dist/image/icon.png",placeholder:"\u5DE6\u4FA7\u56FE\u6807"}),r(e,{"right-icon":"/cb-ui/dist/image/icon.png",placeholder:"\u53F3\u4FA7\u56FE\u6807"}),r(e,{disabled:!0,placeholder:"\u7981\u6B62\u8F93\u5165"}),r(e,{type:"password",placeholder:"\u5BC6\u7801\u6A21\u5F0F"}),r(e,{"max-length":5,placeholder:"\u957F\u5EA6\u9650\u5236\u4E3A5"})]),_:1})}typeof b=="function"&&b(h);var S=a(h,[["render",k],["__scopeId","data-v-6ea34be4"]]);function F(u){u.__sourceCode=`<template>\r
  <m-card>\r
    <cb-input type="number" placeholder="\u666E\u901A\u6570\u5B57\u6846" />\r
    <cb-input type="number" :to-fixed="0" placeholder="\u9650\u5236\u6574\u6570" />\r
    <cb-input type="number" :to-fixed="2" placeholder="\u9650\u5236\u4E24\u4F4D\u5C0F\u6570" />\r
    <cb-input type="number" :min="10" placeholder="\u6700\u5C0F\u503C\u4E3A10" />\r
    <cb-input type="number" :max="99" placeholder="\u6700\u5927\u503C\u4E3A99" />\r
  </m-card>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref, toRefs } from "vue"\r
\r
export default defineComponent({\r
  setup(props, context) {\r
    return {}\r
  }\r
})\r
<\/script>\r
\r
<style scoped>\r
.cb-input {\r
  margin-bottom: 10px;\r
}\r
</style>`,u.__sourceTitle="\u6570\u5B57\u7C7B\u578B",u.__sourceRemark=""}const E=A({setup(u,n){return{}}});function z(u,n,e,o,j,T){const c=t("cb-input"),g=t("m-card");return l(),p(g,null,{default:i(()=>[r(c,{type:"number",placeholder:"\u666E\u901A\u6570\u5B57\u6846"}),r(c,{type:"number","to-fixed":0,placeholder:"\u9650\u5236\u6574\u6570"}),r(c,{type:"number","to-fixed":2,placeholder:"\u9650\u5236\u4E24\u4F4D\u5C0F\u6570"}),r(c,{type:"number",min:10,placeholder:"\u6700\u5C0F\u503C\u4E3A10"}),r(c,{type:"number",max:99,placeholder:"\u6700\u5927\u503C\u4E3A99"})]),_:1})}typeof F=="function"&&F(E);var I=a(E,[["render",z],["__scopeId","data-v-6e6c661c"]]);function f(u){u.__sourceCode=`<template>\r
  <m-card>\r
    <cb-input size="small" placeholder="small\u8F93\u5165\u6846" />\r
    <cb-input size="normal" placeholder="normal\u8F93\u5165\u6846" />\r
    <cb-input size="large" placeholder="large\u8F93\u5165\u6846" />\r
  </m-card>\r
</template>\r
\r
<style scoped>\r
.cb-input {\r
  margin-bottom: 10px;\r
}\r
</style>`,u.__sourceTitle="\u5927\u5C0F\u63A7\u5236",u.__sourceRemark=""}const C={};function N(u,n){const e=t("cb-input"),o=t("m-card");return l(),p(o,null,{default:i(()=>[r(e,{size:"small",placeholder:"small\u8F93\u5165\u6846"}),r(e,{size:"normal",placeholder:"normal\u8F93\u5165\u6846"}),r(e,{size:"large",placeholder:"large\u8F93\u5165\u6846"})]),_:1})}typeof f=="function"&&f(C);var R=a(C,[["render",N],["__scopeId","data-v-85d983de"]]),w={demo:S,demo3:R,demo2:I};function O(){return $(m(s({},{name:" \u6587\u672C\u6846",nameEn:"Input",children:[],desc:" \u7528\u4E8E\u6587\u672C\u6846\u7684\u8F93\u5165",dataSource:[{title:"\u53C2\u6570",data:[["\u53C2\u6570\u540D","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C"],["v-model:value"," \u53CC\u5411\u7ED1\u5B9A\u7684\u503C","String,Number","-"],["maxLength"," \u957F\u5EA6\u9650\u5236","Number",999],["size"," \u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A: small normal large","String","normal"],["type"," \u6587\u672C\u7C7B\u578B\uFF0C\u652F\u6301\u666E\u901A\u8F93\u5165\uFF0C\u4E0E\u6570\u5B57\u8F93\u5165\uFF0C\u53EF\u9009\u503C\u4E3A: text number password","String","text"],["placeholder"," \u63D0\u793A\u8BED","String","\u8BF7\u8F93\u5165"],["min"," \u6700\u5C0F\u6570\u9650\u5236\uFF0C\u4E0D\u4F20\u4E0D\u9650\u5236","Number","-"],["max"," \u6700\u5927\u6570\u9650\u5236\uFF0C\u4E0D\u4F20\u4E0D\u9650\u5236","Number","-"],["toFixed"," \u4FDD\u7559\u5C0F\u6570\u4F4D\u6570\uFF0C\u5F53type=number\u751F\u6548, -1\u65F6\u8868\u793A\u4E0D\u751F\u6548","Number","-"],["disabled"," \u7981\u6B62\u8F93\u5165","Boolean",!1],["leftIcon"," \u5DE6\u4FA7\u56FE\u6807","String",""],["rightIcon"," \u53F3\u4FA7\u56FE\u6807","String",""],["inputStyle"," \u81EA\u5B9A\u4E49Input\u7684\u6837\u5F0F","Object","{}"]]},{title:"\u56DE\u8C03",data:[["\u56DE\u8C03\u540D\u79F0","\u8BF4\u660E"],["change","\u503C\u53D8\u5316\u76D1\u542C\u4E8B\u4EF6"],["blur","\u5931\u7126\u4E8B\u4EF6\u76D1\u542C"],["focus","\u805A\u7126\u4E8B\u4EF6\u76D1\u542C"]]}],mobileRoute:"/mobile/input"}),{demo:w}))}export{O as u};

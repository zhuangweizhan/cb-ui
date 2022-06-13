var v=Object.defineProperty,F=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var i=(u,e,n)=>e in u?v(u,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[e]=n,s=(u,e)=>{for(var n in e||(e={}))B.call(e,n)&&i(u,n,e[n]);if(d)for(var n of d(e))x.call(e,n)&&i(u,n,e[n]);return u},l=(u,e)=>F(u,b(e));import{d as C,r as g,_ as h,k as r,o as A,e as R,l as t,m as o,F as k,i as a,x as y}from"./index.d2eb5698.js";function _(u){u.__sourceCode=`<template>\r
  <x-text>\u8BF7\u9009\u62E9\u4F60\u6700\u559C\u6B22\u505A\u7684\u4E8B\u60C5:</x-text>\r
  <m-card>\r
    <cb-radio-group v-model:value="value">\r
      <cb-radio name="1">\u52A0\u73ED</cb-radio>\r
      <cb-radio name="2">\u5E72\u6D3B</cb-radio>\r
      <cb-radio name="3">\u5DE5\u4F5C</cb-radio>\r
    </cb-radio-group>\r
  </m-card>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref } from "vue"\r
\r
export default defineComponent({\r
  setup(props, context) {\r
    const value = ref("1")\r
    return {\r
      value\r
    }\r
  }\r
})\r
<\/script>\r
\r
<style scoped>\r
.x-column {\r
  padding: 15px;\r
}\r
</style>`,u.__sourceTitle="\u57FA\u7840\u6848\u4F8B",u.__sourceRemark=""}const m=C({setup(u,e){return{value:g("1")}}}),S=a("\u8BF7\u9009\u62E9\u4F60\u6700\u559C\u6B22\u505A\u7684\u4E8B\u60C5:"),$=a("\u52A0\u73ED"),G=a("\u5E72\u6D3B"),N=a("\u5DE5\u4F5C");function I(u,e,n,V,w,U){const p=r("x-text"),c=r("cb-radio"),f=r("cb-radio-group"),D=r("m-card");return A(),R(k,null,[t(p,null,{default:o(()=>[S]),_:1}),t(D,null,{default:o(()=>[t(f,{value:u.value,"onUpdate:value":e[0]||(e[0]=E=>u.value=E)},{default:o(()=>[t(c,{name:"1"},{default:o(()=>[$]),_:1}),t(c,{name:"2"},{default:o(()=>[G]),_:1}),t(c,{name:"3"},{default:o(()=>[N]),_:1})]),_:1},8,["value"])]),_:1})],64)}typeof _=="function"&&_(m);var j=h(m,[["render",I],["__scopeId","data-v-52617eae"]]),T={demo:j};function H(){return y(l(s({},{name:"\u5355\u9009\u6846",nameEn:"Radio",children:[{name:"\u5355\u9009\u6846\u7EC4\u5408",nameEn:"RadioGroup",desc:"\u7528\u4E8E\u5305\u88F9radio\u5FEB\u901F\u533A\u5206\u5355\u9009\u6761\u4EF6"}],desc:" \u7528\u4E8E\u5355\u9009\u9009\u62E9",dataSource:[{title:"\u53C2\u6570",data:[["\u53C2\u6570\u540D","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C"],["name"," \u662F\u5426\u9009\u4E2D","String,Number",""],["activeIcon","","String","/static/image/clound_crm_h5/icon/selected.png"],["inactiveIcon","","String","/static/image/clound_crm_h5/icon/unselected.png"]]},{title:"\u63D2\u69FD",data:[["\u63D2\u69FD\u540D","\u8BF4\u660E","\u53C2\u6570"],["default","\u9ED8\u8BA4\u63D2\u69FD","-"]]},{title:"RadioGroup\u53C2\u6570",data:[["\u53C2\u6570\u540D","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C"],["v-model:value"," \u662F\u5426\u9009\u4E2D","String,Number",""]]},{title:"RadioGroup\u63D2\u69FD",data:[["\u63D2\u69FD\u540D","\u8BF4\u660E","\u53C2\u6570"],["default","\u9ED8\u8BA4\u63D2\u69FD","-"]]}],mobileRoute:"/mobile/radio"}),{demo:T}))}export{H as u};

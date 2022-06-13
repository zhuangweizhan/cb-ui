var z=Object.defineProperty,O=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(e,n,u)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[n]=u,p=(e,n)=>{for(var u in n||(n={}))U.call(n,u)&&f(e,u,n[u]);if(k)for(var u of k(n))S.call(n,u)&&f(e,u,n[u]);return e},h=(e,n)=>O(e,T(n));import{d as F,r as C,_ as E,k as d,o as t,p as l,m as r,l as v,e as s,f as m,F as c,i as g,x as I}from"./index.d2eb5698.js";function A(e){e.__sourceCode=`<template>\r
  <m-card>\r
    small:\r
    <cb-tab v-model:value="tabActive" size="small" @onChange="onChange">\r
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="\`\${item.value}\`"></cb-tab-item>\r
    </cb-tab>\r
\r
    normal:\r
    <cb-tab v-model:value="tabActive" size="normal" @onChange="onChange">\r
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="\`\${item.value}\`"></cb-tab-item>\r
    </cb-tab>\r
\r
    larger:\r
    <cb-tab v-model:value="tabActive" size="large" @onChange="onChange">\r
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="\`\${item.value}\`"></cb-tab-item>\r
    </cb-tab>\r
\r
    larger:\r
    <cb-tab v-model:value="tabActive" size="larger" @onChange="onChange">\r
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="\`\${item.value}\`"></cb-tab-item>\r
    </cb-tab>\r
  </m-card>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref } from "vue"\r
\r
export default defineComponent({\r
  setup() {\r
    const tabActive = ref(1)\r
    const tabList = ref([\r
      { key: 1, value: "\u5F85\u786E\u8BA4" },\r
      { key: 2, value: "\u5F85\u53D1\u8D27" },\r
      { key: 3, value: "\u5F85\u6536\u8D27" }\r
    ])\r
\r
    const onChange = val => {\r
      console.log(\`val==\`, val)\r
      tabActive.value = val\r
    }\r
\r
    return {\r
      tabActive,\r
      tabList,\r
      onChange\r
    }\r
  }\r
})\r
<\/script>`,e.__sourceTitle="\u57FA\u672C\u6848\u4F8B",e.__sourceRemark=""}const $=F({setup(){const e=C(1),n=C([{key:1,value:"\u5F85\u786E\u8BA4"},{key:2,value:"\u5F85\u53D1\u8D27"},{key:3,value:"\u5F85\u6536\u8D27"}]);return{tabActive:e,tabList:n,onChange:i=>{console.log("val==",i),e.value=i}}}}),N=g(" small: "),R=g(" normal: "),j=g(" larger: "),V=g(" larger: ");function w(e,n,u,i,B,L){const o=d("cb-tab-item"),b=d("cb-tab"),y=d("m-card");return t(),l(y,null,{default:r(()=>[N,v(b,{value:e.tabActive,"onUpdate:value":n[0]||(n[0]=a=>e.tabActive=a),size:"small",onOnChange:e.onChange},{default:r(()=>[(t(!0),s(c,null,m(e.tabList,a=>(t(),l(o,{key:a.key,value:a.key,label:`${a.value}`},null,8,["value","label"]))),128))]),_:1},8,["value","onOnChange"]),R,v(b,{value:e.tabActive,"onUpdate:value":n[1]||(n[1]=a=>e.tabActive=a),size:"normal",onOnChange:e.onChange},{default:r(()=>[(t(!0),s(c,null,m(e.tabList,a=>(t(),l(o,{key:a.key,value:a.key,label:`${a.value}`},null,8,["value","label"]))),128))]),_:1},8,["value","onOnChange"]),j,v(b,{value:e.tabActive,"onUpdate:value":n[2]||(n[2]=a=>e.tabActive=a),size:"large",onOnChange:e.onChange},{default:r(()=>[(t(!0),s(c,null,m(e.tabList,a=>(t(),l(o,{key:a.key,value:a.key,label:`${a.value}`},null,8,["value","label"]))),128))]),_:1},8,["value","onOnChange"]),V,v(b,{value:e.tabActive,"onUpdate:value":n[3]||(n[3]=a=>e.tabActive=a),size:"larger",onOnChange:e.onChange},{default:r(()=>[(t(!0),s(c,null,m(e.tabList,a=>(t(),l(o,{key:a.key,value:a.key,label:`${a.value}`},null,8,["value","label"]))),128))]),_:1},8,["value","onOnChange"])]),_:1})}typeof A=="function"&&A($);var G=E($,[["render",w]]);function D(e){e.__sourceCode=`<template>\r
  <m-card>\r
    small:\r
    <cb-tab v-model:value="tabActive" size="small" type="tag" @onChange="onChange">\r
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="\`\${item.value}\`"></cb-tab-item>\r
    </cb-tab>\r
\r
    normal:\r
    <cb-tab v-model:value="tabActive" size="normal" type="tag" @onChange="onChange">\r
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="\`\${item.value}\`"></cb-tab-item>\r
    </cb-tab>\r
\r
    larger:\r
    <cb-tab v-model:value="tabActive" size="large" type="tag" @onChange="onChange">\r
      <cb-tab-item v-for="item in tabList" :key="item.key" :value="item.key" :label="\`\${item.value}\`"></cb-tab-item>\r
    </cb-tab>\r
  </m-card>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref } from "vue"\r
\r
export default defineComponent({\r
  setup() {\r
    const tabActive = ref(1)\r
    const tabList = ref([\r
      { key: 1, value: "\u5F85\u786E\u8BA4" },\r
      { key: 2, value: "\u5F85\u53D1\u8D27" },\r
      { key: 3, value: "\u5F85\u6536\u8D27" }\r
    ])\r
\r
    const onChange = val => {\r
      console.log(\`val==\`, val)\r
      tabActive.value = val\r
    }\r
\r
    return {\r
      tabActive,\r
      tabList,\r
      onChange\r
    }\r
  }\r
})\r
<\/script>`,e.__sourceTitle="tag\u6A21\u5F0F",e.__sourceRemark=""}const _=F({setup(){const e=C(1),n=C([{key:1,value:"\u5F85\u786E\u8BA4"},{key:2,value:"\u5F85\u53D1\u8D27"},{key:3,value:"\u5F85\u6536\u8D27"}]);return{tabActive:e,tabList:n,onChange:i=>{console.log("val==",i),e.value=i}}}}),q=g(" small: "),H=g(" normal: "),J=g(" larger: ");function K(e,n,u,i,B,L){const o=d("cb-tab-item"),b=d("cb-tab"),y=d("m-card");return t(),l(y,null,{default:r(()=>[q,v(b,{value:e.tabActive,"onUpdate:value":n[0]||(n[0]=a=>e.tabActive=a),size:"small",type:"tag",onOnChange:e.onChange},{default:r(()=>[(t(!0),s(c,null,m(e.tabList,a=>(t(),l(o,{key:a.key,value:a.key,label:`${a.value}`},null,8,["value","label"]))),128))]),_:1},8,["value","onOnChange"]),H,v(b,{value:e.tabActive,"onUpdate:value":n[1]||(n[1]=a=>e.tabActive=a),size:"normal",type:"tag",onOnChange:e.onChange},{default:r(()=>[(t(!0),s(c,null,m(e.tabList,a=>(t(),l(o,{key:a.key,value:a.key,label:`${a.value}`},null,8,["value","label"]))),128))]),_:1},8,["value","onOnChange"]),J,v(b,{value:e.tabActive,"onUpdate:value":n[2]||(n[2]=a=>e.tabActive=a),size:"large",type:"tag",onOnChange:e.onChange},{default:r(()=>[(t(!0),s(c,null,m(e.tabList,a=>(t(),l(o,{key:a.key,value:a.key,label:`${a.value}`},null,8,["value","label"]))),128))]),_:1},8,["value","onOnChange"])]),_:1})}typeof D=="function"&&D(_);var M=E(_,[["render",K]]),P={demo:G,demo2:M};function X(){return I(h(p({},{name:" \u9009\u9879\u5361",nameEn:"Tab",children:[{name:" \u9009\u9879\u5361Item",nameEn:"TabItem",desc:" \u642D\u914DTab\u7EC4\u4EF6\uFF0C\u5FEB\u901F\u5E03\u5C40"}],desc:" \u7528\u4E8E\u5FEB\u901F\u96C6\u6210\u9009\u9879\u5361",dataSource:[{title:"\u53C2\u6570",data:[["\u53C2\u6570\u540D","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C"],["value"," \u7ED1\u5B9A\u7684\u503C","String,Number","-"],["type"," \u6807\u7B7E\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A: default tag","String","default"],["size"," \u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A: small normal large larger","String","normal"]]},{title:"\u63D2\u69FD",data:[["\u63D2\u69FD\u540D","\u8BF4\u660E","\u53C2\u6570"],["default","\u9ED8\u8BA4\u63D2\u69FD","-"]]},{title:"\u56DE\u8C03",data:[["\u56DE\u8C03\u540D\u79F0","\u8BF4\u660E"],["change","\u503C\u53D8\u5316\u76D1\u542C"]]},{title:"TabItem\u53C2\u6570",data:[["\u53C2\u6570\u540D","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C"],["value"," \u7ED1\u5B9A\u7684\u503C",null,"-"],["label"," \u540D\u79F0","String","key"]]},{title:"TabItem\u63D2\u69FD",data:[["\u63D2\u69FD\u540D","\u8BF4\u660E","\u53C2\u6570"],["default","\u9ED8\u8BA4\u63D2\u69FD","-"]]}],mobileRoute:"/mobile/tab"}),{demo:P}))}export{X as u};

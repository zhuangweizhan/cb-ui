var T=Object.defineProperty,z=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(t,o,e)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,g=(t,o)=>{for(var e in o||(o={}))j.call(o,e)&&y(t,e,o[e]);if(m)for(var e of m(o))N.call(o,e)&&y(t,e,o[e]);return t},$=(t,o)=>z(t,S(o));import{_ as s,k as a,o as i,p as d,m as n,l as u,i as r,d as p,x as P}from"./index.e8a1070b.js";function F(t){t.__sourceCode=`<template>\r
  <m-card>\r
    <cb-button type="primary">\u9ED8\u8BA4\u4E3B\u9898</cb-button>\r
    <cb-button type="gray">\u7070\u8272\u4E3B\u9898</cb-button>\r
    <cb-button type="info">\u4FE1\u606F\u6309\u94AE</cb-button>\r
    <cb-button type="danger">\u5371\u9669\u6309\u94AE</cb-button>\r
    <cb-button type="warning">\u8B66\u544A\u6309\u94AE</cb-button>\r
    <cb-button type="link">\u94FE\u63A5\u6309\u94AE</cb-button>\r
  </m-card>\r
</template>`,t.__sourceTitle="\u4E3B\u9898\u63A7\u5236",t.__sourceRemark=""}const C={},I=r("\u9ED8\u8BA4\u4E3B\u9898"),V=r("\u7070\u8272\u4E3B\u9898"),G=r("\u4FE1\u606F\u6309\u94AE"),L=r("\u5371\u9669\u6309\u94AE"),q=r("\u8B66\u544A\u6309\u94AE"),H=r("\u94FE\u63A5\u6309\u94AE");function J(t,o){const e=a("cb-button"),_=a("m-card");return i(),d(_,null,{default:n(()=>[u(e,{type:"primary"},{default:n(()=>[I]),_:1}),u(e,{type:"gray"},{default:n(()=>[V]),_:1}),u(e,{type:"info"},{default:n(()=>[G]),_:1}),u(e,{type:"danger"},{default:n(()=>[L]),_:1}),u(e,{type:"warning"},{default:n(()=>[q]),_:1}),u(e,{type:"link"},{default:n(()=>[H]),_:1})]),_:1})}typeof F=="function"&&F(C);var K=s(C,[["render",J]]);function E(t){t.__sourceCode=`<template>\r
  <m-card>\r
    <cb-button :plain="true" type="primary">\u9ED8\u8BA4\u4E3B\u9898</cb-button>\r
    <cb-button :plain="true" type="gray">\u7070\u8272\u4E3B\u9898</cb-button>\r
    <cb-button :plain="true" type="info">\u4FE1\u606F\u6309\u94AE</cb-button>\r
    <cb-button :plain="true" type="danger">\u5371\u9669\u6309\u94AE</cb-button>\r
    <cb-button :plain="true" type="warning">\u8B66\u544A\u6309\u94AE</cb-button>\r
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
.x-button {\r
  width: 25%;\r
  margin: 5px;\r
}\r
</style>`,t.__sourceTitle="\u900F\u660E\u6A21\u5F0F",t.__sourceRemark=""}const v=p({setup(t,o){return{}}}),M=r("\u9ED8\u8BA4\u4E3B\u9898"),O=r("\u7070\u8272\u4E3B\u9898"),Q=r("\u4FE1\u606F\u6309\u94AE"),U=r("\u5371\u9669\u6309\u94AE"),W=r("\u8B66\u544A\u6309\u94AE");function X(t,o,e,_,b,f){const c=a("cb-button"),l=a("m-card");return i(),d(l,null,{default:n(()=>[u(c,{plain:!0,type:"primary"},{default:n(()=>[M]),_:1}),u(c,{plain:!0,type:"gray"},{default:n(()=>[O]),_:1}),u(c,{plain:!0,type:"info"},{default:n(()=>[Q]),_:1}),u(c,{plain:!0,type:"danger"},{default:n(()=>[U]),_:1}),u(c,{plain:!0,type:"warning"},{default:n(()=>[W]),_:1})]),_:1})}typeof E=="function"&&E(v);var Y=s(v,[["render",X],["__scopeId","data-v-2edc8af0"]]);function B(t){t.__sourceCode=`<template>\r
  <m-card>\r
    <cb-button size="small">\u5C0F\u6309\u94AE</cb-button>\r
    <cb-button size="normal">\u6B63\u5E38\u6309\u94AE</cb-button>\r
    <cb-button size="large">\u5927\u6309\u94AE</cb-button>\r
  </m-card>\r
</template>\r
\r
<style>\r
.xdoc-mobile-card {\r
  display: flex;\r
  align-items: center;\r
}\r
.cb-button {\r
  width: 25%;\r
  margin: 5px;\r
}\r
</style>`,t.__sourceTitle="\u5927\u5C0F\u63A7\u5236",t.__sourceRemark=""}const D={},Z=r("\u5C0F\u6309\u94AE"),tt=r("\u6B63\u5E38\u6309\u94AE"),et=r("\u5927\u6309\u94AE");function nt(t,o){const e=a("cb-button"),_=a("m-card");return i(),d(_,null,{default:n(()=>[u(e,{size:"small"},{default:n(()=>[Z]),_:1}),u(e,{size:"normal"},{default:n(()=>[tt]),_:1}),u(e,{size:"large"},{default:n(()=>[et]),_:1})]),_:1})}typeof B=="function"&&B(D);var ut=s(D,[["render",nt]]);function h(t){t.__sourceCode=`<template>\r
  <m-card>\r
    <cb-button :plain="true" icon="/image/icon.png">\u5D4C\u5165\u56FE\u6807</cb-button>\r
    <cb-button :loading="true">\u52A0\u8F7D\u72B6\u6001</cb-button>\r
    <cb-button :radius="5">\u81EA\u5B9A\u4E49\u5706\u89D2</cb-button>\r
    <cb-button :auto-loading="true" @click="test">\u652F\u6301\u5F02\u6B65</cb-button>\r
  </m-card>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref, toRefs } from "vue"\r
\r
export default defineComponent({\r
  setup(props, context) {\r
    const test = () => {\r
      return new Promise((resovle, reject) => {\r
        setTimeout(() => {\r
          alert("\u70B9\u51FB\u6210\u529F")\r
          resovle(true)\r
        }, 1000)\r
      })\r
    }\r
    return {\r
      test\r
    }\r
  }\r
})\r
<\/script>`,t.__sourceTitle="\u56FE\u6807\u6848\u4F8B",t.__sourceRemark=""}const A=p({setup(t,o){return{test:()=>new Promise((_,b)=>{setTimeout(()=>{alert("\u70B9\u51FB\u6210\u529F"),_(!0)},1e3)})}}}),rt=r("\u5D4C\u5165\u56FE\u6807"),ot=r("\u52A0\u8F7D\u72B6\u6001"),ct=r("\u81EA\u5B9A\u4E49\u5706\u89D2"),at=r("\u652F\u6301\u5F02\u6B65");function _t(t,o,e,_,b,f){const c=a("cb-button"),l=a("m-card");return i(),d(l,null,{default:n(()=>[u(c,{plain:!0,icon:"/image/icon.png"},{default:n(()=>[rt]),_:1}),u(c,{loading:!0},{default:n(()=>[ot]),_:1}),u(c,{radius:5},{default:n(()=>[ct]),_:1}),u(c,{"auto-loading":!0,onClick:t.test},{default:n(()=>[at]),_:1},8,["onClick"])]),_:1})}typeof h=="function"&&h(A);var st=s(A,[["render",_t]]);function x(t){t.__sourceCode=`<template>\r
  <m-card>\r
    <cb-button :is-block="true">\u5757\u7EA7\u6A21\u5F0F</cb-button>\r
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
.x-button {\r
  width: 25%;\r
  margin: 5px;\r
}\r
</style>`,t.__sourceTitle="\u5757\u7EA7\u6A21\u5F0F",t.__sourceRemark=""}const w=p({setup(t,o){return{}}}),it=r("\u5757\u7EA7\u6A21\u5F0F");function dt(t,o,e,_,b,f){const c=a("cb-button"),l=a("m-card");return i(),d(l,null,{default:n(()=>[u(c,{"is-block":!0},{default:n(()=>[it]),_:1})]),_:1})}typeof x=="function"&&x(w);var lt=s(w,[["render",dt],["__scopeId","data-v-0bb8de4d"]]);function k(t){t.__sourceCode=`<template>\r
  <m-card>\r
    <cb-button :disabled="true" type="primary">\u9ED8\u8BA4\u4E3B\u9898</cb-button>\r
    <cb-button :disabled="true" type="gray">\u7070\u8272\u4E3B\u9898</cb-button>\r
    <cb-button :disabled="true" type="info">\u4FE1\u606F\u6309\u94AE</cb-button>\r
    <cb-button :disabled="true" type="danger">\u5371\u9669\u6309\u94AE</cb-button>\r
    <cb-button :disabled="true" type="warning">\u8B66\u544A\u6309\u94AE</cb-button>\r
    <cb-button :disabled="true" type="link">\u94FE\u63A5\u6309\u94AE</cb-button>\r
  </m-card>\r
</template>`,t.__sourceTitle="\u7981\u6B62\u70B9\u51FB",t.__sourceRemark=""}const R={},bt=r("\u9ED8\u8BA4\u4E3B\u9898"),pt=r("\u7070\u8272\u4E3B\u9898"),ft=r("\u4FE1\u606F\u6309\u94AE"),mt=r("\u5371\u9669\u6309\u94AE"),yt=r("\u8B66\u544A\u6309\u94AE"),gt=r("\u94FE\u63A5\u6309\u94AE");function $t(t,o){const e=a("cb-button"),_=a("m-card");return i(),d(_,null,{default:n(()=>[u(e,{disabled:!0,type:"primary"},{default:n(()=>[bt]),_:1}),u(e,{disabled:!0,type:"gray"},{default:n(()=>[pt]),_:1}),u(e,{disabled:!0,type:"info"},{default:n(()=>[ft]),_:1}),u(e,{disabled:!0,type:"danger"},{default:n(()=>[mt]),_:1}),u(e,{disabled:!0,type:"warning"},{default:n(()=>[yt]),_:1}),u(e,{disabled:!0,type:"link"},{default:n(()=>[gt]),_:1})]),_:1})}typeof k=="function"&&k(R);var Ft=s(R,[["render",$t]]),Et={demo:K,demo4:st,demo3:ut,demo2:Y,demo6:Ft,demo5:lt};function xt(){return P($(g({},{name:" \u6309\u94AE",nameEn:"Button",children:[],desc:" \u6309\u94AE\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u4E8B\u4EF6\u89E6\u53D1",dataSource:[{title:"\u53C2\u6570",data:[["\u53C2\u6570\u540D","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C"],["type"," \u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A: primary info danger warning link","String","primary"],["loading"," \u662F\u5426\u52A0\u8F7D\u72B6\u6001","Boolean",!1],["disabled"," \u662F\u5426\u7981\u6B62\u70B9\u51FB","Boolean",!1],["size"," \u6309\u94AE\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A: small normal large","String","normal"],["plain"," \u662F\u5426\u900F\u660E","Boolean",!1],["icon","\u5D4C\u5165\u56FE\u6807","String",""],["isBlock","\u5D4C\u5165\u56FE\u6807","Boolean",!1],["isStopPropagation","\u662F\u5426\u652F\u6301\u5192\u6CE1","Boolean",!0],["autoLoading"," \u81EA\u52A8loading\u6A21\u5F0F","Boolean",!1],["onClick","\u70B9\u51FB\u4E8B\u4EF6","Function","-"],["radius","\u5706\u89D2,\u5355\u4F4Dpx","Number","-"]]},{title:"\u63D2\u69FD",data:[["\u63D2\u69FD\u540D","\u8BF4\u660E","\u53C2\u6570"],["default","\u9ED8\u8BA4\u63D2\u69FD","-"]]},{title:"\u56DE\u8C03",data:[["\u56DE\u8C03\u540D\u79F0","\u8BF4\u660E"],["click","\u70B9\u51FB\u4E8B\u4EF6\u76D1\u542C"]]}],mobileRoute:"/mobile/button"}),{demo:Et}))}export{xt as u};

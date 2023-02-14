import{u as $}from"./index.5db9b4c7.js";import{c as n,A as G,d as A,r as B,a as s,o as v,b as P,w as r,u as d,e as I,f,t as N,g as U,h as p,p as j,i as V}from"./index.f7301851.js";import{_ as z}from"./plugin-vueexport-helper.2444895f.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"filled"};const q=E;function g(o){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable}))),i.forEach(function(u){D(o,u,e[u])})}return o}function D(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var h=function(t,e){var i=g({},t,e.attrs);return n(G,g({},i,{icon:q}),null)};h.displayName="GithubFilled";h.inheritAttrs=!1;const H=h,b=o=>(j("data-v-4bab20c9"),o=o(),V(),o),L=b(()=>p("h2",null,"HiAuth",-1)),R={key:0,style:{display:"flex","flex-direction":"row","align-items":"center"}},M={style:{display:"flex","align-items":"center"}},Q=b(()=>p("div",{style:{width:"100%"}},"Sign in with Github",-1)),T=b(()=>p("span",null,"@Hikit",-1)),J=A({__name:"Auth",setup(o){const t=$("from",""),e=B({email:"",password:""}),i=a=>{window.location.href=a},u=a=>(console.log(`[auth] redirectUrl: ${a}`),`https://github.com/login/oauth/authorize?client_id=7bf3cf55fcc4a2c315d0&scope=read:user,read:org&redirect_uri=${a}`),y=a=>t.value?`${a}?method=1%26from=${t.value}`:`${a}?method=1`,w=a=>{console.log(a)};return(a,l)=>{const x=s("a-typography-text"),_=s("a-button"),k=s("a-input"),m=s("a-form-item"),F=s("a-input-password"),C=s("a-divider"),O=s("a-form"),S=s("a-card");return v(),P(S,{class:"card"},{default:r(()=>[L,d(t)?(v(),I("div",R,[n(x,null,{default:r(()=>[f(" \u4F60\u5C06\u8981\u767B\u5F55\u81F3 ")]),_:1}),n(_,{style:{padding:"0"},type:"link",onClick:l[0]||(l[0]=c=>i(d(t)))},{default:r(()=>[f(N(d(t)),1)]),_:1})])):U("",!0),n(O,{model:e,onFinish:w},{default:r(()=>[n(m,{name:"email",required:!0},{default:r(()=>[n(k,{value:e.email,"onUpdate:value":l[1]||(l[1]=c=>e.email=c),placeholder:"Email","addon-after":"@hikit.io"},null,8,["value"])]),_:1}),n(m,{name:"password",required:!0},{default:r(()=>[n(F,{value:e.password,"onUpdate:value":l[2]||(l[2]=c=>e.password=c),placeholder:"Password"},null,8,["value"])]),_:1}),n(m,null,{default:r(()=>[n(_,{"html-type":"submit",type:"primary",block:""},{default:r(()=>[f("Login")]),_:1})]),_:1}),n(C),n(_,{onClick:l[3]||(l[3]=c=>i(u(y("https://auth.hikit.io/login")))),size:"middle",block:""},{default:r(()=>[p("div",M,[n(d(H)),Q])]),_:1})]),_:1},8,["model"]),T]),_:1})}}});const Z=z(J,[["__scopeId","data-v-4bab20c9"]]);export{Z as default};

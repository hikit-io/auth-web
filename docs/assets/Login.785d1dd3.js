import{d as w,Z as x,_ as C,ac as b,Q as E,b as g,f as c,w as s,$ as t,ad as I,o as i,a as T,e as f,U as F,t as N,a0 as R,a1 as V,a2 as D,a3 as M,a7 as Q}from"./index.0dea33c3.js";import"./LoadingSfc.d83c4016.js";import{_ as $}from"./space.9874cd36.js";import{u as r,_ as j}from"./index.c7f97963.js";const z=n=>(D("data-v-2983637a"),n=n(),M(),n),A={class:"card"},P=z(()=>f("h3",null," \u6B63\u5728\u767B\u5F55\u81F3 ",-1)),U={key:1},Z=w({__name:"Login",setup(n){const{push:m}=R(),u=r("code",""),e=r("from"),l=r("method");V(),x({code:u.value});const _=C(),d=(o,a)=>{a?window.location.href=a:m("/profile")},h=()=>l.value==="1"?{github:{code:u.value}}:{email:{email:"",password:""}},{mutate:v,loading:L,onError:k,onDone:y}=b({variables:{by:h()}});return y(o=>{console.log(`[onLoginSuccess] ${o.data}`),o.data&&(_.set(o.data.login.idToken),d(!1,e.value)),console.log(o.errors)}),k(o=>{console.log("[onLoginError] "),console.log(o.message)}),E(()=>{_.get()?d(!1,e.value):l.value&&v()}),(o,a)=>{const B=j,p=$,S=I;return i(),g("div",A,[c(S,{loading:t(L),type:"wave",size:"large"},{description:s(()=>[c(p,{direction:"column"},{default:s(()=>[t(e)?(i(),T(p,{key:0,justify:"center"},{default:s(()=>[P,f("h3",null,[c(B,{type:"info",href:t(e).toString()},{default:s(()=>[F(N(t(e)),1)]),_:1},8,["href"])])]),_:1})):(i(),g("h3",U," \u6B63\u5728\u767B\u5F55 "))]),_:1})]),_:1},8,["loading"])])}}});const K=Q(Z,[["__scopeId","data-v-2983637a"]]);export{K as default};

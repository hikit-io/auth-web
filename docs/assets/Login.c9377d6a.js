import{d as w,Z as S,aa as x,ab as d,ac as C,ad as I,ae as T,b as p,f as n,w as t,_ as s,af as b,ag as F,o as c,a as N,e as g,U as R,t as V,a9 as E,ah as j,$ as z,a0 as A}from"./index.d2d2c78f.js";import"./LoadingSfc.d83c4016.js";import{_ as D,a as G}from"./plugin-vueexport-helper.4d796cc1.js";import{u as i,_ as H}from"./index.0405ad2b.js";const K=o=>(z("data-v-3de83764"),o=o(),A(),o),P={class:"card"},Q=K(()=>g("h3",null," \u6B63\u5728\u767B\u5F55\u81F3 ",-1)),U={key:1},Z=w({__name:"Login",setup(o){const{push:m}=E(),_=i("code",""),a=i("from"),f=i("method");S({code:_.value});const h=(e,y)=>{m({path:"/profile"})},v=x(),r=b(),l=()=>{const{toggleRight:e}=j();e(!0)};f.value==="1"?r.login(new d(void 0,new C(_.value))).then(e=>{console.log(e),h(),v.set("HIKIT",e.access_token,{domain:".hikit.io"}),l()}).catch(e=>{console.log(e)}):r.login(new d(new I("",""))).then(e=>{console.log(e),l()}).catch(e=>{console.log(e)});const[k,$]=T(!1);return(e,y)=>{const B=H,u=D,L=F;return c(),p("div",P,[n(L,{loading:s(k),type:"wave",size:"large"},{description:t(()=>[n(u,{direction:"column"},{default:t(()=>[s(a)?(c(),N(u,{key:0,justify:"center"},{default:t(()=>[Q,g("h3",null,[n(B,{type:"info",href:s(a).toString()},{default:t(()=>[R(V(s(a)),1)]),_:1},8,["href"])])]),_:1})):(c(),p("h3",U," \u6B63\u5728\u767B\u5F55 "))]),_:1})]),_:1},8,["loading"])])}}});const W=G(Z,[["__scopeId","data-v-3de83764"]]);export{W as default};

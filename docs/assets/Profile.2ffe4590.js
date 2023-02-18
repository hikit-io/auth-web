import{r as y,h as T,d as k,R as U,ai as V,Q as O,K as R,aj as M,ak as j,a8 as A,c as G,s as q,v as F,o as u,b as p,z as v,e as _,n as m,t as b,f as r,g as C,x as H,U as L,q as B,A as Y,M as J,ah as K,a7 as D,y as Q,af as W,$,a as X,w as c,ag as Z,a6 as ee,al as ne,a4 as ae}from"./index.ef3f9b4d.js";import{_ as te}from"./space.72741371.js";import"./LoadingSfc.d83c4016.js";const oe={dialogTitle:"\u63D0\u793A",dialogConfirmButtonText:"\u786E\u8BA4",dialogCancelButtonText:"\u53D6\u6D88",actionSheetTitle:"\u8BF7\u9009\u62E9",listLoadingText:"\u52A0\u8F7D\u4E2D",listFinishedText:"\u6CA1\u6709\u66F4\u591A\u4E86",listErrorText:"\u52A0\u8F7D\u5931\u8D25",pickerTitle:"\u8BF7\u9009\u62E9",pickerConfirmButtonText:"\u786E\u8BA4",pickerCancelButtonText:"\u53D6\u6D88",datePickerMonthDict:{"01":{name:"\u4E00\u6708",abbr:"\u4E00\u6708"},"02":{name:"\u4E8C\u6708",abbr:"\u4E8C\u6708"},"03":{name:"\u4E09\u6708",abbr:"\u4E09\u6708"},"04":{name:"\u56DB\u6708",abbr:"\u56DB\u6708"},"05":{name:"\u4E94\u6708",abbr:"\u4E94\u6708"},"06":{name:"\u516D\u6708",abbr:"\u516D\u6708"},"07":{name:"\u4E03\u6708",abbr:"\u4E03\u6708"},"08":{name:"\u516B\u6708",abbr:"\u516B\u6708"},"09":{name:"\u4E5D\u6708",abbr:"\u4E5D\u6708"},10:{name:"\u5341\u6708",abbr:"\u5341\u6708"},11:{name:"\u5341\u4E00\u6708",abbr:"\u5341\u4E00\u6708"},12:{name:"\u5341\u4E8C\u6708",abbr:"\u5341\u4E8C\u6708"}},datePickerWeekDict:{0:{name:"\u661F\u671F\u65E5",abbr:"\u65E5"},1:{name:"\u661F\u671F\u4E00",abbr:"\u4E00"},2:{name:"\u661F\u671F\u4E8C",abbr:"\u4E8C"},3:{name:"\u661F\u671F\u4E09",abbr:"\u4E09"},4:{name:"\u661F\u671F\u56DB",abbr:"\u56DB"},5:{name:"\u661F\u671F\u4E94",abbr:"\u4E94"},6:{name:"\u661F\u671F\u516D",abbr:"\u516D"}},datePickerSelected:"\u4E2A\u88AB\u9009\u62E9",paginationItem:"\u6761",paginationPage:"\u9875",paginationJump:"\u524D\u5F80"};function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},z.apply(this,arguments)}function re(){var e={},t=y({}),o=(n,s)=>{s.lang=n,e[n]=s},a=n=>{if(!e[n])return console.warn("The "+n+" does not exist. You can mount a language package using the add method"),{};t.value=e[n]},d=(n,s)=>{if(!e[n]){console.warn("The "+n+" does not exist. You can mount a language package using the add method");return}e[n]=z({},e[n],s),a(n)};return{packs:e,pack:t,add:o,use:a,merge:d}}var{packs:Le,pack:ie,add:se,use:le,merge:ze}=re();se("zh-CN",oe);le("zh-CN");var de={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:T(),"onUpdate:loading":T(),"onUpdate:error":T()};function N(e,t,o,a,d,n,s){try{var l=e[n](s),i=l.value}catch(f){o(f);return}l.done?t(i):Promise.resolve(i).then(a,d)}function ce(e){return function(){var t=this,o=arguments;return new Promise(function(a,d){var n=e.apply(t,o);function s(i){N(n,a,d,s,l,"next",i)}function l(i){N(n,a,d,s,l,"throw",i)}s(void 0)})}}var{n:ue,classes:me}=G("list");function pe(e,t){var o=q("var-loading"),a=F("ripple");return u(),p("div",{class:m(e.classes(e.n(),e.n("$--box"))),ref:"listEl"},[v(e.$slots,"default"),e.loading?v(e.$slots,"loading",{key:0},()=>[_("div",{class:m(e.n("loading"))},[_("div",{class:m(e.n("loading-text"))},b(e.dt(e.loadingText,e.pack.listLoadingText)),3),r(o,{size:"mini",radius:10})],2)]):C("v-if",!0),e.finished?v(e.$slots,"finished",{key:1},()=>[_("div",{class:m(e.n("finished"))},b(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):C("v-if",!0),e.error?v(e.$slots,"error",{key:2},()=>[H((u(),p("div",{class:m(e.n("error")),onClick:t[0]||(t[0]=function(){return e.load&&e.load(...arguments)})},[L(b(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[a]])]):C("v-if",!0),_("div",{class:m(e.n("detector")),ref:"detectorEl"},null,2)],2)}var I=k({name:"VarList",directives:{Ripple:U},components:{VarLoading:V},props:de,setup(e){var t=y(null),o=y(null),a,d=()=>{B(e["onUpdate:error"],!1),B(e["onUpdate:loading"],!0),B(e.onLoad)},n=()=>{var l=a===window?window.innerHeight:a.getBoundingClientRect().bottom,{bottom:i}=o.value.getBoundingClientRect();return Math.floor(i)-J(e.offset)<=l},s=function(){var l=ce(function*(){yield Y();var{loading:i,finished:f,error:g}=e;!i&&!f&&!g&&n()&&d()});return function(){return l.apply(this,arguments)}}();return O(()=>{a=R(t.value),e.immediateCheck&&s(),a.addEventListener("scroll",s)}),M(()=>{a.removeEventListener("scroll",s)}),{pack:ie,listEl:t,detectorEl:o,dt:j,isNumber:A,load:d,check:s,n:ue,classes:me}}});I.render=pe;const h=I;h.install=function(e){e.component(h.name,h)};var fe=h;const _e={class:"loading"},ge=k({__name:"Loading",props:{loading:{type:Boolean}},setup(e){const t=e;return(o,a)=>{var n;const d=K;return u(),p("div",_e,[r(d,{loading:(n=t.loading)!=null?n:!1,type:"wave",description:"Loading",size:"large"},null,8,["loading"])])}}});const ve=D(ge,[["__scopeId","data-v-dcb398b0"]]),be=["data-icon"],E=k({__name:"Icon",props:{name:null,size:null},setup(e){const t=e;return(o,a)=>(u(),p("span",{class:"iconify","data-icon":`mdi-${t.name}`,style:Q({fontSize:`${e.size}px`})},null,12,be))}}),he={class:"card"},ye={key:1},ke=k({__name:"Profile",setup(e){const t=Z(),o=y(),[a,d]=W(!0);return t.profile().then(n=>{o.value=n,d()}).catch(n=>{console.log(n)}),(n,s)=>{const l=ee,i=ne,f=fe,g=ae,w=te;return u(),p("div",he,[$(a)?(u(),X(ve,{key:0,loading:$(a)},null,8,["loading"])):(u(),p("div",ye,[r(w,{direction:"column"},{default:c(()=>{var P;return[_("h1",null,"Hi, "+b((P=o.value)==null?void 0:P.account),1),r(f,null,{default:c(()=>{var S,x;return[r(i,{title:"ID",description:(S=o.value)==null?void 0:S.id,border:""},{icon:c(()=>[r(l,{name:"email-outlined",size:34})]),_:1},8,["description"]),r(i,{title:"Email",description:(x=o.value)!=null&&x.email?o.value.email:"Not setting",border:""},{icon:c(()=>[r(l,{name:"email-outlined",size:34})]),extra:c(()=>[r(l,{name:"information-outline",size:30})]),_:1},8,["description"]),r(i,{title:"Account",description:"nieaowei",border:""},{icon:c(()=>[r(l,{name:"account",size:34})]),extra:c(()=>[r(l,{name:"information-outline",size:30})]),_:1}),r(i,{title:"OTP",description:"Bind",border:""},{extra:c(()=>[r(E,{name:"qrcode",size:30})]),_:1}),r(i,{title:"Github",description:"nieaowei",border:""},{icon:c(()=>[r(E,{name:"github",size:30})]),_:1})]}),_:1}),r(w,null,{default:c(()=>[r(g,{type:"primary"},{default:c(()=>[L(" Change Password ")]),_:1}),r(g,{type:"danger"},{default:c(()=>[L(" Delete Account ")]),_:1})]),_:1})]}),_:1})]))])}}});const we=D(ke,[["__scopeId","data-v-ac506be6"]]);export{we as default};

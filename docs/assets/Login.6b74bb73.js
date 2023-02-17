import{C as R,u as v,_ as Z,a as q}from"./index.e87267f0.js";import{a as y,m as c,b as g,c as C,_ as z,aa as A,t as G,o as n,k as o,n as t,E as K,q as s,f as i,l,X as T,Y as Q,ab as X,ac as k,ad as Y,ae as J,af as _,$ as m,j as b,ag as x,W as ee,p as ae,a9 as te}from"./index.127b8c1c.js";var ne={value:{type:Number,default:0},opacity:{type:Number,default:0},error:{type:Boolean,default:!1},color:{type:String},errorColor:{type:String},height:{type:[Number,String]},top:{type:[Number,String]}},{classes:oe,n:w}=C("loading-bar");const re=y({name:"VarLoadingBar",props:ne,setup(e){return()=>c("div",{class:oe(w(),[e.error,w("--error")]),style:{zIndex:R.zIndex+10,width:e.value+"%",opacity:e.opacity,height:g(e.height),backgroundColor:e.error?e.errorColor:e.color,top:g(e.top)}},null)}});var L,N,I={},se={value:0,opacity:0,error:!1},a=z(se),ie=e=>{Object.assign(a,e)},le=e=>{Object.assign(a,e),I=e},ue=()=>{Object.keys(I).forEach(e=>{a[e]!==void 0&&(a[e]=void 0)})},$=()=>{L=window.setTimeout(()=>{if(!(a.value>=95)){var e=Math.random();a.value<70&&(e=Math.round(5*Math.random())),a.value+=e,$()}},200)},de=()=>{N||(N=!0,A(re,a)),(!a.error||a.value===100)&&(a.value=0),setTimeout(()=>{a.opacity=1},200),$()},ce=()=>{a.value=100,setTimeout(()=>{a.opacity=0,setTimeout(()=>{a.error=!1},250)},300),window.clearTimeout(L)},fe=()=>{a.error=!0,p.start(),setTimeout(p.finish,300)},p={start:de,finish:ce,error:fe,mergeConfig:ie,setDefaultOptions:le,resetDefaultOptions:ue};const B=p;var ve={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}},{n:me,classes:ge}=C("skeleton");function pe(e,h){return n(),o("div",{class:t(e.classes(e.n("$--box"),e.n()))},[e.loading?s("v-if",!0):(n(),o("div",{key:0,class:t(e.n("data"))},[K(e.$slots,"default")],2)),e.loading&&!e.fullscreen?(n(),o("div",{key:1,class:t(e.n("content"))},[e.card?(n(),o("div",{key:0,class:t(e.n("card")),style:i({height:e.toSizeUnit(e.cardHeight)})},[l("div",{class:t(e.n("--animation"))},null,2)],6)):s("v-if",!0),e.avatar||e.title||e.toNumber(e.rows)>0?(n(),o("div",{key:1,class:t(e.n("article"))},[e.avatar?(n(),o("div",{key:0,class:t(e.n("avatar")),style:i({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},[l("div",{class:t(e.n("--animation"))},null,2)],6)):s("v-if",!0),e.title||e.toNumber(e.rows)>0?(n(),o("div",{key:1,class:t(e.n("section"))},[e.title?(n(),o("div",{key:0,class:t(e.n("title")),style:i({width:e.toSizeUnit(e.titleWidth)})},[l("div",{class:t(e.n("--animation"))},null,2)],6)):s("v-if",!0),(n(!0),o(T,null,Q(e.toNumber(e.rows),(u,d)=>(n(),o("div",{class:t(e.n("row")),key:u,style:i({width:e.toSizeUnit(e.rowsWidth[d])})},[l("div",{class:t(e.n("--animation"))},null,2)],6))),128))],2)):s("v-if",!0)],2)):s("v-if",!0)],2)):s("v-if",!0),e.loading&&e.fullscreen?(n(),o("div",{key:2,class:t(e.n("fullscreen")),style:i({zIndex:e.toNumber(e.fullscreenZIndex)})},[l("div",{class:t(e.n("--animation"))},null,2)],6)):s("v-if",!0)],2)}var V=y({name:"VarSkeleton",props:ve,setup(){return{n:me,classes:ge,toSizeUnit:g,toNumber:G}}});V.render=pe;const f=V;f.install=function(e){e.component(f.name,f)};var ye=f;const he={key:0},Se={key:1},we=y({__name:"Login",setup(e){const{push:h}=te(),u=v("code",""),d=v("from"),O=v("method");z({code:u.value});const U=(r,M)=>{h({path:"/profile"})},W=X(),S=x();B.start(),O.value==="1"?S.login(new k(void 0,new Y(u.value))).then(r=>{console.log(r),U(),W.set("HIKIT",r.access_token,{domain:".hikit.io"})}).catch(r=>{console.log(r)}):S.login(new k(new J("",""))).then(r=>{console.log(r)}).catch(r=>{console.log(r)});const[j,E]=_(!1),F=()=>{B.start(),E()};return(r,M)=>{const D=ye,H=q,P=Z;return n(),o(T,null,[c(D,{fullscreen:"",loading:m(j)},null,8,["loading"]),c(P,{direction:"column"},{default:b(()=>[c(H,{onClick:F},{default:b(()=>[ee("Tr")]),_:1}),m(d)?(n(),o("h3",he," \u6B63\u5728\u767B\u5F55\u81F3 "+ae(m(d)),1)):(n(),o("h3",Se," \u6B63\u5728\u767B\u5F55 "))]),_:1})],64)}}});export{we as default};

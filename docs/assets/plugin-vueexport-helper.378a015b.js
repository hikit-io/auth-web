import{W as S,a7 as E,a8 as F,d as W,q as k,f as x,c as q,G as v,a9 as z,X as D}from"./index.db61a90b.js";var y=a=>["mini","small","normal","large"].includes(a),G=a=>y(a)||S(a)||E(a)||F(a),M=a=>["start","end","center","space-around","space-between"].includes(a),O={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:G},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:M},inline:{type:Boolean,default:!1}};function r(a){return"calc("+a+" / 2)"}function U(a,i,c){var{direction:o,justify:n,index:e,lastIndex:s}=c,t="0";return o==="row"&&(n==="start"||n==="center"||n==="end"?e!==s?t=r(a)+" "+i+" "+r(a)+" 0":t=r(a)+" 0":n==="space-around"?t=r(a)+" "+r(i):n==="space-between"&&(e===0?t=r(a)+" "+r(i)+" "+r(a)+" 0":e===s?t=r(a)+" 0 "+r(a)+" "+r(i):t=r(a)+" "+r(i))),o==="column"&&e!==s&&(t="0 0 "+a+" 0"),t}var{n:g,classes:X}=q("space");const f=W({name:"VarSpace",props:O,setup(a,i){var{slots:c}=i,o=(e,s)=>s?["var(--space-size-"+e+"-y)","var(--space-size-"+e+"-x)"]:S(e)?e.map(v):[v(e),v(e)],n=e=>e==="start"||e==="end"?"flex-"+e:e;return()=>{var e,{inline:s,justify:t,align:_,wrap:b,direction:d,size:h}=a,u=(e=k(c.default))!=null?e:[],j=y(h),[w,V]=o(h,j),C=m=>{var p=[];return m.forEach(l=>{if(l.type!==z){if(l.type===D&&S(l.children)){l.children.forEach(B=>{p.push(B)});return}p.push(l)}}),p};u=C(u);var I=u.length-1,A=u.map((m,p)=>{var l=U(w,V,{direction:d,justify:t,index:p,lastIndex:I});return x("div",{style:{margin:l}},[m])});return x("div",{class:X(g(),g("$--box"),[s,g("--inline")]),style:{flexDirection:d,justifyContent:n(t),alignItems:n(_),flexWrap:b?"wrap":"nowrap",margin:d==="row"?"calc(-1 * "+w+" / 2) 0":void 0}},[A])}}});f.install=function(a){a.component(f.name,f)};var H=f;const J=(a,i)=>{const c=a.__vccOpts||a;for(const[o,n]of i)c[o]=n;return c};export{H as _,J as a};
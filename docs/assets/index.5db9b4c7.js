import{j as _,k as c,l as f,n as u,u as y}from"./index.f7301851.js";var O=Object.defineProperty,P=Object.defineProperties,v=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&l(e,t,r[t]);if(p)for(var t of p(r))m.call(r,t)&&l(e,t,r[t]);return e},w=(e,r)=>P(e,v(r));let a={};function j(e,r,{mode:t="replace",route:n=c(),router:i=f()}={}){return _({get(){const o=n.query[e];return o==null?r!=null?r:null:Array.isArray(o)?o.filter(Boolean):o},set(o){a[e]=o===r||o===null?void 0:o,u(()=>{i[y(t)](w(s({},n),{query:s(s({},n.query),a)})),u(()=>a={})})}})}export{j as u};

import{d as G,c as Z,o as c,a as re,w as T,b as S,n as o,e as b,f as y,T as de,t as J,g as A,h as M,u as ke,i as Ee,j as Ke,k as Te,R as Ye,I as Se,r as U,l as N,m as Ve,p as ee,q as m,s as W,v as je,x as Le,y as I,z as P,A as Pe,B as da,C as va,D as fa,E as We,F as ve,G as ma,H as pa,J as ca,K as ha,L as Re,M as ye,N as ga,O as ba,P as Q,Q as ya,S as Ge,U as Ce,V as Ca,W as ka,X as ze,Y as Sa,Z as Va,_ as wa,$ as Be,a0 as $a,a1 as Ba,a2 as Oa,a3 as Ma,a4 as Fa,a5 as Ea,a6 as Ta,a7 as Pa}from"./index.fdd053fc.js";import{_ as Na}from"./space.642a3dca.js";import{u as Ia,_ as Da}from"./index.0f9c4342.js";var Ua={errorMessage:{type:String,default:""},extraMessage:{type:String,default:""}},{n:Ra}=Z("form-details"),za={key:0},Aa={key:0};function Ka(e,a){return c(),re(de,{name:e.n()},{default:T(()=>[e.errorMessage||e.extraMessage?(c(),S("div",{key:0,class:o(e.n())},[b("div",{class:o(e.n("error-message"))},[y(de,{name:e.n("message")},{default:T(()=>[e.errorMessage?(c(),S("div",za,J(e.errorMessage),1)):A("v-if",!0)]),_:1},8,["name"])],2),b("div",{class:o(e.n("extra-message"))},[y(de,{name:e.n("message")},{default:T(()=>[e.extraMessage?(c(),S("div",Aa,J(e.extraMessage),1)):A("v-if",!0)]),_:1},8,["name"])],2)],2)):A("v-if",!0)]),_:1},8,["name"])}var He=G({name:"VarFormDetails",props:Ua,setup:()=>({n:Ra})});He.render=Ka;const ae=He;ae.install=function(e){e.component(ae.name,ae)};var Ya={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedColor:{type:String},uncheckedColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onClick:M(),onChange:M(),"onUpdate:modelValue":M()},ja=Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"),La=Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");function Wa(){var{bindParent:e,parentProvider:a}=ke(ja),{index:r}=Ee(La);return{index:r,checkboxGroup:a,bindCheckboxGroup:e}}function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},Fe.apply(this,arguments)}var Xe=Symbol("FORM_BIND_FORM_ITEM_KEY");function we(){var{bindParent:e,parentProvider:a}=ke(Xe),r=Ke(),s=e?i=>{e(Fe({},i,{instance:r}))}:null;return{bindForm:s,form:a}}function Ga(){var{bindChildren:e,childProviders:a}=Te(Xe);return{formItems:a,bindFormItems:e}}var{n:Ha,classes:Xa}=Z("checkbox");function qa(e,a){var r=W("var-icon"),s=W("var-form-details"),i=je("ripple");return c(),S("div",{class:o(e.n("wrap")),onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[b("div",{class:o(e.n())},[Le((c(),S("div",{class:o(e.classes(e.n("action"),[e.checked,e.n("--checked"),e.n("--unchecked")],[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:I({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?P(e.$slots,"checked-icon",{key:0},()=>[y(r,{class:o(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-marked",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):P(e.$slots,"unchecked-icon",{key:1},()=>[y(r,{class:o(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-blank-outline",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])])],6)),[[i,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),b("div",{class:o(e.classes(e.n("text"),[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")]))},[P(e.$slots,"default")],2)],2),y(s,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var qe=G({name:"VarCheckbox",directives:{Ripple:Ye},components:{VarIcon:Se,VarFormDetails:ae},props:Ya,setup(e){var a=U(!1),r=N(()=>a.value===e.checkedValue),s=N(()=>e.checkedValue),i=U(!1),{checkboxGroup:u,bindCheckboxGroup:n}=Wa(),{form:f,bindForm:p}=we(),{errorMessage:C,validateWithTrigger:d,validate:l,resetValidation:$}=Ve(),V=k=>{Pe(()=>{var{validateTrigger:g,rules:D,modelValue:L}=e;d(g,k,D,L)})},F=k=>{a.value=k;var{checkedValue:g,onChange:D}=e;m(e["onUpdate:modelValue"],a.value),m(D,a.value),V("onChange"),k===g?u==null||u.onChecked(g):u==null||u.onUnchecked(g)},K=k=>{var{disabled:g,readonly:D,checkedValue:L,uncheckedValue:ne,onClick:t}=e;if(!(f!=null&&f.disabled.value||g)&&(m(t,k),!(f!=null&&f.readonly.value||D))){i.value=!0;var w=u?u.checkedCount.value>=Number(u.max.value):!1;!r.value&&w||F(r.value?ne:L)}},z=k=>{var{checkedValue:g,uncheckedValue:D}=e;a.value=k.includes(g)?g:D},H=()=>{i.value=!1},Y=()=>{m(e["onUpdate:modelValue"],e.uncheckedValue),$()},_=k=>{var{checkedValue:g,uncheckedValue:D}=e,L=![g,D].includes(k);L&&(k=r.value?D:g),F(k)},X=()=>l(e.rules,e.modelValue);ee(()=>e.modelValue,k=>{a.value=k},{immediate:!0});var R={checkedValue:s,checked:r,sync:z,validate:X,resetValidation:$,reset:Y,resetWithAnimation:H};return m(n,R),m(p,R),{withAnimation:i,checked:r,errorMessage:C,checkboxGroupErrorMessage:u==null?void 0:u.errorMessage,formDisabled:f==null?void 0:f.disabled,formReadonly:f==null?void 0:f.readonly,n:Ha,classes:Xa,handleClick:K,toggle:_,reset:Y,validate:X,resetValidation:$}}});qe.render=qa;const fe=qe;fe.install=function(e){e.component(fe.name,fe)};function Qa(e){return["default","primary","info","success","warning","danger"].includes(e)}function Ja(e){return["normal","mini","small","large"].includes(e)}var Za={type:{type:String,default:"default",validator:Qa},size:{type:String,default:"normal",validator:Ja},color:{type:String},textColor:{type:String},iconName:da(va,"name"),plain:{type:Boolean,default:!1},round:{type:Boolean,default:!0},block:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},onClose:M()},{n:x,classes:_a}=Z("chip");function xa(e,a){var r=W("var-icon");return c(),re(de,{name:e.n("$-fade")},{default:T(()=>[b("span",fa({class:e.classes(e.n(),e.n("$--box"),...e.contentClass),style:e.chipStyles},e.$attrs),[P(e.$slots,"left"),b("span",{class:o(e.n("text-"+e.size))},[P(e.$slots,"default")],2),P(e.$slots,"right"),e.closable?(c(),S("span",{key:0,class:o(e.n("--close")),onClick:a[0]||(a[0]=function(){return e.handleClose&&e.handleClose(...arguments)})},[y(r,{name:""+(e.iconName?e.iconName:"close-circle")},null,8,["name"])],2)):A("v-if",!0)],16)]),_:3},8,["name"])}var Qe=G({name:"VarChip",components:{VarIcon:Se},inheritAttrs:!1,props:Za,setup(e){var a=N(()=>{var{plain:i,textColor:u,color:n}=e;return i?{color:u||n,borderColor:n}:{color:u,background:n}}),r=N(()=>{var{size:i,block:u,type:n,plain:f,round:p}=e,C=x(u?"$--flex":"$--inline-flex"),d=f?x("plain")+" "+x("plain-"+n):x("--"+n),l=p?x("--round"):null;return[x("--"+i),C,d,l]}),s=i=>{m(e.onClose,i)};return{n:x,classes:_a,chipStyles:a,contentClass:r,handleClose:s}}});Qe.render=xa;const me=Qe;me.install=function(e){e.component(me.name,me)};function el(e){return["row","column"].includes(e)}var al={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},direction:{type:String,default:"row",validator:el},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]},onClick:M()},Je=Symbol("ROW_BIND_COL_KEY"),Ze=Symbol("ROW_COUNT_COL_KEY");function ll(){var{bindChildren:e,childProviders:a}=Te(Je),{length:r}=We(Ze);return{length:r,cols:a,bindCols:e}}function rl(){var{parentProvider:e,bindParent:a}=ke(Je),{index:r}=Ee(Ze);return(!e||!a||!r)&&console.warn("col must in row"),{index:r,row:e,bindRow:a}}var{n:te,classes:nl}=Z("col");function ol(e,a){return c(),S("div",{class:o(e.classes(e.n(),e.n("$--box"),[e.span>=0,e.n("--span-"+e.span)],[e.offset,e.n("--offset-"+e.offset)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:I({flexDirection:e.direction,paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[P(e.$slots,"default")],6)}var _e=G({name:"VarCol",props:al,setup(e){var a=U({left:0,right:0}),r=N(()=>ve(e.span)),s=N(()=>ve(e.offset)),{row:i,bindRow:u}=rl(),n={setPadding(C){a.value=C}},f=(C,d)=>{var l=[];if(d==null)return l;if(pa(d)){var{offset:$,span:V}=d;Number(V)>=0&&l.push(te("--span-"+C+"-"+V)),$&&l.push(te("--offset-"+C+"-"+$))}else Number(d)>=0&&l.push(te("--span-"+C+"-"+d));return l},p=C=>{m(e.onClick,C)};return ee([()=>e.span,()=>e.offset],()=>{i==null||i.computePadding()}),m(u,n),{n:te,classes:nl,padding:a,toNumber:ve,toSizeUnit:ma,getSize:f,span:r,offset:s,handleClick:p}}});_e.render=ol;const pe=_e;pe.install=function(e){e.component(pe.name,pe)};var sl=pe;function il(e){return["start","end"].includes(e)}var ul={disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},scrollToError:{type:String,validator:il},scrollToErrorOffsetY:{type:[String,Number],default:0}};function Ae(e,a,r,s,i,u,n){try{var f=e[u](n),p=f.value}catch(C){r(C);return}f.done?a(p):Promise.resolve(p).then(s,i)}function tl(e){return function(){var a=this,r=arguments;return new Promise(function(s,i){var u=e.apply(a,r);function n(p){Ae(u,s,i,n,f,"next",p)}function f(p){Ae(u,s,i,n,f,"throw",p)}n(void 0)})}}var{n:dl}=Z("form");function vl(e,a){return c(),S("div",{class:o(e.n())},[P(e.$slots,"default")],2)}var xe=G({name:"VarForm",props:ul,setup(e){var a=N(()=>e.disabled),r=N(()=>e.readonly),{formItems:s,bindFormItems:i}=Ga(),u=(d,l)=>{setTimeout(()=>{var $=ha(l),V=$===window?0:Re($),F=Re(l)-V-ye(e.scrollToErrorOffsetY);ga($,{top:F,animation:ba})},300)},n=function(){var d=tl(function*(){var l=yield Promise.all(s.map(z=>{var{validate:H}=z;return H()}));if(e.scrollToError){var[,$]=ca(l,z=>z===!1,e.scrollToError),V=$>-1;if(V){var F,K=(F=s[$].instance.proxy)==null?void 0:F.$el;u($,K)}return!V}return l.every(z=>z===!0)});return function(){return d.apply(this,arguments)}}(),f=()=>s.forEach(d=>{var{reset:l}=d;return l()}),p=()=>s.forEach(d=>{var{resetValidation:l}=d;return l()}),C={disabled:a,readonly:r};return i(C),{n:dl,validate:n,reset:f,resetValidation:p}}});xe.render=vl;const le=xe;le.install=function(e){e.component(le.name,le)};le.useValidation=Ve;le.useForm=we;var fl=le;function ml(e){return["text","password","number"].includes(e)}var pl={modelValue:{type:String},modelModifiers:{type:Object,default:()=>({})},type:{type:String,default:"text",validator:ml},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:M(),onBlur:M(),onClick:M(),onClear:M(),onInput:M(),onChange:M(),"onUpdate:modelValue":M()},{n:Oe,classes:cl}=Z("input"),hl=["id","disabled","type","value","maxlength","rows"],gl=["id","disabled","type","value","maxlength"],bl=["for"];function yl(e,a){var r=W("var-icon"),s=W("var-form-details");return c(),S("div",{class:o(e.classes(e.n(),e.n("$--box"),[e.disabled,e.n("--disabled")])),onClick:a[10]||(a[10]=function(){return e.handleClick&&e.handleClick(...arguments)})},[b("div",{class:o(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:I({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[b("div",{class:o(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[P(e.$slots,"prepend-icon")],2),b("div",{class:o(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")]))},[e.type==="password"?(c(),S("input",{key:0,class:o(e.n("autocomplete"))},null,2)):A("v-if",!0),e.textarea?(c(),S("textarea",{key:1,class:o(e.classes(e.n("input"),e.n("--textarea"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:I({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:a[0]||(a[0]=function(){return e.handleFocus&&e.handleFocus(...arguments)}),onBlur:a[1]||(a[1]=function(){return e.handleBlur&&e.handleBlur(...arguments)}),onInput:a[2]||(a[2]=function(){return e.handleInput&&e.handleInput(...arguments)}),onChange:a[3]||(a[3]=function(){return e.handleChange&&e.handleChange(...arguments)}),onTouchstart:a[4]||(a[4]=function(){return e.handleTouchstart&&e.handleTouchstart(...arguments)})},`
        `,46,hl)):(c(),S("input",{key:2,class:o(e.classes(e.n("input"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,style:I({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor}),onFocus:a[5]||(a[5]=function(){return e.handleFocus&&e.handleFocus(...arguments)}),onBlur:a[6]||(a[6]=function(){return e.handleBlur&&e.handleBlur(...arguments)}),onInput:a[7]||(a[7]=function(){return e.handleInput&&e.handleInput(...arguments)}),onChange:a[8]||(a[8]=function(){return e.handleChange&&e.handleChange(...arguments)}),onTouchstart:a[9]||(a[9]=function(){return e.handleTouchstart&&e.handleTouchstart(...arguments)})},null,46,gl)),b("label",{class:o(e.classes(e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],[e.textarea,e.n("textarea-placeholder"),e.n("placeholder")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:I({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}),for:e.id},J(e.placeholder),15,bl)],2),b("div",{class:o(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[P(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(c(),re(r,{key:0,class:o(e.n("clear-icon")),"var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):A("v-if",!0)])],2)],6),e.line?(c(),S("div",{key:0,class:o(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:I({background:e.errorMessage?void 0:e.blurColor})},[b("div",{class:o(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:I({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):A("v-if",!0),y(s,{"error-message":e.errorMessage,"extra-message":e.maxlengthText},null,8,["error-message","extra-message"])],2)}var ea=G({name:"VarInput",components:{VarIcon:Se,VarFormDetails:ae},props:pl,setup(e){var a=U("var-input-"+Ke().uid),r=U(null),s=U(!1),i=N(()=>{var{maxlength:t,modelValue:w}=e;return t?Q(w)?"0 / "+t:String(w).length+"/"+t:""}),{bindForm:u,form:n}=we(),{errorMessage:f,validateWithTrigger:p,validate:C,resetValidation:d}=Ve(),l=t=>{Pe(()=>{var{validateTrigger:w,rules:O,modelValue:oe}=e;p(w,t,O,oe)})},$=()=>{var{hint:t,modelValue:w}=e;if(!t&&!Q(w))return Oe("--placeholder-hidden");if(t&&(!Q(w)||s.value))return Oe("--placeholder-hint")},V=t=>{s.value=!0,m(e.onFocus,t),l("onFocus")},F=t=>{s.value=!1,m(e.onBlur,t),l("onBlur")},K=t=>{var w=t.target,{value:O}=w;O=X(_(O)),w.value=O,m(e["onUpdate:modelValue"],O),m(e.onInput,O,t),l("onInput")},z=t=>{var w=t.target,{value:O}=w;O=X(_(O)),w.value=O,m(e.onChange,O,t),l("onChange")},H=()=>{var{disabled:t,readonly:w,clearable:O,onClear:oe}=e;n!=null&&n.disabled.value||n!=null&&n.readonly.value||t||w||!O||(m(e["onUpdate:modelValue"],""),m(oe,""),l("onClear"))},Y=t=>{var{disabled:w,onClick:O}=e;n!=null&&n.disabled.value||w||(m(O,t),l("onClick"))},_=t=>e.modelModifiers.trim?t.trim():t,X=t=>e.maxlength?t.slice(0,ve(e.maxlength)):t,R=t=>{var{disabled:w,readonly:O}=e;n!=null&&n.disabled.value||n!=null&&n.readonly.value||w||O||t.stopPropagation()},k=()=>{m(e["onUpdate:modelValue"],""),d()},g=()=>C(e.rules,e.modelValue),D=()=>{var t;(t=r.value)==null||t.focus()},L=()=>{r.value.blur()},ne={reset:k,validate:g,resetValidation:d};return m(u,ne),ya(()=>{e.autofocus&&D()}),{el:r,id:a,isFocus:s,errorMessage:f,maxlengthText:i,formDisabled:n==null?void 0:n.disabled,formReadonly:n==null?void 0:n.readonly,n:Oe,classes:cl,isEmpty:Q,computePlaceholderState:$,handleFocus:V,handleBlur:F,handleInput:K,handleChange:z,handleClear:H,handleClick:Y,handleTouchstart:R,validate:g,resetValidation:d,reset:k,focus:D,blur:L}}});ea.render=yl;const ce=ea;ce.install=function(e){e.component(ce.name,ce)};var Cl=ce,aa=Symbol("SELECT_BIND_OPTION_KEY"),la=Symbol("SELECT_COUNT_OPTION_KEY");function kl(){var{bindChildren:e,childProviders:a}=Te(aa),{length:r}=We(la);return{length:r,options:a,bindOptions:e}}function Sl(){var{bindParent:e,parentProvider:a}=ke(aa),{index:r}=Ee(la);if(!e||!a)throw Error("<var-option/> must in <var-select/>");return{index:r,select:a,bindSelect:e}}var Vl={label:{},value:{}},{n:wl,classes:$l}=Z("option");function Bl(e,a){var r=W("var-checkbox"),s=je("ripple");return Le((c(),S("div",{class:o(e.classes(e.n(),e.n("$--box"),[e.optionSelected,e.n("--selected-color")])),style:I({width:e.wrapWidth,color:e.optionSelected?e.focusColor:void 0}),onClick:a[2]||(a[2]=function(){return e.handleClick&&e.handleClick(...arguments)})},[b("div",{class:o(e.classes(e.n("cover"),[e.optionSelected,e.n("--selected-background")])),style:I({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(c(),re(r,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":a[0]||(a[0]=i=>e.optionSelected=i),onClick:a[1]||(a[1]=Ge(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):A("v-if",!0),b("div",{class:o(e.classes(e.n("text"),e.n("$--ellipsis")))},[P(e.$slots,"default",{},()=>[Ce(J(e.label),1)])],2)],6)),[[s]])}var ra=G({name:"VarOption",directives:{Ripple:Ye},components:{VarCheckbox:fe},props:Vl,setup(e){var a=U(!1),r=N(()=>a.value),s=N(()=>e.label),i=N(()=>e.value),{select:u,bindSelect:n}=Sl(),{wrapWidth:f,multiple:p,focusColor:C,onSelect:d}=u,l=()=>{a.value=!a.value,d(F)},$=()=>d(F),V=K=>{a.value=K},F={label:s,value:i,selected:r,sync:V};return ee([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),n(F),{n:wl,classes:$l,optionSelected:a,wrapWidth:f,multiple:p,focusColor:C,handleClick:l,handleSelect:$}}});ra.render=Bl;const he=ra;he.install=function(e){e.component(he.name,he)};var Ol=he;function Ml(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}function Fl(e){return["flex-start","center","flex-end"].includes(e)}var El={gutter:{type:[String,Number],default:0},justify:{type:String,default:"flex-start",validator:Ml},align:{type:String,default:"flex-start",validator:Fl},onClick:M()},{n:Tl,classes:Pl}=Z("row");function Nl(e,a){return c(),S("div",{class:o(e.classes(e.n(),e.n("$--box"))),style:I({justifyContent:e.justify,alignItems:e.align,margin:e.average?"0 -"+e.average+"px":void 0}),onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[P(e.$slots,"default")],6)}var na=G({name:"VarRow",props:El,setup(e){var{cols:a,bindCols:r,length:s}=ll(),i=N(()=>{var p=ye(e.gutter);return p/2}),u=()=>{a.forEach(p=>{p.setPadding({left:i.value,right:i.value})})},n=p=>{m(e.onClick,p)},f={computePadding:u};return ee(()=>s.value,u),ee(()=>e.gutter,u),r(f),{n:Tl,classes:Pl,average:i,handleClick:n}}});na.render=Nl;const ge=na;ge.install=function(e){e.component(ge.name,ge)};var Il=ge;function Dl(e){return["left","right","center"].includes(e)}var Ul={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},offsetY:{type:[String,Number],default:0},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Dl},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:M(),onBlur:M(),onClick:M(),onClear:M(),onClose:M(),onChange:M(),"onUpdate:modelValue":M()},{n:Me,classes:Rl}=Z("select"),zl={key:1};function Al(e,a){var r=W("var-chip"),s=W("var-icon"),i=W("var-menu"),u=W("var-form-details");return c(),S("div",{class:o(e.classes(e.n(),e.n("$--box"),[e.formDisabled||e.disabled,e.n("--disabled")])),onClick:a[3]||(a[3]=function(){return e.handleClick&&e.handleClick(...arguments)})},[b("div",{class:o(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:I({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[b("div",{class:o(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[P(e.$slots,"prepend-icon")],2),b("div",{class:o(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")])),ref:"wrapEl",onClick:a[2]||(a[2]=function(){return e.handleFocus&&e.handleFocus(...arguments)})},[y(i,{"var-select-cover":"",class:o(e.classes(e.n("menu"))),"offset-y":e.offsetY,disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled,"default-style":!1,show:e.isFocus,"onUpdate:show":a[1]||(a[1]=n=>e.isFocus=n),onClose:e.handleBlur},{menu:T(()=>[b("div",{ref:"menuEl",class:o(e.classes(e.n("scroller"),e.n("$-elevation--3")))},[P(e.$slots,"default")],2)]),default:T(()=>[b("div",{class:o(e.classes(e.n("select"),[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:I({textAlign:e.textAlign,color:e.textColor})},[b("div",{class:o(e.n("label"))},[e.isEmptyModelValue?A("v-if",!0):P(e.$slots,"selected",{key:0},()=>[e.multiple?(c(),S(ze,{key:0},[e.chip?(c(),S("div",{key:0,class:o(e.n("chips"))},[(c(!0),S(ze,null,Sa(e.labels,n=>(c(),re(r,{class:o(e.n("chip")),"var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:n,onClick:a[0]||(a[0]=Ge(()=>{},["stop"])),onClose:()=>e.handleClose(n)},{default:T(()=>[Ce(J(n),1)]),_:2},1032,["class","type","onClose"]))),128))],2)):(c(),S("div",{key:1,class:o(e.n("values"))},J(e.labels.join(e.separator)),3))],2112)):(c(),S("span",zl,J(e.label),1))])],2),P(e.$slots,"arrow-icon",{focus:e.isFocus},()=>[y(s,{class:o(e.classes(e.n("arrow"),[e.isFocus,e.n("--arrow-rotate")])),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])])],6),b("label",{class:o(e.classes(e.n("placeholder"),e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:I({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},J(e.placeholder),7)]),_:3},8,["class","offset-y","disabled","show","onClose"])],2),b("div",{class:o(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[P(e.$slots,"append-icon",{},()=>[e.clearable?(c(),re(s,{key:0,class:o(e.n("clear-icon")),name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):A("v-if",!0)])],2)],6),e.line?(c(),S("div",{key:0,class:o(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:I({background:e.errorMessage?void 0:e.blurColor})},[b("div",{class:o(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:I({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):A("v-if",!0),y(u,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var oa=G({name:"VarSelect",components:{VarIcon:Se,VarMenu:Ca,VarChip:me,VarFormDetails:ae},props:Ul,setup(e){var a=U(null),r=U(!1),s=N(()=>e.multiple),i=N(()=>e.focusColor),u=U(""),n=U([]),f=N(()=>Q(e.modelValue)),p=U("0px"),C=U(0),{bindForm:d,form:l}=we(),{length:$,options:V,bindOptions:F}=kl(),{errorMessage:K,validateWithTrigger:z,validate:H,resetValidation:Y}=Ve(),_=U(null),X=()=>{var{multiple:h,modelValue:v}=e;if(h){var B=v;n.value=B.map(g)}!h&&!Q(v)&&(u.value=g(v)),!h&&Q(v)&&(u.value="")},R=h=>{Pe(()=>{var{validateTrigger:v,rules:B,modelValue:E}=e;z(v,h,B,E)})},k=h=>{var{value:v,label:B}=h;return v.value!=null?v.value:B.value},g=h=>{var v,B,E=V.find(q=>{var{value:j}=q;return j.value===h});return E||(E=V.find(q=>{var{label:j}=q;return j.value===h})),(v=(B=E)==null?void 0:B.label.value)!=null?v:""},D=()=>{var{hint:h,modelValue:v}=e;if(!h&&!Q(v))return Me("--placeholder-hidden");if(h&&(!Q(v)||r.value))return Me("--placeholder-hint")},L=()=>a.value&&window.getComputedStyle(a.value).width||"0px",ne=()=>{var{disabled:h,readonly:v,onFocus:B}=e;l!=null&&l.disabled.value||l!=null&&l.readonly.value||h||v||(p.value=L(),C.value=ye(e.offsetY),r.value=!0,m(B),R("onFocus"))},t=()=>{var{disabled:h,readonly:v,onBlur:B}=e;l!=null&&l.disabled.value||l!=null&&l.readonly.value||h||v||(m(B),R("onBlur"))},w=h=>{var{disabled:v,readonly:B,multiple:E,onChange:q}=e;if(!(l!=null&&l.disabled.value||l!=null&&l.readonly.value||v||B)){var j=E?V.filter(se=>{var{selected:ie}=se;return ie.value}).map(k):k(h);m(e["onUpdate:modelValue"],j),m(q,j),R("onChange"),!E&&(r.value=!1)}},O=()=>{var{disabled:h,readonly:v,multiple:B,clearable:E,onClear:q}=e;if(!(l!=null&&l.disabled.value||l!=null&&l.readonly.value||h||v||!E)){var j=B?[]:void 0;m(e["onUpdate:modelValue"],j),m(q,j),R("onClear")}},oe=h=>{var{disabled:v,onClick:B}=e;l!=null&&l.disabled.value||v||(m(B,h),R("onClick"))},ia=h=>{var{disabled:v,readonly:B,modelValue:E,onClose:q}=e;if(!(l!=null&&l.disabled.value||l!=null&&l.readonly.value||v||B)){var j=E,se=V.find($e=>{var{label:ue}=$e;return ue.value===h}),ie=j.filter($e=>{var ue;return $e!==((ue=se.value.value)!=null?ue:se.label.value)});m(e["onUpdate:modelValue"],ie),m(q,ie),R("onClose")}},Ne=()=>{var{multiple:h,modelValue:v}=e;if(h){var B=v;V.forEach(E=>E.sync(B.includes(k(E))))}else V.forEach(E=>E.sync(v===k(E)));X()},ua=()=>{p.value=L(),C.value=ye(e.offsetY),r.value=!0},ta=()=>{r.value=!1},Ie=()=>H(e.rules,e.modelValue),De=()=>{m(e["onUpdate:modelValue"],e.multiple?[]:void 0),Y()};ee(()=>e.multiple,()=>{var{multiple:h,modelValue:v}=e;if(h&&!ka(v))throw Error("The modelValue must be an array when multiple is true")}),ee(()=>e.modelValue,Ne,{deep:!0}),ee(()=>$.value,Ne);var Ue={wrapWidth:N(()=>p.value),multiple:s,focusColor:i,onSelect:w,reset:De,validate:Ie,resetValidation:Y};return F(Ue),m(d,Ue),{wrapEl:a,offsetY:C,isFocus:r,errorMessage:K,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,label:u,labels:n,isEmptyModelValue:f,menuEl:_,n:Me,classes:Rl,computePlaceholderState:D,handleFocus:ne,handleBlur:t,handleClear:O,handleClick:oe,handleClose:ia,reset:De,validate:Ie,resetValidation:Y,focus:ua,blur:ta}}});oa.render=Al;const be=oa;be.install=function(e){e.component(be.name,be)};var Kl=be;const sa=e=>(Oa("data-v-f679240a"),e=e(),Ma(),e),Yl={style:{width:"100%","text-align":"-webkit-center"}},jl={class:"card"},Ll={key:0,style:{display:"flex","flex-direction":"row","align-items":"center"}},Wl=sa(()=>b("span",{style:{"font-size":"20px"}}," \u4F60\u5C06\u8981\u767B\u5F55\u81F3 ",-1)),Gl=sa(()=>b("div",{style:{width:"100%"}},"Sign in with Github",-1)),Hl=G({__name:"Auth",setup(e){const a=Ia("from",""),r=Va({email:"",password:""}),s=d=>{window.location.href=d},i=d=>(console.log(`[auth] redirectUrl: ${d}`),`https://github.com/login/oauth/authorize?client_id=7bf3cf55fcc4a2c315d0&scope=read:user,read:org&redirect_uri=${d}`),u=d=>a.value?`${d}?method=1%26from=${a.value}`:`${d}?method=1`,n=()=>{},f=U("@hikit.io"),{push:p}=$a();if(wa().get()){const{query:d}=Ba();p({path:"/login",query:d})}return(d,l)=>{const $=Da,V=Cl,F=sl,K=Ol,z=Kl,H=Il,Y=Fa,_=Ea,X=Ta,R=Na,k=fl;return c(),S("div",Yl,[b("div",jl,[Be(a)?(c(),S("div",Ll,[Wl,y($,{"text-size":"20",type:"primary",href:Be(a),target:"_blank"},{default:T(()=>[Ce(J(Be(a)),1)]),_:1},8,["href"])])):A("",!0),y(k,{ref:"form"},{default:T(()=>[y(R,{direction:"column",size:[14,0],wrap:!1},{default:T(()=>[y(H,{justify:"center"},{default:T(()=>[y(F,{span:16},{default:T(()=>[y(V,{modelValue:r.email,"onUpdate:modelValue":l[0]||(l[0]=g=>r.email=g),placeholder:"Email",autofocus:""},null,8,["modelValue"])]),_:1}),y(F,{span:8},{default:T(()=>[y(z,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=g=>f.value=g),style:{"min-width":"100px"}},{default:T(()=>[y(K,{label:"@hikit.io"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),y(V,{modelValue:r.password,"onUpdate:modelValue":l[2]||(l[2]=g=>r.password=g),placeholder:"Password",type:"password"},null,8,["modelValue"]),y(Y,{type:"primary",onClick:n,ripple:"",block:""},{default:T(()=>[Ce(" Login")]),_:1}),y(_),y(Y,{text:"",outline:"",onClick:l[3]||(l[3]=g=>s(i(u("https://auth.hikit.io/login")))),size:"normal",block:""},{default:T(()=>[y(R,{direction:"row",align:"center"},{default:T(()=>[y(X,{name:"github"}),Gl]),_:1})]),_:1})]),_:1})]),_:1},512)])])}}});const Jl=Pa(Hl,[["__scopeId","data-v-f679240a"]]);export{Jl as default};

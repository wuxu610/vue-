import{_ as e}from"./uni-icons.983a2416.js";import{r as t,o as r,a,w as i,d as l,n as s,e as n,h as o,b as u,j as c,F as d,aq as h,ah as m,g as f,ar as p,as as g}from"./index-d5db0b4a.js";import{r as y}from"./uni-app.es.d091b415.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";function v(e){let t="";for(let r in e){t+=`${r}:${e[r]};`}return t}const x=b({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:24},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#2979ff"},styles:{type:Object,default:()=>({color:"#333",disableColor:"#F7F6F6",borderColor:"#e5e5e5"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:""}),computed:{isVal(){const e=this.val;return!(!e&&0!==e)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(e){let t="";for(let r in e)e[r]&&(t+=`${r} `);return t}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled})},inputContentStyle(){const e=this.focusShow?this.primaryColor:this.styles.borderColor;return v({"border-color":(this.inputBorder&&this.msg?"#dd524d":e)||"#e5e5e5","background-color":this.disabled?this.styles.disableColor:this.styles.backgroundColor})},inputStyle(){return v({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":"10px","padding-left":this.prefixIcon?"":"10px"})}},watch:{value(e){this.val=e},modelValue(e){this.val=e},focus(e){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(e=>{this.localMsg=e}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(e){this.$emit("iconClick",e)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(e){let t=e.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(t=this.trimStr(t)),"string"==typeof this.trim&&(t=this.trimStr(t,this.trim))),this.errMsg&&(this.errMsg=""),this.val=t,this.$emit("input",t),this.$emit("update:modelValue",t)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(e){this.focusShow=!0,this.$emit("focus",e)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(e){if(e.detail.value,this.focusShow=!1,this.$emit("blur",e),this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:e}=this.form;"blur"===e&&this.formItem.onFieldChange()}},onConfirm(e){this.$emit("confirm",this.val),this.$emit("change",this.val)},onClear(e){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},trimStr:(e,t="both")=>"both"===t?e.trim():"left"===t?e.trimLeft():"right"===t?e.trimRight():"start"===t?e.trimStart():"end"===t?e.trimEnd():"all"===t?e.replace(/\s+/g,""):e}},[["render",function(p,g,b,v,x,S){const _=y(t("uni-icons"),e),w=h,k=m,$=f;return r(),a($,{class:s(["uni-easyinput",{"uni-easyinput-error":S.msg}]),style:n(S.boxStyle)},{default:i((()=>[l($,{class:s(["uni-easyinput__content",S.inputContentClass]),style:n(S.inputContentStyle)},{default:i((()=>[o(p.$slots,"prefixIcon",{},(()=>[b.prefixIcon?(r(),a(_,{key:0,class:"content-clear-icon",type:b.prefixIcon,color:"#c0c4cc",onClick:g[0]||(g[0]=e=>S.onClickIcon("prefix")),size:"22"},null,8,["type"])):u("",!0)]),!0),"textarea"===b.type?(r(),a(w,{key:0,class:s(["uni-easyinput__content-textarea",{"input-padding":b.inputBorder}]),name:b.name,value:x.val,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,disabled:b.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:S.inputMaxlength,focus:x.focused,autoHeight:b.autoHeight,onInput:S.onInput,onBlur:S._Blur,onFocus:S._Focus,onConfirm:S.onConfirm},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","onInput","onBlur","onFocus","onConfirm"])):(r(),a(k,{key:1,type:"password"===b.type?"text":b.type,class:"uni-easyinput__content-input",style:n(S.inputStyle),name:b.name,value:x.val,password:!x.showPassword&&"password"===b.type,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:b.disabled,maxlength:S.inputMaxlength,focus:x.focused,confirmType:b.confirmType,onFocus:S._Focus,onBlur:S._Blur,onInput:S.onInput,onConfirm:S.onConfirm},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","onFocus","onBlur","onInput","onConfirm"])),"password"===b.type&&b.passwordIcon?(r(),c(d,{key:2},[S.isVal?(r(),a(_,{key:0,class:s(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:x.showPassword?"eye-slash-filled":"eye-filled",size:22,color:x.focusShow?b.primaryColor:"#c0c4cc",onClick:S.onEyes},null,8,["class","type","color","onClick"])):u("",!0)],64)):b.suffixIcon||p.$slots.suffixIcon?o(p.$slots,"suffixIcon",{key:3},(()=>[b.suffixIcon?(r(),a(_,{key:0,class:"content-clear-icon",type:b.suffixIcon,color:"#c0c4cc",onClick:g[1]||(g[1]=e=>S.onClickIcon("suffix")),size:"22"},null,8,["type"])):u("",!0)]),!0):(r(),c(d,{key:4},[b.clearable&&S.isVal&&!b.disabled&&"textarea"!==b.type?(r(),a(_,{key:0,class:s(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:"clear",size:b.clearSize,color:S.msg?"#dd524d":x.focusShow?b.primaryColor:"#c0c4cc",onClick:S.onClear},null,8,["class","size","color","onClick"])):u("",!0)],64)),o(p.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-557863ac"]]);var S={email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")};const _={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function w(e,t=""){["label"].forEach((t=>{void 0===e[t]&&(e[t]="")}));let r=t;for(let a in e){let t=new RegExp("{"+a+"}");r=r.replace(t,e[a])}return r}const k={integer:e=>k.number(e)&&parseInt(e,10)===e,string:e=>"string"==typeof e,number:e=>!isNaN(e)&&"number"==typeof e,boolean:function(e){return"boolean"==typeof e},float:function(e){return k.number(e)&&!k.integer(e)},array:e=>Array.isArray(e),object:e=>"object"==typeof e&&!k.array(e),date:e=>e instanceof Date,timestamp(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:e=>"string"==typeof e.url,email:e=>"string"==typeof e&&!!e.match(S.email)&&e.length<255,url:e=>"string"==typeof e&&!!e.match(S.url),pattern(e,t){try{return new RegExp(e).test(t)}catch(r){return!1}},method:e=>"function"==typeof e,idcard:e=>"string"==typeof e&&!!e.match(S.idcard),"url-https"(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":e=>e.startsWith("://"),"url-web":e=>!1};const $={required:(e,t,r)=>e.required&&function(e,t){return null==e||"string"==typeof e&&!e||!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length}(t,e.format||typeof t)?w(e,e.errorMessage||r.required):null,range(e,t,r){const{range:a,errorMessage:i}=e;let l=new Array(a.length);for(let n=0;n<a.length;n++){const e=a[n];k.object(e)&&void 0!==e.value?l[n]=e.value:l[n]=e}let s=!1;return Array.isArray(t)?s=new Set(t.concat(l)).size===l.length:l.indexOf(t)>-1&&(s=!0),s?null:w(e,i||r.enum)},rangeNumber(e,t,r){if(!k.number(t))return w(e,e.errorMessage||r.pattern.mismatch);let{minimum:a,maximum:i,exclusiveMinimum:l,exclusiveMaximum:s}=e,n=l?t<=a:t<a,o=s?t>=i:t>i;return void 0!==a&&n?w(e,e.errorMessage||r.number[l?"exclusiveMinimum":"minimum"]):void 0!==i&&o?w(e,e.errorMessage||r.number[s?"exclusiveMaximum":"maximum"]):void 0!==a&&void 0!==i&&(n||o)?w(e,e.errorMessage||r.number.range):null},rangeLength(e,t,r){if(!k.string(t)&&!k.array(t))return w(e,e.errorMessage||r.pattern.mismatch);let a=e.minLength,i=e.maxLength,l=t.length;return void 0!==a&&l<a?w(e,e.errorMessage||r.length.minLength):void 0!==i&&l>i?w(e,e.errorMessage||r.length.maxLength):void 0!==a&&void 0!==i&&(l<a||l>i)?w(e,e.errorMessage||r.length.range):null},pattern:(e,t,r)=>k.pattern(e.pattern,t)?null:w(e,e.errorMessage||r.pattern.mismatch),format(e,t,r){var a=Object.keys(k),i=_[e.format]?_[e.format]:e.format||e.arrayType;return a.indexOf(i)>-1&&!k[i](t)?w(e,e.errorMessage||r.typeError):null},arrayTypeFormat(e,t,r){if(!Array.isArray(t))return w(e,e.errorMessage||r.typeError);for(let a=0;a<t.length;a++){const i=t[a];let l=this.format(e,i,r);if(null!==l)return l}return null}};class C extends class{constructor(e){this._message=e}async validateRule(e,t,r,a,i){var l=null;let s=t.rules;if(s.findIndex((e=>e.required))<0){if(null==r)return l;if("string"==typeof r&&!r.length)return l}var n=this._message;if(void 0===s)return n.default;for(var o=0;o<s.length;o++){let u=s[o],c=this._getValidateType(u);if(Object.assign(u,{label:t.label||`["${e}"]`}),$[c]&&null!=(l=$[c](u,r,n)))break;if(u.validateExpr){let e=Date.now();if(!1===u.validateExpr(r,i,e)){l=this._getMessage(u,u.errorMessage||this._message.default);break}}if(u.validateFunction&&null!==(l=await this.validateFunction(u,r,a,i,c)))break}return null!==l&&(l=n.TAG+l),l}async validateFunction(e,t,r,a,i){let l=null;try{let s=null;const n=await e.validateFunction(e,t,a||r,(e=>{s=e}));(s||"string"==typeof n&&n||!1===n)&&(l=this._getMessage(e,s||n,i))}catch(s){l=this._getMessage(e,s.message,i)}return l}_getMessage(e,t,r){return w(e,t||e.errorMessage||this._message[r]||t.default)}_getValidateType(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}{constructor(e,t){super(C.message),this._schema=e,this._options=t||null}updateSchema(e){this._schema=e}async validate(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidate(e,!1,t)),r.length?r[0]:null}async validateAll(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidate(e,!0,t)),r}async validateUpdate(e,t){let r=this._checkFieldInSchema(e);return r||(r=await this.invokeValidateUpdate(e,!1,t)),r.length?r[0]:null}async invokeValidate(e,t,r){let a=[],i=this._schema;for(let l in i){let s=i[l],n=await this.validateRule(l,s,e[l],e,r);if(null!=n&&(a.push({key:l,errorMessage:n}),!t))break}return a}async invokeValidateUpdate(e,t,r){let a=[];for(let i in e){let l=await this.validateRule(i,this._schema[i],e[i],e,r);if(null!=l&&(a.push({key:i,errorMessage:l}),!t))break}return a}_checkFieldInSchema(e){var t=Object.keys(e),r=Object.keys(this._schema);if(new Set(t.concat(r)).size===r.length)return"";var a=t.filter((e=>r.indexOf(e)<0));return[{key:"invalid",errorMessage:w({field:JSON.stringify(a)},C.message.TAG+C.message.defaultInvalid)}]}}C.message=new function(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}};const M=(e,t,r)=>{const a=r.find((e=>{return e.format&&("int"===(t=e.format)||"double"===t||"number"===t||"timestamp"===t);var t})),i=r.find((e=>e.format&&"boolean"===e.format||"bool"===e.format));return a&&(t=t||0===t?A(Number(t))?Number(t):t:null),i&&(t=!!B(t)&&t),t},I=(e,t)=>N(t,e),F=(e,t={})=>{const r=O(e);if("object"==typeof r&&Array.isArray(r)&&r.length>1){return r.reduce(((e,t)=>e+`#${t}`),"_formdata_")}return r[0]||e},j=e=>{let t=e.replace("_formdata_#","");return t=t.split("#").map((e=>A(e)?Number(e):e)),t},V=(e,t,r)=>("object"!=typeof e||O(t).reduce(((e,t,a,i)=>a===i.length-1?(e[t]=r,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(i[a+1])?[]:{}),e[t])),e),e);function O(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}const N=(e,t,r="undefined")=>{let a=O(t).reduce(((e,t)=>(e||{})[t]),e);return a&&void 0===a?r:a},A=e=>!isNaN(Number(e)),B=e=>"boolean"==typeof e;const T=b({name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:()=>null},modelValue:{type:Object,default:()=>null},model:{type:Object,default:()=>null},rules:{type:Object,default:()=>({})},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide(){return{uniForm:this}},data:()=>({formData:{},formRules:{}}),computed:{localData(){const e=this.model||this.modelValue||this.value;return e?(t=e,JSON.parse(JSON.stringify(t))):{};var t}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created(){p().$vm.$.appContext.config.globalProperties.binddata||(p().$vm.$.appContext.config.globalProperties.binddata=function(e,t,r){if(r)this.$refs[r].setValue(e,t);else{let r;for(let e in this.$refs){const t=this.$refs[e];if(t&&t.$options&&"uniForms"===t.$options.name){r=t;break}}if(!r)return console.error("当前 uni-froms 组件缺少 ref 属性");r.setValue(e,t)}}),this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new C(e)},setValue(e,t){let r=this.childrens.find((t=>t.name===e));return r?(this.formData[e]=M(0,t,this.formRules[e]&&this.formRules[e].rules||[]),r.onFieldChange(this.formData[e])):null},validate(e,t){return this.checkAll(this.formData,e,t)},validateField(e=[],t){e=[].concat(e);let r={};return this.childrens.forEach((t=>{const a=F(t.name);-1!==e.indexOf(a)&&(r=Object.assign({},r,{[a]:this.formData[a]}))})),this.checkAll(r,[],t)},clearValidate(e=[]){e=[].concat(e),this.childrens.forEach((t=>{if(0===e.length)t.errMsg="";else{const r=F(t.name);-1!==e.indexOf(r)&&(t.errMsg="")}}))},submit(e,t,r){for(let a in this.dataValue){this.childrens.find((e=>e.name===a))&&void 0===this.formData[a]&&(this.formData[a]=this._getValue(a,this.dataValue[a]))}return r||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},async checkAll(e,t,r,a){if(!this.validator)return;let i,l=[];for(let u in e){const e=this.childrens.find((e=>F(e.name)===u));e&&l.push(e)}r||"function"!=typeof t||(r=t),!r&&"function"!=typeof r&&Promise&&(i=new Promise(((e,t)=>{r=function(r,a){r?t(r):e(a)}})));let s=[],n=JSON.parse(JSON.stringify(e));for(let u in l){const e=l[u];let t=F(e.name);const r=await e.onFieldChange(n[t]);if(r&&(s.push(r),"toast"===this.errShowType||"modal"===this.errShowType))break}Array.isArray(s)&&0===s.length&&(s=null),Array.isArray(t)&&t.forEach((e=>{let t=F(e),r=I(e,this.localData);void 0!==r&&(n[t]=r)})),"submit"===a?this.$emit("submit",{detail:{value:n,errors:s}}):this.$emit("validate",s);let o={};return o=((e={},t)=>{let r=JSON.parse(JSON.stringify(e)),a={};for(let i in r){let e=j(i);V(a,e,r[i])}return a})(n,this.name),r&&"function"==typeof r&&r(s,o),i&&r?i:null},validateCheck(e){this.$emit("validate",e)},_getValue:M,_isRequiredField:e=>{let t=!1;for(let r=0;r<e.length;r++){if(e[r].required){t=!0;break}}return t},_setDataValue:(e,t,r)=>(t[e]=r,r||""),_getDataValue:I,_realName:F,_isRealName:e=>/^_formdata_#*/.test(e),_isEqual:(e,t)=>{if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var r=toString.call(e);if(r!==toString.call(t))return!1;switch(r){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}if("[object Object]"==r){var a=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);if(a.length!=i.length)return!1;for(var l=0;l<a.length;l++){var s=a[l];if(e[s]!==t[s])return!1}return!0}return"[object Array]"==r?e.toString()==t.toString():void 0}}},[["render",function(e,t,s,n,u,c){const d=g,h=f;return r(),a(h,{class:"uni-forms"},{default:i((()=>[l(d,null,{default:i((()=>[o(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-3793396f"]]);export{x as _,T as a};

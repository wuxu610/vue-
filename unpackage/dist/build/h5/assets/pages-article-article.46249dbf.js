import{al as t,o as a,a as e,w as i,g as s,d as l,f as r,t as o,b as n,i as d,r as c}from"./index-d5db0b4a.js";import{_ as u}from"./uni-card.abd4662b.js";import{r as p}from"./uni-app.es.d091b415.js";import{_ as m}from"./uni-section.b7492178.js";import{g as f}from"./index.d9e3679f.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const _=h({data:()=>({id:"",article:null}),onLoad(t){this.id=t.id,this.getDetail()},methods:{getDetail(){f(`api/article/one?id=${this.id}`,null).then((a=>{console.log(a.data),this.article=a.data.article,t({title:a.data.article.title})}))}}},[["render",function(t,f,h,_,g,j){const x=d,y=p(c("uni-card"),u),D=p(c("uni-section"),m),w=s;return a(),e(w,null,{default:i((()=>[g.article?(a(),e(D,{key:0,title:g.article.title,type:"line",style:{height:"620px"}},{default:i((()=>[l(y,{"is-shadow":!1,extra:new Date(g.article.createTime).toLocaleDateString()},{default:i((()=>[l(x,{class:"uni-body"},{default:i((()=>[r(o(g.article.content),1)])),_:1})])),_:1},8,["extra"])])),_:1},8,["title"])):n("",!0)])),_:1})}]]);export{_ as default};

import{_ as a,L as t,s as e,o as s,c as i,w as l,i as d,a as n,D as o,f as c,g as p}from"./index-1840daf0.js";import{_ as u}from"./uni-data-select.cd3809bc.js";const r=a({data:()=>({url:"",appId:""}),watch:{appId:{async handler(a){if(a){const e=t.importObject("uni-push-co");let s=await e.getAdminUrl(a);console.log(s.data+"#/statistics/351843721360372/pushStatistics?mode=uni-admin"),this.url=s.data+"#/statistics/351843721360372/pushStatistics?mode=uni-admin"}else e({title:"请先选择一个应用",icon:"none"})},immediate:!0}}},[["render",function(a,t,e,r,m,f){const h=c(p("uni-data-select"),u),I=d;return s(),i(I,null,{default:l((()=>[n(h,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:m.appId,"onUpdate:modelValue":t[0]||(t[0]=a=>m.appId=a),clear:!1},null,8,["modelValue"]),o("iframe",{src:m.url},null,8,["src"])])),_:1})}],["__scopeId","data-v-30b8a87f"]]);export{r as default};